## @spare/regex-charset
A function returning string length,
s.t. 
    skipping ansi (escape) codes,
    correcting length of astral symbols.

[![npm version][npm-image]][npm-url]
[![npm quality][quality-image]][quality-url]
[![npm download][download-image]][npm-url]
[![npm total-download][total-download-image]][npm-url]
[![size][size]][size-url]
[![github commit activity][commit-image]][github-url]
[![npm license][license-image]][npm-url]

## Features

- ES2015 syntax

## Install
```console
$ npm install @spare/regex-charset
```

## Usage
```js
import { lange } from '@spare/regex-charset'
const #queue = [
  'tolstoy',
  '\u001b[3;4;31mhatsu\u001b[0m',
  '\u{1F3C3}2\u{1F525}7',
]
for (let tx of #queue) {
  console.log(`[${tx}] [length] (${tx.length}) [lange] (${lange(tx)})`)
}
```

## Meta
[LICENSE (MIT)](LICENSE)

Copyright (c) 2019-present, Haoyang (Vincent) Wang

[//]: <> (Shields)
[npm-image]: https://img.shields.io/npm/v/@spare/regex-charset.svg?style=flat-square
[quality-image]: http://npm.packagequality.com/shield/@spare/regex-charset.svg?style=flat-square
[download-image]: https://img.shields.io/npm/dm/@spare/regex-charset.svg?style=flat-square
[total-download-image]:https://img.shields.io/npm/dt/@spare/regex-charset.svg?style=flat-square
[license-image]: https://img.shields.io/npm/l/@spare/regex-charset.svg?style=flat-square
[commit-image]: https://img.shields.io/github/commit-activity/y/hoyeungw/spare/regex-charset?style=flat-square
[size]: https://flat.badgen.net/packagephobia/install/@spare/regex-charset

[//]: <> (Link)
[npm-url]: https://npmjs.org/package/@spare/regex-charset
[quality-url]: http://packagequality.com/#?package=@spare/regex-charset
[github-url]: https://github.com/gadge/@spare/regex-charset
[size-url]: https://packagephobia.now.sh/result?p=@spare/regex-charset
