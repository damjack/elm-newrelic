[elm-newrelic-nreum.js](README.md) / Exports

# elm-newrelic-nreum.js

## Table of contents

### Functions

- [addPageAction](modules.md#addpageaction)
- [addRelease](modules.md#addrelease)
- [cspEvent](modules.md#cspevent)
- [elmPortsToJS](modules.md#elmportstojs)
- [elmUniquePortToJS](modules.md#elmuniqueporttojs)
- [init](modules.md#init)
- [interaction](modules.md#interaction)
- [noticeError](modules.md#noticeerror)
- [routeName](modules.md#routename)

## Functions

### addPageAction

▸ **addPageAction**(`payload`, `console?`): `void`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `payload` | `NREUMAddPageActionPayload` |  |
| `console?` | `boolean` |  |

#### Returns

`void`

#### Defined in

[components/elm-newrelic/nreum/trackingSend.ts:34](https://github.com/damjack/elm-newrelic/blob/42fac07/packages/elm-newrelic-nreum-js/src/components/elm-newrelic/nreum/trackingSend.ts#L34)

___

### addRelease

▸ **addRelease**(`payload`, `console?`): `void`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `payload` | `NREUMAddReleasePayload` |  |
| `console?` | `boolean` |  |

#### Returns

`void`

#### Defined in

[components/elm-newrelic/nreum/trackingSend.ts:109](https://github.com/damjack/elm-newrelic/blob/42fac07/packages/elm-newrelic-nreum-js/src/components/elm-newrelic/nreum/trackingSend.ts#L109)

___

### cspEvent

▸ **cspEvent**(`console?`): `void`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `console?` | `boolean` |  |

#### Returns

`void`

#### Defined in

[components/elm-newrelic/nreum/elmPorts.ts:20](https://github.com/damjack/elm-newrelic/blob/42fac07/packages/elm-newrelic-nreum-js/src/components/elm-newrelic/nreum/elmPorts.ts#L20)

___

### elmPortsToJS

▸ **elmPortsToJS**(`elmApp`, `console?`): `void`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `elmApp` | `ElmApp` |  |
| `console?` | `boolean` |  |

#### Returns

`void`

#### Defined in

[components/elm-newrelic/nreum/elmPorts.ts:51](https://github.com/damjack/elm-newrelic/blob/42fac07/packages/elm-newrelic-nreum-js/src/components/elm-newrelic/nreum/elmPorts.ts#L51)

___

### elmUniquePortToJS

▸ **elmUniquePortToJS**(`elmApp`, `console?`): `void`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `elmApp` | `ElmApp` |  |
| `console?` | `boolean` |  |

#### Returns

`void`

#### Defined in

[components/elm-newrelic/nreum/elmPorts.ts:95](https://github.com/damjack/elm-newrelic/blob/42fac07/packages/elm-newrelic-nreum-js/src/components/elm-newrelic/nreum/elmPorts.ts#L95)

___

### init

▸ **init**(`rumArgs`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `rumArgs` | `NrOptions` |

#### Returns

`void`

#### Defined in

[components/elm-newrelic/nreum/loadSpa.ts:10](https://github.com/damjack/elm-newrelic/blob/42fac07/packages/elm-newrelic-nreum-js/src/components/elm-newrelic/nreum/loadSpa.ts#L10)

___

### interaction

▸ **interaction**(`payload`, `console?`): `void`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `payload` | `NREUMInteractionPayload` |  |
| `console?` | `boolean` |  |

#### Returns

`void`

#### Defined in

[components/elm-newrelic/nreum/trackingSend.ts:52](https://github.com/damjack/elm-newrelic/blob/42fac07/packages/elm-newrelic-nreum-js/src/components/elm-newrelic/nreum/trackingSend.ts#L52)

___

### noticeError

▸ **noticeError**(`payload`, `console?`): `void`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `payload` | `NREUMNoticeErrorPayload` |  |
| `console?` | `boolean` |  |

#### Returns

`void`

#### Defined in

[components/elm-newrelic/nreum/trackingSend.ts:78](https://github.com/damjack/elm-newrelic/blob/42fac07/packages/elm-newrelic-nreum-js/src/components/elm-newrelic/nreum/trackingSend.ts#L78)

___

### routeName

▸ **routeName**(`payload`, `console?`): `void`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `payload` | `NREUMRouteNamePayload` |  |
| `console?` | `boolean` |  |

#### Returns

`void`

#### Defined in

[components/elm-newrelic/nreum/trackingSend.ts:16](https://github.com/damjack/elm-newrelic/blob/42fac07/packages/elm-newrelic-nreum-js/src/components/elm-newrelic/nreum/trackingSend.ts#L16)
