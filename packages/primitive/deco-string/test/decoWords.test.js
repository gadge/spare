import { duoRank }       from '@aryth/rank-vector'
import { METRO, PLANET } from '@palett/presets'
import { delogger }      from '@spare/deco'
import { says }          from '@spare/logger'
import { splitLiteral }  from '@texting/splitter'
import { test } from 'node:test'

export const candidates = {
  dot: 'foo.bar.zen.NASA.Lite.DB',
  snake: 'foo_bar_zen_NASA_Lite_DB',
  mixed: 'FOOBarROCKAndROLL_NASALiteDB',
  slashed: 'foo/bar/zen/NASA/Lite/DB',
  file: 'foo.barZen10th-2022.pdf',
  method: 'sendHTTPRequestAsync ',
  numbers: '256.512.1024.2048',
  url: 'https://www.foo-bar.com/main?format=json&slice=20',
  camel: 'fooBarROCKAndROLL李白杜甫ZenNASALiteDB'
}

export const decoWords = (text, { preset = METRO, stringPreset = PLANET } = {}) => {
  const words = splitLiteral(text)
  const ranks = duoRank(words)
  ranks |> delogger
}

for (let [ key, text ] of Object.entries(candidates)) {
  decoWords(text) |> says[key]
}