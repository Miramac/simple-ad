[simple-ad](../README.md) / [Exports](../modules.md) / export=

# Class: export=

Creates a new LDAP client

## Table of contents

### Constructors

- [constructor](export_.md#constructor)

### Properties

- [#password](export_.md##password)
- [client](export_.md#client)
- [clientOptions](export_.md#clientoptions)
- [tlsOptions](export_.md#tlsoptions)
- [url](export_.md#url)
- [username](export_.md#username)

### Methods

- [addGroupMember](export_.md#addgroupmember)
- [bind](export_.md#bind)
- [deleteGroupMember](export_.md#deletegroupmember)
- [findGroup](export_.md#findgroup)
- [findUser](export_.md#finduser)
- [isGroupMember](export_.md#isgroupmember)
- [modifyGroupMember](export_.md#modifygroupmember)
- [search](export_.md#search)
- [unbind](export_.md#unbind)

## Constructors

### constructor

• **new export=**(`options`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `ActiveDirectoryOptions` |

#### Defined in

[ActiveDirectory.ts:39](https://github.com/Miramac/simple-ad/blob/7d3db06/lib/ActiveDirectory.ts#L39)

## Properties

### #password

• `Private` **#password**: `string`

#### Defined in

[ActiveDirectory.ts:35](https://github.com/Miramac/simple-ad/blob/7d3db06/lib/ActiveDirectory.ts#L35)

___

### client

• **client**: `any`

#### Defined in

[ActiveDirectory.ts:37](https://github.com/Miramac/simple-ad/blob/7d3db06/lib/ActiveDirectory.ts#L37)

___

### clientOptions

• **clientOptions**: `ClientOptions`

#### Defined in

[ActiveDirectory.ts:36](https://github.com/Miramac/simple-ad/blob/7d3db06/lib/ActiveDirectory.ts#L36)

___

### tlsOptions

• **tlsOptions**: `Object`

#### Defined in

[ActiveDirectory.ts:33](https://github.com/Miramac/simple-ad/blob/7d3db06/lib/ActiveDirectory.ts#L33)

___

### url

• **url**: `string`

#### Defined in

[ActiveDirectory.ts:32](https://github.com/Miramac/simple-ad/blob/7d3db06/lib/ActiveDirectory.ts#L32)

___

### username

• **username**: `string`

#### Defined in

[ActiveDirectory.ts:34](https://github.com/Miramac/simple-ad/blob/7d3db06/lib/ActiveDirectory.ts#L34)

## Methods

### addGroupMember

▸ **addGroupMember**(`groupDN`, `memberDN`): `Promise`<`void`\>

Delete one group member

#### Parameters

| Name | Type |
| :------ | :------ |
| `groupDN` | `string` |
| `memberDN` | `string` |

#### Returns

`Promise`<`void`\>

#### Defined in

[ActiveDirectory.ts:206](https://github.com/Miramac/simple-ad/blob/7d3db06/lib/ActiveDirectory.ts#L206)

___

### bind

▸ **bind**(): `Promise`<`void`\>

Bind to the LDAP Server

#### Returns

`Promise`<`void`\>

#### Defined in

[ActiveDirectory.ts:50](https://github.com/Miramac/simple-ad/blob/7d3db06/lib/ActiveDirectory.ts#L50)

___

### deleteGroupMember

▸ **deleteGroupMember**(`groupDN`, `memberDN`): `Promise`<``null`` \| `void`\>

Remove one group member

#### Parameters

| Name | Type |
| :------ | :------ |
| `groupDN` | `string` |
| `memberDN` | `string` |

#### Returns

`Promise`<``null`` \| `void`\>

#### Defined in

[ActiveDirectory.ts:215](https://github.com/Miramac/simple-ad/blob/7d3db06/lib/ActiveDirectory.ts#L215)

___

### findGroup

▸ **findGroup**(`groupDN`, `attributes`): `Promise`<`any`\>

Find Group objects

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `groupDN` | `string` | - |
| `attributes` | `string`[] | ['cn', 'dn', 'member'] |

#### Returns

`Promise`<`any`\>

#### Defined in

[ActiveDirectory.ts:129](https://github.com/Miramac/simple-ad/blob/7d3db06/lib/ActiveDirectory.ts#L129)

___

### findUser

▸ **findUser**(`userDN`, `attributes`): `Promise`<`any`\>

Find a user objects

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `userDN` | `string` | - |
| `attributes` | `string`[] | ['cn', 'dn', 'memberOf'] |

#### Returns

`Promise`<`any`\>

#### Defined in

[ActiveDirectory.ts:229](https://github.com/Miramac/simple-ad/blob/7d3db06/lib/ActiveDirectory.ts#L229)

___

### isGroupMember

▸ **isGroupMember**(`groupDN`, `memberDN`): `Promise`<`boolean`\>

Check if entry is member in group

#### Parameters

| Name | Type |
| :------ | :------ |
| `groupDN` | `string` |
| `memberDN` | `string` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[ActiveDirectory.ts:156](https://github.com/Miramac/simple-ad/blob/7d3db06/lib/ActiveDirectory.ts#L156)

___

### modifyGroupMember

▸ **modifyGroupMember**(`groupDN`, `members`, `operation`): `Promise`<`void`\>

Add or delete group members

#### Parameters

| Name | Type |
| :------ | :------ |
| `groupDN` | `string` |
| `members` | `string` \| `string`[] |
| `operation` | `ModifyOperation` |

#### Returns

`Promise`<`void`\>

#### Defined in

[ActiveDirectory.ts:172](https://github.com/Miramac/simple-ad/blob/7d3db06/lib/ActiveDirectory.ts#L172)

___

### search

▸ **search**(`dn`, `options`): `Promise`<`any`[]\>

Perform a LDAP search: http://ldapjs.org/client.html#search

#### Parameters

| Name | Type |
| :------ | :------ |
| `dn` | `string` |
| `options` | `object` |

#### Returns

`Promise`<`any`[]\>

#### Defined in

[ActiveDirectory.ts:83](https://github.com/Miramac/simple-ad/blob/7d3db06/lib/ActiveDirectory.ts#L83)

___

### unbind

▸ **unbind**(): `Promise`<`void`\>

Unbind the connection

#### Returns

`Promise`<`void`\>

#### Defined in

[ActiveDirectory.ts:69](https://github.com/Miramac/simple-ad/blob/7d3db06/lib/ActiveDirectory.ts#L69)
