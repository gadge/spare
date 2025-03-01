import { BESQUE, OCEAN, PAGODA } from '@palett/presets'
import { deco }                  from '../index.js'
import { test }                  from 'node:test'

export const STRINGS = {
  'empty': '',
  'War and Peace(1865–1869) Bk. I, Ch. III': 'Anna Pávlovna\'s reception was in full swing. The spindles hummed steadily and ceaselessly on all sides. With the exception of the aunt, beside whom sat only one elderly lady, who with her thin careworn face was rather out of place in this brilliant society, the whole company had settled into three groups. One, chiefly masculine, had formed round the abbé.',
  'Pygmalion (1912) Act II': 'What is life but a series of inspired follies? The difficulty is to find them to do. Never lose a chance: it doesn\'t come every day.',
  'some': '1-2-3-4-5-6-7-8-9'
}

const WD = 60
const LINE = '+'.repeat(WD) + WD
const CONF = {
  pres: { pos: BESQUE, neg: OCEAN, str: PAGODA },
  vert: 2,
  width: WD,
  broad: true
}

test('deco string unit', () => {
  console.log(LINE)
  console.log(deco(STRINGS, CONF))
  console.log(LINE)
})
