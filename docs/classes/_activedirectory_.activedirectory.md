**[simple-ad](../README.md)**

> [Globals](../globals.md) / ["ActiveDirectory"](../modules/_activedirectory_.md) / ActiveDirectory

# Class: ActiveDirectory

Creates a new LDAP client

## Hierarchy

* **ActiveDirectory**

## Index

### Constructors

* [constructor](_activedirectory_.activedirectory.md#constructor)

### Properties

* [#password](_activedirectory_.activedirectory.md##password)
* [client](_activedirectory_.activedirectory.md#client)
* [clientOptions](_activedirectory_.activedirectory.md#clientoptions)
* [url](_activedirectory_.activedirectory.md#url)
* [username](_activedirectory_.activedirectory.md#username)

### Methods

* [addGroupMember](_activedirectory_.activedirectory.md#addgroupmember)
* [bind](_activedirectory_.activedirectory.md#bind)
* [deleteGroupMember](_activedirectory_.activedirectory.md#deletegroupmember)
* [findGroup](_activedirectory_.activedirectory.md#findgroup)
* [isGroupMember](_activedirectory_.activedirectory.md#isgroupmember)
* [modifyGroupMember](_activedirectory_.activedirectory.md#modifygroupmember)
* [search](_activedirectory_.activedirectory.md#search)
* [unbind](_activedirectory_.activedirectory.md#unbind)

## Constructors

### constructor

\+ **new ActiveDirectory**(`options`: [ActiveDirectoryOptions](../interfaces/_activedirectory_.activedirectoryoptions.md)): [ActiveDirectory](_activedirectory_.activedirectory.md)

*Defined in [ActiveDirectory.ts:28](https://github.com/Miramac/simple-ad/blob/bad7525/lib/ActiveDirectory.ts#L28)*

#### Parameters:

Name | Type |
------ | ------ |
`options` | [ActiveDirectoryOptions](../interfaces/_activedirectory_.activedirectoryoptions.md) |

**Returns:** [ActiveDirectory](_activedirectory_.activedirectory.md)

## Properties

### #password

• `Private` **#password**: string

*Defined in [ActiveDirectory.ts:26](https://github.com/Miramac/simple-ad/blob/bad7525/lib/ActiveDirectory.ts#L26)*

___

### client

•  **client**: any

*Defined in [ActiveDirectory.ts:28](https://github.com/Miramac/simple-ad/blob/bad7525/lib/ActiveDirectory.ts#L28)*

___

### clientOptions

•  **clientOptions**: ClientOptions

*Defined in [ActiveDirectory.ts:27](https://github.com/Miramac/simple-ad/blob/bad7525/lib/ActiveDirectory.ts#L27)*

___

### url

•  **url**: string

*Defined in [ActiveDirectory.ts:24](https://github.com/Miramac/simple-ad/blob/bad7525/lib/ActiveDirectory.ts#L24)*

___

### username

•  **username**: string

*Defined in [ActiveDirectory.ts:25](https://github.com/Miramac/simple-ad/blob/bad7525/lib/ActiveDirectory.ts#L25)*

## Methods

### addGroupMember

▸ **addGroupMember**(`groupDN`: string, `memberDN`: string): Promise\<unknown>

*Defined in [ActiveDirectory.ts:195](https://github.com/Miramac/simple-ad/blob/bad7525/lib/ActiveDirectory.ts#L195)*

Delete one group member

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`groupDN` | string |  |
`memberDN` | string |   |

**Returns:** Promise\<unknown>

___

### bind

▸ **bind**(): Promise\<unknown>

*Defined in [ActiveDirectory.ts:40](https://github.com/Miramac/simple-ad/blob/bad7525/lib/ActiveDirectory.ts#L40)*

Bind to the LDAP Server

**Returns:** Promise\<unknown>

___

### deleteGroupMember

▸ **deleteGroupMember**(`groupDN`: string, `memberDN`: string): Promise\<unknown>

*Defined in [ActiveDirectory.ts:204](https://github.com/Miramac/simple-ad/blob/bad7525/lib/ActiveDirectory.ts#L204)*

Remove one group member

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`groupDN` | string |  |
`memberDN` | string |   |

**Returns:** Promise\<unknown>

___

### findGroup

▸ **findGroup**(`groupDN`: string, `attributes`: string[]): Promise\<any>

*Defined in [ActiveDirectory.ts:118](https://github.com/Miramac/simple-ad/blob/bad7525/lib/ActiveDirectory.ts#L118)*

Find Group objects

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`groupDN` | string | - |
`attributes` | string[] |   |

**Returns:** Promise\<any>

___

### isGroupMember

▸ **isGroupMember**(`groupDN`: string, `memberDN`: string): Promise\<boolean>

*Defined in [ActiveDirectory.ts:145](https://github.com/Miramac/simple-ad/blob/bad7525/lib/ActiveDirectory.ts#L145)*

Check if entry is member in group

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`groupDN` | string |  |
`memberDN` | string |   |

**Returns:** Promise\<boolean>

___

### modifyGroupMember

▸ **modifyGroupMember**(`groupDN`: string, `members`: string \| string[], `operation`: [ModifyOperation](../modules/_activedirectory_.md#modifyoperation)): Promise\<unknown>

*Defined in [ActiveDirectory.ts:161](https://github.com/Miramac/simple-ad/blob/bad7525/lib/ActiveDirectory.ts#L161)*

Add or delete group members

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`groupDN` | string |  |
`members` | string \| string[] |  |
`operation` | [ModifyOperation](../modules/_activedirectory_.md#modifyoperation) |   |

**Returns:** Promise\<unknown>

___

### search

▸ **search**(`dn`: string, `options`: object): Promise\<any[]>

*Defined in [ActiveDirectory.ts:72](https://github.com/Miramac/simple-ad/blob/bad7525/lib/ActiveDirectory.ts#L72)*

Perform a LDAP search: http://ldapjs.org/client.html#search

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`dn` | string |  |
`options` | object |   |

**Returns:** Promise\<any[]>

___

### unbind

▸ **unbind**(): Promise\<unknown>

*Defined in [ActiveDirectory.ts:58](https://github.com/Miramac/simple-ad/blob/bad7525/lib/ActiveDirectory.ts#L58)*

Unbind the connection

**Returns:** Promise\<unknown>
