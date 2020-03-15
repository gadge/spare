import { logger, logNeL, says, xr } from '@spare/logger'
import { delogger, delogNeL } from '../..'

const reg = /^function\s+([\w$]+)\s*\(/

const coordinate = function () {
  const { x, y } = this
  return { x, y }
}

const candidates = {
  simple (x) { return ++x },
  lambda: x => x,
  coordinate,
  coordinateBind: coordinate.bind({ x: 1, y: 2 }),
  basic: function arch (x) { return --x },
  nested () {
    function inner () { return this |> deco }

    return true
  }
}

for (const [key, func] of Object.entries(candidates)) {
  const stringified = func.toString()
  xr().p(func.name)['arg#'](func.length)['reg test'](reg.test(stringified)) |> says[key]
  stringified |> logNeL
  // stringified.match(reg) |> delogNeL
  // stringified.replace(/\n+/g, '\n') |> logger
}
