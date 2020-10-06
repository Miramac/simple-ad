#simple-ad

A basic client read and write wrapper for ldapjs.

````javascript
const ActiveDirectory = require('simple-ad')
require('dotenv').config()
const config = {
  url: process.env.LDAP_URL,
  username: process.env.LDAP_USER,
  password: process.env.LDAP_PASSWORD
}

const group = 'CN=MyGroupName,OU=MySubOU,OU=MyOU,DC=example,DC=com'
const activeDirectory = new ActiveDirectory(config)
await ad.findGroup(group,
  ['dn', 'cn', 'member']
).then(result => {
  console.log(result)
}).catch(e) {
  // Some error
}

````

> findGroup(groupDN)

>  isGroupMember(groupDN, member)

>  modifyGroupMember(groupDN, member, operation)

> addGroupMember(groupDN, member)

> deleteGroupMember(groupDN, member)