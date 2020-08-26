import ldap from 'ldapjs'
import { stringify } from 'querystring'
import { promises } from 'fs'

interface ClientOptions {
  url: string, // A valid LDAP URL (proto/host/port only)
  // socketPath 	Socket path if using AF_UNIX sockets
  // log 	Bunyan logger instance (Default: built-in instance)
  // timeout 	Milliseconds client should let operations live for before timing out (Default: Infinity)
  // connectTimeout 	Milliseconds client should wait before timing out on TCP connections (Default: OS default)
  // tlsOptions 	Additional options passed to TLS connection layer when connecting via ldaps:// (See: The TLS docs for node.js)
  // idleTimeout 	Milliseconds after last activity before client emits idle event
  // strictDN 	Force strict DN parsing for client methods (Default is true)
  username: string,
  password: string,
  baseDN: string
}

type ModifyOperation = 'add' | 'delete'

export class Client {
  url: string
  username: string
  #password: string
  baseDN: string
  ldapClient: any

  constructor (options: ClientOptions) {
    this.url = options.url
    this.username = options.username
    this.#password = options.password
    this.baseDN = options.baseDN
   
  }

  bind() {
    return new Promise((resolve, reject) => {
      this.ldapClient = ldap.createClient({
        url: this.url
      })
      this.ldapClient.bind(this.username, this.#password, async (err: Error) => {
        if (err) {
          await this.unbind()
          return reject(err)
        }
        resolve()
      })
    })
  }

  unbind() {
    return new Promise((resolve, reject) => {
      this.ldapClient.unbind((err: Error) => {
        if (err) return reject(err)
        resolve()
      })
    })
  }

  search(dn: string, options: object)  {
    return new Promise<any[]>(async (resolve, reject) => {
      try {
        await this.bind()
      } catch (e) {
        return reject(e)
      }
      this.ldapClient.search(dn, options, (err: Error, res: any) => {
        if (err) {
          console.log('List groups error:', err)
          return reject(err)
        }
        var entries: any[] = []
        res.on('searchEntry', (entry: any) => {
          entries.push(entry)
        })

        const done = async () => {
          try {
            await this.unbind()
          } catch (e) {
            return reject(e)
          }
          if (entries.length === 0) return resolve([])
          var result = entries.map(function (e) { return e.object })
          resolve(result)
        }

        res.on('error', async (err: Error) => {
          if (err.message === 'Size Limit Exceeded') return done()
          try {
            await this.unbind()
          } catch (e) {
            reject(e)
          }
          reject(err)
        })
        res.on('end', done)
      })
    })
  }

  async findGroup(dn: string, attributes: string[]) {
    
    const opts = {
      scope: 'sub',
      filter: '(&(objectclass=group))',
      attributes: attributes
    }
    return await this.search(dn, opts)
  }

  async isGroupMember(dn: string, member: string) {
    const opts = {
      scope: 'sub',
      filter: `(&(objectclass=group)(member=${member}))`,
      attributes: ['cn']
    }
    const results: any[] = await this.search(dn, opts)
    return (results.length === 1)
  }


  async modifyGroupMember(groupDN: string, member: string | string[], operation: ModifyOperation) {
    member = (!Array.isArray(member)) ? [member] : member
    const change = new ldap.Change({
      operation: operation,
      modification: {
        member: member
      }
    })
    return new Promise(async (resolve, reject) => {
      try {
        await this.bind()
      } catch (e) {
        return reject(e)
      }
      this.ldapClient.modify(groupDN, change, async (err: Error) => {
        try {
          await this.unbind()
        } catch (e) {
          reject(e)
        }
        
        if (err && err.name !== 'EntryAlreadyExistsError') {
          return reject(err)
        }
        resolve()
      })
    })
  }

  async addGroupMember(groupDN: string, member: string) {
    return this.modifyGroupMember(groupDN, member,'add')
  }
  async deleteGroupMember(groupDN: string, member: string) {
    // Check is is member in group
     if(await this.isGroupMember(groupDN, member)) {
        return this.modifyGroupMember(groupDN, member, 'delete')
     } else {
       return null
     }
  }
}
