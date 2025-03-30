import { distinct } from '@vect/vector-select'
import { test }     from 'node:test'
import { Fades }    from '../src/decoPath.js'

const CANDIDATES = [
  'C:\\Users\\times\\Dev\\spare>',
  'C:\\Users\\times\\Dev\\vect>',
  'C:\\Users\\times\\Dev\\crostab>',
  'C:\\Users\\times\\Dev\\valjoux>',
  'C:\\Users\\times\\Dev\\iohub>',
  'C:\\Users\\times\\Dev\\aryth>',
  'C:\\Users\\times\\Dev\\orche>',
  'C:\\Users\\times\\Dev\\texting>',
  'C:\\Users\\times\\Dev\\spare>',
  'C:\\Users\\times\\Dev\\vect>',
  'C:\\Users\\times\\Dev\\crostab>',
  'C:\\Users\\times\\Dev\\valjoux>',
  'C:\\Users\\times\\Dev\\valjoux>',
  'C:\\Users\\times\\Dev\\valjoux>',
]

test('fades', () => {
  const fades = Fades.from(distinct(CANDIDATES))
  console.log(fades.length)
  for (let path of CANDIDATES) {
    console.log(fades.ac(path))
  }
})