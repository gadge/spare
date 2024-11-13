<div align="center">
  <img alt="banner" src="../../../media/spare-banner.svg">
  <p align="center">@spare/says - light and simple debug tool</p>
</div>

[![npm-version](https://img.shields.io/npm/v/@spare/says?logo=npm&style=flat-square)][url-npm]
[![npm-downloads](https://img.shields.io/npm/dm/@spare/says?logo=npm&style=flat-square)]()
[![npm-dependents](https://img.shields.io/librariesio/dependents/npm/@spare/says?logo=npm&style=flat-square)]()
[![npm-last-update](https://img.shields.io/npm/last-update/@spare/says?logo=npm&style=flat-square)]()
[![npm-maintenance](https://img.shields.io/npms-io/maintenance-score/@spare/says?logo=npm&style=flat-square)]()
[![npm-license](https://img.shields.io/npm/l/@spare/says?logo=npm&style=flat-square)]()
[![node-version](https://img.shields.io/node/v/@spare/says/latest?logo=node.js&style=flat-square)]()
[![npm-unpacked-size](https://img.shields.io/npm/unpacked-size/@spare/says?logo=hackthebox&style=flat-square)]()
[![pp-install-size](https://flat.badgen.net/packagephobia/install/@spare/says?icon=npm)]()
[![pp-publish-size](https://flat.badgen.net/packagephobia/publish/@spare/says?icon=npm)]()

[//]: <> (Link)

[url-github]: https://github.com/gadge/spare
[url-npm]: https://npmjs.org/package/@spare/says

## Highlights

- A debug tool.

## Install

```console
$ npm install says
```

## Usage

### Simple

```ecmascript 6
import { Says }           from '@spare/says'
import { greys, palette } from 'spettro'

const castList = {
  client: palette.Red.base,
  server: palette.Purple.base,
  stranger: greys.Grey.base
}

const debug = Says.build(castList)

debug.says('client', '\'Shakespeare\'')
debug.says('server', '\'Dickens\'')
```

### Factorial with pipeline operator

```js
import { Says }           from '@spare/says'
import { greys, palette } from 'spettro'

const castList = {
  client: palette.Red.base,
  server: palette.Purple.base,
  stranger: greys.Grey.base
}

const debug = Says.build(castList)
const says = {
  client: debug.credit('chef'),
  server: debug.credit('aboyeur')
}
'Shakespeare' |> says.client
'Dickens' |> says.server
```

## License

[//]: # ([mit-source]: http://opensource.orgLICENSEs/MIT)

[MIT](LICENSE)

Copyright (c) 2019-present, Haoyang (Vincent) Wang
