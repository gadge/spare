import { Cards }               from '@palett/cards'
import { hexToRgb }            from '@palett/convert'
import { Dye }                 from '@palett/dye'
import { UNDERLINE }           from '@palett/enum-font-effects'
import { SP }                  from '@spare/enum-chars'
import { decoSamples, logger } from '@spare/logger'
import { quote }               from '@spare/quote'
import { ComplexCollection }   from '../assets/ComboCollection'
import { argnames }            from './argnames'

// no comments
// no destructuring assignment
// no rest parameters
// no default values

export const FUNC_REG = /\((.*?)\)\s+\{/
export const LAMB_REG = /\(?(.*?)\)?\s+=>/
const dye = Dye(hexToRgb(Cards.indigo.accent_3), UNDERLINE)

const samples = Object.entries(ComplexCollection).map(([name, func]) => {
  let ms
  const fnText = func.toString().replace(/\s+/gs, SP)
  return {
    name: name,
    argnames: argnames(func),
    text: fnText.length > 64 ? fnText.slice(0, 64) + '...' : fnText,
    funcReg: (((ms = FUNC_REG.exec(fnText)) && quote(ms[1])) ?? dye(SP)),
    lambReg: (((ms = LAMB_REG.exec(fnText)) && quote(ms[1])) ?? dye(SP)),
  }
})

samples |> decoSamples |> logger
