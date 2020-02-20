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

|                                  |                                               |
| -------------------------------- | --------------------------------------------  |
| [**logger**](logger/logger)      | Console output everything                     |
| [**xr**](logger/deco)            | Build sentence                                |
| [**deco**](logger/deco)          | Stringify + colorant things                   |
| [**deco**-vector](logger/deco)   | Deco array(vector)                            |
| [**deco**-matrix](logger/deco)   | Deco 2d-array(matrix)                         |
| [**deco**-entries](logger/deco)  | Deco entries                                  |
| [**deco**-table](logger/deco)    | Deco table                                    |
| [**deco**-crostab](logger/deco)  | Deco crostab                                  |
| [**lange**](packages/lange)      | Get string length concerning ansi-code        |
| [**string**](packages/string)    | String helper                                 |
|                                  |                                               |

## License

[MIT](http://opensource.org/licenses/MIT)
