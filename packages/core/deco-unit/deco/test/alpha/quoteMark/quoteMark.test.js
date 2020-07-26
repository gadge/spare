import { decoVector, logger } from '@spare/logger'
import { ripper }             from '@spare/ripper'

export const parser = (text) => {
  return ripper.call(/,(?=(?:[^']*'[^']*')*[^']*$)/g, text)
}

const candidates = [
  '"a",""b"",""',
  '\'a\',\'\'b\'\',\'\'',
]

for (let candidate of candidates) {
  candidate |> parser |> decoVector|> logger
}