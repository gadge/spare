import { flopEntry, rand }           from '@aryth/rand'
import { ObjectCollection }          from '@foba/object-string'
import { makeReplaceable }           from '@spare/translator'
import { AQUA, LAVA, OCEAN, SUBTLE } from '@palett/presets'
import { RN }                        from '@texting/enum-chars'
import { DecoVector }                from '@spare/logger'
import { says }                      from '../index.js'
import { test }                      from 'node:test'

const dict = makeReplaceable([
  [ /\. /g, '.' + RN ],
  [ /! /g, '!' + RN ],
  [ /: /g, ':' + RN ]
])

test('movielines says', () => {
  for (let i = 0, film, quote; i < 24; i++) {
    [ film, quote ] = flopEntry(ObjectCollection.MovieQuotes)
    quote = DecoVector({ indexed: false, delim: ' ', stringPreset: SUBTLE })(quote.replace(dict, x => x.split(' ')))
    const sayer = rand(2)
      ? (rand(2) ? says[film] : says[film].asc)
      : (rand(2) ? says[film] : says[film].desc)
    sayer.br(i)(quote)
  }
})

