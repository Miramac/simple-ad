[simple-ad](../README.md) / [Exports](../modules.md) / default

# Class: default

Creates a new LDAP client

## Table of contents

### Constructors

- [constructor](default.md#constructor)

### Properties

- [#password](default.md##password)
- [client](default.md#client)
- [clientOptions](default.md#clientoptions)
- [tlsOptions](default.md#tlsoptions)
- [url](default.md#url)
- [username](default.md#username)

### Methods

- [addGroupMember](default.md#addgroupmember)
- [bind](default.md#bind)
- [deleteGroupMember](default.md#deletegroupmember)
- [findGroup](default.md#findgroup)
- [findUser](default.md#finduser)
- [isGroupMember](default.md#isgroupmember)
- [modifyGroupMember](default.md#modifygroupmember)
- [search](default.md#search)
- [unbind](default.md#unbind)

## Constructors

### constructor

• **new default**(`options`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `ActiveDirectoryOptions` |

#### Defined in

[ActiveDirectory.ts:39](https://github.com/Miramac/simple-ad/blob/9855696/lib/ActiveDirectory.ts#L39)

## Properties

### #password

• `Private` **#password**: `string`

#### Defined in

[ActiveDirectory.ts:35](https://github.com/Miramac/simple-ad/blob/9855696/lib/ActiveDirectory.ts#L35)

___

### client

• **client**: `any`

#### Defined in

[ActiveDirectory.ts:37](https://github.com/Miramac/simple-ad/blob/9855696/lib/ActiveDirectory.ts#L37)

___

### clientOptions

• **clientOptions**: `ClientOptions`

#### Defined in

[ActiveDirectory.ts:36](https://github.com/Miramac/simple-ad/blob/9855696/lib/ActiveDirectory.ts#L36)

___

### tlsOptions

• **tlsOptions**: `Object`

#### Defined in

[ActiveDirectory.ts:33](https://github.com/Miramac/simple-ad/blob/9855696/lib/ActiveDirectory.ts#L33)

___

### url

• **url**: `string`

#### Defined in

[ActiveDirectory.ts:32](https://github.com/Miramac/simple-ad/blob/9855696/lib/ActiveDirectory.ts#L32)

___

### username

• **username**: `string`

#### Defined in

[ActiveDirectory.ts:34](https://github.com/Miramac/simple-ad/blob/9855696/lib/ActiveDirectory.ts#L34)

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

[ActiveDirectory.ts:207](https://github.com/Miramac/simple-ad/blob/9855696/lib/ActiveDirectory.ts#L207)

___

### bind

▸ **bind**(): `Promise`<`void`\>

Bind to the LDAP Server

#### Returns

`Promise`<`void`\>

#### Defined in

[ActiveDirectory.ts:50](https://github.com/Miramac/simple-ad/blob/9855696/lib/ActiveDirectory.ts#L50)

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

[ActiveDirectory.ts:216](https://github.com/Miramac/simple-ad/blob/9855696/lib/ActiveDirectory.ts#L216)

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

[ActiveDirectory.ts:130](https://github.com/Miramac/simple-ad/blob/9855696/lib/ActiveDirectory.ts#L130)

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

[ActiveDirectory.ts:230](https://github.com/Miramac/simple-ad/blob/9855696/lib/ActiveDirectory.ts#L230)

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

[ActiveDirectory.ts:157](https://github.com/Miramac/simple-ad/blob/9855696/lib/ActiveDirectory.ts#L157)

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

[ActiveDirectory.ts:173](https://github.com/Miramac/simple-ad/blob/9855696/lib/ActiveDirectory.ts#L173)

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

[ActiveDirectory.ts:82](https://github.com/Miramac/simple-ad/blob/9855696/lib/ActiveDirectory.ts#L82)

___

### unbind

▸ **unbind**(): `Promise`<`void`\>

Unbind the connection

#### Returns

`Promise`<`void`\>

#### Defined in

[ActiveDirectory.ts:68](https://github.com/Miramac/simple-ad/blob/9855696/lib/ActiveDirectory.ts#L68)
