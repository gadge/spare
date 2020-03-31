import { ANBR, BRC, BRK, PAR } from '@spare/enum-brackets'
import { anglebr, brace, bracket, parenth } from './bracket'

export const SelectBr = (mode) => {
  if (mode === PAR) return parenth
  if (mode === BRK) return bracket
  if (mode === BRC) return brace
  if (mode === ANBR) return anglebr
  return null
}

export const Br = (read, mode) => {
  if (!mode) return read
  if (!read) return SelectBr(mode)
  return x => x |> read |> SelectBr(mode)
}
