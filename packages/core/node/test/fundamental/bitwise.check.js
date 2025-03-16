import { test } from 'node:test'

const isZero = x => (x & 0b0)
const isOne = x => (x & 0b1)
const isTwo = x => (x & 0b10)
const isThree = x => (x & 0b11)

const is0D = x => (x & 0b11)
const is1D = x => (x >> 1 & 0b1)


test('bitwise check', () => {
  const candidates = [ 0, 1, 2, 3, 4, 5, 6, 7, 8 ]
  for (const x of candidates) {
    console.log(x, is0D(x), is1D(x))
  }
  // console.log(0, isZero(x)) // false
  // console.log(1, isOne(x))  // false
  // console.log(2, isTwo(x))  // true
  // console.log(3, isThree(x)) // false
})