import { pipe }             from '@ject/pipe'
import { decoFlat }         from '@spare/deco-flat'
import { logger, says, Xr } from '@spare/logger'
import { delogger }         from '../../index.js'
import { test } from 'node:test'

const SF = '\uFFFF'
const Parser = (...regs) => pipe.apply(null, regs.map(x => parser.bind(x)))
const parser = function (text) {
  const reg = this ?? /\([^()]*\)/, vec = []
  let index = 0, match, phrase, left, right
  while ((match = reg.exec(text)) && ([ phrase ] = match) && ([ left, right ] = phrase.split(SF))) {
    says['match'](Xr().match(match).left(left).right(right))
    if (!right) {
      index = vec.push(phrase) - 1
    } else {
      vec[index] = left + vec[index] + right
    }
    text = text.replace(reg, SF)
  }
  return vec
}

class Point {
  constructor(x, y) {
    this.x = x
    this.y = y
  }
}

const a = {
  foo: `a`,
  bar: 'b',
  zen: 'c',
  points: [ new Point(1, 2), new Point(3, 4), new Point(5, 6) ]
}

a |> decoFlat |> logger

const quoteReg = /'[^']*'/
const parenthReg = /\([^()]*\)/
const bracketReg = /\[[^\[\]]*\]/
const braceReg = /\{[^\{\}]*\}/

const test = () => {
  const candidates = [
    'abc(d(e())f)(gh)ijk()',
    '{ points:[ { x:1, y:2 }, { x:3, y:4 }, { x:5, y:6 } ] }',
    'amy says:"\'foo\',\'bar\',\'it\'s been late\',\'zen\'"'
  ]
  const p = Parser(braceReg)
  for (let candidate of candidates) {
    delogger(p(candidate))
  }
}

test()

// output -> ["(d(e())f)", "(gh)", "()"]