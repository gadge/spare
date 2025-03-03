<div align="center">
  <img alt="banner" src="./media/spare-banner.svg">
  <p align="center">render javascript object to string in terminal</p>
</div>

[![version](https://img.shields.io/npm/v/@spare/deco?logo=npm&style=flat-square)]()
[![language](https://img.shields.io/github/languages/top/gadge/spare?logo=javascript&style=flat-square)][url-github]
[![manager](https://img.shields.io/badge/manager-pnpm-F69220?logo=pnpm&logoColor=EEE&style=flat-square)][url-github]
[![npm last update](https://img.shields.io/npm/last-update/@spare/deco?logo=npm&style=flat-square)]()
[![github last commit](https://img.shields.io/github/last-commit/gadge/spare?logo=github&style=flat-square)][url-github]
[![github commits](https://img.shields.io/github/commit-activity/t/gadge/spare?logo=github&style=flat-square)][url-github]
[![node version](https://img.shields.io/node/v/@spare/deco/latest?logo=node.js&style=flat-square)]()
[![github repo size](https://img.shields.io/github/repo-size/gadge/spare)]()
[![github code size](https://img.shields.io/github/languages/code-size/gadge/spare)]()

[//]: <> (Link)

[url-github]: https://github.com/gadge/spare

[url-npm]: https://npmjs.org/package/@spare/deco

## Features

- Enhancement to native JSON.stringify() & console.table().
- Stringify + colorify(by ansi)(@spare/decoPale & decoPale-modules)
- Recognizable tags for logging(@spare/xr).
- Utility toolset: full angles transformation, ansi-coded string length, etc.

## Install

```console
$ npm install @spare/<tool-name>
```

## Tools

|                                                     |                                                 |                       |
|-----------------------------------------------------|-------------------------------------------------|-----------------------|
| [**logger**](packages/debugger/logger)              | Console log with prettier format                | ![v][logger-dm]       |
| [**says**](packages/debugger/says)                  | Console log with head mark                      | ![v][says-dm]         |
| [**xr**](packages/debugger/xr)                      | Sentenced log content builder                   | ![v][xr-dm]           |
| [**deco**](packages/recursive/deco)                 | Stringify any object with color highlight       | ![v][deco-dm]         |
| [**deco-plain**](packages/recursive/deco-flat)       | Stringify and flatten                           | ![v][deco-plain-dm]    |
| [**deco-func**](packages/recursive/deco-func)       | Stringify function                              | ![v][deco-func-dm]    |
| [**deco-pale**](packages/recursive/deco-pale)       | Stringify without color                         | ![v][deco-pale-dm]    |
| [**deco-vector**](packages/primitive/deco-vector)   | Stringify array(vector) with color highlight    | ![v][deco-vector-dm]  |
| [**deco-matrix**](packages/primitive/deco-matrix)   | Stringify 2d-array(matrix) with color highlight | ![v][deco-matrix-dm]  |
| [**deco-object**](packages/primitive/deco-object)   | Stringify object with color highlight           | ![v][deco-object-dm]  |
| [**deco-entries**](packages/primitive/deco-entries) | Stringify entries with color highlight          | ![v][deco-entries-dm] |
| [**deco-samples**](packages/interop/deco-samples)   | Stringify samples with color highlight          | ![v][deco-samples-dm] |
| [**deco-table**](packages/interop/deco-table)       | Stringify table with color highlight            | ![v][deco-table-dm]   |
| [**deco-crostab**](packages/interop/deco-crostab)   | Stringify crostab with color highlight          | ![v][deco-crostab-dm] |
| [**verse**](packages/interop/verse)                 | Stringify, ready to write to js or json file    | ![v][verse-dm]        |
|                                                     |                                                 |                       |

[//]: <> (Local routes)

[logger-dm]:       https://flat.badgen.net/npm/dm/@spare/logger
[says-dm]:         https://flat.badgen.net/npm/dm/@spare/says
[xr-dm]:           https://flat.badgen.net/npm/dm/@spare/xr
[deco-dm]:         https://flat.badgen.net/npm/dm/@spare/deco
[deco-plain-dm]:    https://flat.badgen.net/npm/dm/@spare/deco-flat
[deco-func-dm]:    https://flat.badgen.net/npm/dm/@spare/deco-func
[deco-pale-dm]:    https://flat.badgen.net/npm/dm/@spare/deco-pale
[deco-vector-dm]:  https://flat.badgen.net/npm/dm/@spare/deco-vector
[deco-matrix-dm]:  https://flat.badgen.net/npm/dm/@spare/deco-matrix
[deco-object-dm]:  https://flat.badgen.net/npm/dm/@spare/deco-object
[deco-entries-dm]: https://flat.badgen.net/npm/dm/@spare/deco-entries
[deco-samples-dm]: https://flat.badgen.net/npm/dm/@spare/deco-samples
[deco-table-dm]:   https://flat.badgen.net/npm/dm/@spare/deco-table
[deco-crostab-dm]: https://flat.badgen.net/npm/dm/@spare/deco-crostab
[verse-dm]:        https://flat.badgen.net/npm/dm/@spare/verse

## License

[MIT](http://opensource.org/licenses/MIT)
