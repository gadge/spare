# @spare
:blowfish: A stringify tool to js objects

[![github commit last][badge-github-last-commit]][url-github]
[![github commit total][badge-github-commit-count]][url-github]

[//]: <> (Shields)
[badge-github-last-commit]: https://flat.badgen.net/github/last-commit/hoyeungw/spare
[badge-github-commit-count]: https://flat.badgen.net/github/commits/hoyeungw/spare

[//]: <> (Link)
[url-github]: https://github.com/hoyeungw/spare

## Features

- Alternative to native JSON.stringify() & console.table().
- Stringify + colorify(by ansi)(@spare/deco & deco-modules)
- Build recognizable tags for logging(@spare/xr).
- Utility toolset: full angles transformation, ansi-coded string length, etc.
- Color, margin configurable.
- ES2015 syntax

## Install

```console
$ npm install @spare/<tool-name>
```

## Tools

|                                         |                                                 |
| --------------------------------------- | ----------------------------------------------- |
| [**logger**](logger/logger)             | Console output everything                       |
| [**xr**](logger/xr)                     | Sentenced log content builder                   |
| [**deco**](logger/deco)                 | Stringify + colorant things                     |
| [**deco**-vector](logger/deco-vector)   | Stringify array(vector) with color highlight    |
| [**deco**-matrix](logger/deco-matrix)   | Stringify 2d-array(matrix) with color highlight |
| [**deco**-entries](logger/deco-entries) | Stringify entries with color highlight          |
| [**deco**-samples](logger/deco-samples) | Stringify samples with color highlight          |
| [**deco**-table](logger/deco-table)     | Stringify table with color highlight            |
| [**deco**-crostab](logger/deco-crostab) | Stringify crostab with color highlight          |
| [**lange**](string-helper/lange)        | Get string length concerning ansi-code          |
| [**string**](string-helper/string)      | String helpers                                  |
|                                         |                                                 |

## License

[MIT](http://opensource.org/licenses/MIT)
