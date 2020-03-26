import { APOS, DITTO } from '@spare/enum-quotes'
import { ditto, quote } from './quote'

export const SelectQt = (mode) => {
  if (mode === APOS) return quote
  if (mode === DITTO) return ditto
  return null
}
export const Qt = (read, mode) => {
  if (!mode) return read
  if (!read) return SelectQt(mode)
  return x => x |> read |> SelectQt(mode)
}
