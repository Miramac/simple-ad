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

*Defined in ActiveDirectory.ts:28*

#### Parameters:

Name | Type |
------ | ------ |
`options` | [ActiveDirectoryOptions](../interfaces/_activedirectory_.activedirectoryoptions.md) |

**Returns:** [ActiveDirectory](_activedirectory_.activedirectory.md)

## Properties

### #password

• `Private` **#password**: string

*Defined in ActiveDirectory.ts:26*

___

### client

•  **client**: any

*Defined in ActiveDirectory.ts:28*

___

### clientOptions

•  **clientOptions**: ClientOptions

*Defined in ActiveDirectory.ts:27*

___

### url

•  **url**: string

*Defined in ActiveDirectory.ts:24*

___

### username

•  **username**: string

*Defined in ActiveDirectory.ts:25*

## Methods

### addGroupMember

▸ **addGroupMember**(`groupDN`: string, `member`: string): Promise\<unknown>

*Defined in ActiveDirectory.ts:184*

Delete one group member

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`groupDN` | string |  |
`member` | string |   |

**Returns:** Promise\<unknown>

___

### bind

▸ **bind**(): Promise\<unknown>

*Defined in ActiveDirectory.ts:40*

Bind to the LDAP Server

**Returns:** Promise\<unknown>

___

### deleteGroupMember

▸ **deleteGroupMember**(`groupDN`: string, `member`: string): Promise\<unknown>

*Defined in ActiveDirectory.ts:193*

Add one group member

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`groupDN` | string |  |
`member` | string |   |

**Returns:** Promise\<unknown>

___

### findGroup

▸ **findGroup**(`dn`: string, `attributes`: string[]): Promise\<any[]>

*Defined in ActiveDirectory.ts:119*

Find Group objects

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`dn` | string |  |
`attributes` | string[] |   |

**Returns:** Promise\<any[]>

___

### isGroupMember

▸ **isGroupMember**(`groupDN`: string, `member`: string): Promise\<boolean>

*Defined in ActiveDirectory.ts:134*

Check if entry is member in group

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`groupDN` | string |  |
`member` | string |   |

**Returns:** Promise\<boolean>

___

### modifyGroupMember

▸ **modifyGroupMember**(`groupDN`: string, `member`: string \| string[], `operation`: [ModifyOperation](../modules/_activedirectory_.md#modifyoperation)): Promise\<unknown>

*Defined in ActiveDirectory.ts:150*

Add or delete group member

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`groupDN` | string |  |
`member` | string \| string[] |  |
`operation` | [ModifyOperation](../modules/_activedirectory_.md#modifyoperation) |   |

**Returns:** Promise\<unknown>

___

### search

▸ **search**(`dn`: string, `options`: object): Promise\<any[]>

*Defined in ActiveDirectory.ts:72*

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

*Defined in ActiveDirectory.ts:58*

Unbind the connection

**Returns:** Promise\<unknown>
