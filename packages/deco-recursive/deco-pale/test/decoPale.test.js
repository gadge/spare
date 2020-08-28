import { LF }         from '@spare/enum-chars'
import { logger }     from '@spare/logger'
import { tenseQuote } from '@spare/quote'
import { promises }  from 'fs'
import { DecoPale }  from '../index'
import { decoValue } from '../src/archive/decoLoose'


const candidates = [
  {
    foo: 'bar',
    info: {
      author: 'Tom Ford',
      detail: '\'I guess I\'m hyper-self-conscious about people thinking that I\'m egotistical'
    },
    mark: '',
    rest: undefined,
  }
]

const test = async () => {
  for (let candidate of candidates) {
    // candidate |> decoValue |> console.log
    candidate |> DecoPale({ quote: tenseQuote }) |> logger
    await promises.writeFile(
      'packages/core/deco-unit/deco-pale/test/target/candidate.js',
      'export const candidate = ' + LF + (candidate|> decoValue)
    )
  }
}

test()