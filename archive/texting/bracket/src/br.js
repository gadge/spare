import { ANBR, BRC, BRK, PAR } from '@spare/enum-brackets'

export const parenth = x => '(' + x + ')'
export const bracket = x => '[' + x + ']'
export const brace = x => '{' + x + '}'
export const anglebr = x => '<' + x + '>'

export const br = (x, mode) => {
  if (mode === PAR) return parenth(x)
  if (mode === BRK) return bracket(x)
  if (mode === BRC) return brace(x)
  if (mode === ANBR) return anglebr(x)
  return x
}

export const Br = (mode) => {
  if (mode === PAR) return parenth
  if (mode === BRK) return bracket
  if (mode === BRC) return brace
  if (mode === ANBR) return anglebr
  return mode ? bracket : null
}

