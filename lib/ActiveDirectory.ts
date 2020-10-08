import ldap from 'ldapjs'

interface ActiveDirectoryOptions {
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
  clientOptions: ldap.ClientOptions
}

type ModifyOperation = 'add' | 'delete'

/**
 * Creates a new LDAP client
 * @class ActiveDirectory
 */
class ActiveDirectory {
  url: string
  username: string
  #password: string
  clientOptions: ldap.ClientOptions
  client: any

  constructor (options: ActiveDirectoryOptions) {
    this.url = options.url
    this.username = options.username
    this.#password = options.password
    this.clientOptions = options.clientOptions
  }

  /**
   * Bind to the LDAP Server
   */
  bind() {
    return new Promise((resolve, reject) => {
      this.client = ldap.createClient({
        url: this.url
      })
      this.client.bind(this.username, this.#password, async (err: Error) => {
        if (err) {
          await this.unbind()
          return reject(err)
        }
        resolve()
      })
    })
  }

  /**
   * Unbind the connection
   */
  unbind() {
    return new Promise((resolve, reject) => {
      this.client.unbind((err: Error) => {
        if (err) return reject(err)
        resolve()
      })
    })
  }

  /**
   * Perform a LDAP search: http://ldapjs.org/client.html#search
   * @param dn 
   * @param options 
   */
  search(dn: string, options: object)  {
    return new Promise<any[]>(async (resolve, reject) => {
      try {
        await this.bind()
      } catch (e) {
        return reject(e)
      }
      this.client.search(dn, options, (err: Error, res: any) => {
        if (err) {
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

  /**
   * Find Group objects
   * @param dn 
   * @param attributes 
   */
  async findGroup(groupDN: string, attributes: string[]) {
    
    const options = {
      scope: 'sub',
      filter: '(&(objectclass=group))',
      attributes: attributes
    }
    const groups = await this.search(groupDN, options)
    // if attribute 'member' is requested, the function always will return an member array
    if (attributes.indexOf('member') !== -1) {
      for (let i = 0; i < groups.length; i++) {
        if(typeof groups[i].member === 'undefined') {
          groups[i].member = []
        } else if(!Array.isArray(groups[i].member)) {
          groups[i].member = [groups[i].member]
        }
      }
    }
    // If only one group found, retrun the group object not an array
    return (groups.length === 1) ? groups[0] : groups
  }

  /**
   * Check if entry is member in group
   * @param groupDN 
   * @param memberDN
   */
  async isGroupMember(groupDN: string, memberDN: string) {
    const options = {
      scope: 'sub',
      filter: `(&(objectclass=group)(member=${memberDN}))`,
      attributes: ['cn']
    }
    const results = await this.search(groupDN, options)
    return (results.length > 0)
  }

 /**
  * Add or delete group members
  * @param groupDN 
  * @param members 
  * @param operation 
  */
  async modifyGroupMember(groupDN: string, members: string | string[], operation: ModifyOperation) {
    members = (!Array.isArray(members)) ? [members] : members
    const change = new ldap.Change({
      operation: operation,
      modification: {
        member: members
      }
    })
    return new Promise(async (resolve, reject) => {
      try {
        await this.bind()
      } catch (e) {
        return reject(e)
      }
      this.client.modify(groupDN, change, async (err: Error) => {
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

  /**
   * Delete one group member
   * @param groupDN 
   * @param memberDN 
   */
  async addGroupMember(groupDN: string, memberDN: string) {
    return this.modifyGroupMember(groupDN, memberDN,'add')
  }

  /**
   * Remove one group member
   * @param groupDN 
   * @param memberDN
   */
  async removeGroupMember(groupDN: string, memberDN: string) {
    // Check is is member in group
     if(await this.isGroupMember(groupDN, memberDN)) {
        return this.modifyGroupMember(groupDN, memberDN, 'delete')
     } else {
       return null
     }
  }
}


export = ActiveDirectory
