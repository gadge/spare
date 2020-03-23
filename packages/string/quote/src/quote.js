import { APOS, DITTO } from '@spare/enum-quotes'

export const quote = x => '\'' + x + '\''
export const ditto = x => '\"' + x + '\"'

export const qt = (x, mode) => {
  if (mode === APOS) return quote(x)
  if (mode === DITTO) return ditto(x)
  return x
}

