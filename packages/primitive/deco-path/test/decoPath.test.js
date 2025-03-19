import { test }   from 'node:test'
import { ac, ob } from '../src/index.js'

const candidates = [
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
]

test('ob', () => {
  for (let path of candidates) {
    console.log(ac(path))
  }
})