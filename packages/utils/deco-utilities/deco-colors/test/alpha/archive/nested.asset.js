import { logger }   from '@spare/logger'
import { delogger } from '../../../index'
import { deco }     from '../../../src/decoPale'

{
  function nested () {
    const alpha = () => () => this
    const beta = function () { Object.assign({}, this) }
    let a
    if (a % 2) {
      return 'odd'
    } else {
      return 'even'
    }

    function gamma () { return this |> deco }

    return true
  }

  nested.toString() |> delogger

  const REG0 = /{([\S\s]*)}/g
  const tx = nested.toString()
  let ms
  while ((ms = REG0.exec(tx))) {
    ms |> deco |> logger
  }
}

const sample =
  `outer
    (center
      (inner)
      (inner)
    center)
  outer)
  (outer
    (inner)
  outer)
  (outer
  outer)`

const REG = /(\(([^()]|(?R))*\))/g

let ms
while ((ms = REG.exec(sample))) {
  ms |> delogger
}
// const REG=/(\((?>[^()]+|(?1))*\))/g
