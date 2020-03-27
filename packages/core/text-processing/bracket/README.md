## @spare/quote
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
$ npm install @spare/quote
```

## Usage
```js
import { quote } from '@spare/quote'
const list = [
  'tolstoy',
  '\u001b[3;4;31mhatsu\u001b[0m',
  '\u{1F3C3}2\u{1F525}7',
]
for (let tx of list) {
  console.log(`[${tx}] [length] (${tx.length}) [quote] (${quote(tx)})`)
}
```

## Meta
[LICENSE (MIT)](/LICENSE)

Copyright (c) 2019-present, Haoyang (Vincent) Wang

[//]: <> (Shields)
[npm-image]: https://img.shields.io/npm/v/@spare/bracket.svg?style=flat-square
[quality-image]: http://npm.packagequality.com/shield/@spare/bracket.svg?style=flat-square
[download-image]: https://img.shields.io/npm/dm/@spare/bracket.svg?style=flat-square
[total-download-image]:https://img.shields.io/npm/dt/@spare/bracket.svg?style=flat-square
[license-image]: https://img.shields.io/npm/l/@spare/bracket.svg?style=flat-square
[commit-image]: https://img.shields.io/github/commit-activity/y/hoyeungw/spare/bracket?style=flat-square
[size]: https://flat.badgen.net/packagephobia/install/@spare/bracket

[//]: <> (Link)
[npm-url]: https://npmjs.org/package/@spare/bracket
[quality-url]: http://packagequality.com/#?package=@spare/bracket
[github-url]: https://github.com/hoyeungw/@spare/bracket
[size-url]: https://packagephobia.now.sh/result?p=@spare/bracket