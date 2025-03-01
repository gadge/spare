import { LF }              from '@texting/enum-chars'
import { logger }          from '@spare/logger'
import { tenseQuote }      from '@spare/quote'
import { promises }        from 'fs'
import { DecoPale }        from '../index.js'
import { decoValue }       from '../src/archive/decoLoose.js'
// import { Basics, Vectors } from '@spare/deco/test/assets/candidates'
import { test }            from 'node:test'


const candidates = [
  {
    foo: 'bar',
    info: {
      author: 'Tom Ford',
      detail: '\'I guess I\'m hyper-self-conscious about people thinking that I\'m egotistical'
    },
    mark: '',
    rest: undefined
  }
]

test('DecoPale', async () => {
  for (let candidate of candidates) {
    // console.log(decoValue(candidate))
    logger(DecoPale({ quote: tenseQuote })(candidate))
    // await promises.writeFile(
    //   'packages/core/deco-unit/deco-pale/test/target/candidate.js',
    //   'export const candidate = ' + LF + decoValue(candidate)
    // )
  }
})