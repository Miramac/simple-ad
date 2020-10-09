# simple-ad

Basic ldapjs wrapper to read and write AD objects.

````javascript
const ActiveDirectory = require('simple-ad')
require('dotenv').config()
const config = {
  url: process.env.LDAP_URL,
  username: process.env.LDAP_USER,
  password: process.env.LDAP_PASSWORD
}

const group = 'CN=MyGroupName,OU=MySubOU,OU=MyOU,DC=example,DC=com'
const ad = new ActiveDirectory(config)
ad.findGroup(group,
  ['dn', 'cn', 'member']
).then(result => {
  console.log(result)
}).catch(e) {
  // Some error
  console.error(e)
}

````

> findGroup(groupDN, attributes)

> isGroupMember(groupDN, memberDN)

> modifyGroupMember(groupDN, memberDN, operation)

> addGroupMember(groupDN, memberDN)

> deleteGroupMember(groupDN, memberDN)
