# @spare

:blowfish: A stringify tool to js objects

[![github commit last][badge-github-last-commit]][url-github]
[![github commit total][badge-github-commit-count]][url-github]

[//]: <> (Shields)

[badge-github-last-commit]: https://flat.badgen.net/github/last-commit/hoyeungw/spare

[badge-github-commit-count]: https://flat.badgen.net/github/commits/hoyeungw/spare

[//]: <> (Link)

[url-github]: https://github.com/gadge/spare

## Features

- Alternative to native JSON.stringify() & console.table().
- Stringify + colorify(by ansi)(@spare/decoPale & decoPale-modules)
- Build recognizable tags for logging(@spare/xr).
- Utility toolset: full angles transformation, ansi-coded string length, etc.
- Color, margin configurable.
- ES2015 syntax

## Install

```console
$ npm install @spare/<tool-name>
```

## Tools

|                                                     |                                                 |
|-----------------------------------------------------|-------------------------------------------------|
| [**logger**](packages/debugger/logger)              | console.log with prettier format                |
| [**xr**](packages/debugger/xr)                      | Sentenced log content builder                   |
| [**verse**](packages/interop/verse)                 | Stringify, ready to write to js or json file    |
| [**deco**-vector](packages/primitive/deco-vector)   | Stringify array(vector) with color highlight    |
| [**deco**-matrix](packages/primitive/deco-matrix)   | Stringify 2d-array(matrix) with color highlight |
| [**deco**-object](packages/primitive/deco-object)   | Stringify object with color highlight           |
| [**deco**-entries](packages/primitive/deco-entries) | Stringify entries with color highlight          |
| [**deco**-samples](packages/interop/deco-samples)   | Stringify samples with color highlight          |
| [**deco**-table](packages/interop/deco-table)       | Stringify table with color highlight            |
| [**deco**-crostab](packages/interop/deco-crostab)   | Stringify crostab with color highlight          |
|                                                     |                                                 |

## License

[MIT](http://opensource.org/licenses/MIT)
