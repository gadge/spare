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

|                                                  |                                                 |
| ------------------------------------------------ | ----------------------------------------------- |
| [**logger**](packages/core/logger)             | console.log with prettier format                |
| [**xr**](packages/core/xr)                     | Sentenced log content builder                   |
| [**deco**](packages/core/deco)                 | Stringify + colorant things                     |
| [**verse**](packages/core/verse)               | Stringify, ready to write to js or json file    |
| [**deco**-vector](tools/deco/object/deco-vector)   | Stringify array(vector) with color highlight    |
| [**deco**-matrix](tools/deco/object/deco-matrix)   | Stringify 2d-array(matrix) with color highlight |
| [**deco**-object](tools/deco/object/deco-object)   | Stringify object with color highlight           |
| [**deco**-entries](tools/deco/object/deco-entries) | Stringify entries with color highlight          |
| [**deco**-samples](tools/deco/tabular/deco-samples) | Stringify samples with color highlight          |
| [**deco**-table](tools/deco/tabular/deco-table)     | Stringify table with color highlight            |
| [**deco**-crostab](tools/deco/tabular/deco-crostab) | Stringify crostab with color highlight          |
| [**verse**](packages/core/verse)               | ES6 style JSON.stringify alternative            |
| [**lange**](packages/string/lange)               | Get string length concerning ansi-code          |
| [**quote**](packages/string/bracket)             | Add parenthesis/quote/brace/angle-quote         |
| [**phrasing**](packages/string/phrasing)         | Convert among snake/kebab/camel/pascal phrasings|
| [**liner**](packages/string/liner)               | Join array of string                            |
| [**string**](packages/string/string)             | String helpers                                  |
|                                                  |                                                 |

## License

[MIT](http://opensource.org/licenses/MIT)
