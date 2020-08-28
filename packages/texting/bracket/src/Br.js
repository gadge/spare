import { ANBR, BRC, BRK, PAR }              from '@spare/enum-brackets'
import { anglebr, brace, bracket, parenth } from './br'

export const Br = (mode) => {
  if (mode === PAR) return parenth
  if (mode === BRK) return bracket
  if (mode === BRC) return brace
  if (mode === ANBR) return anglebr
  return mode ? bracket : null
}

// export const Br = (read, mode) => {
//   if (!mode) return read
//   if (!read) return Br(mode)
//   return x => x |> read |> Br(mode)
// }
