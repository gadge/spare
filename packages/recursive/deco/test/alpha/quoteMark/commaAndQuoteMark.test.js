import { decoVector, logger } from '@spare/logger'
import { ripper }             from '@spare/ripper'
import { test } from 'node:test'

export const parser = (text) => {
  return ripper.call(/,(?=(?:[^']*'[^']*')*[^']*$)/g, text)
}

const candidates = [
  '"a",""b"",""',
  `'a',''b'','-'c'-',''`,
]

for (let candidate of candidates) {
  candidate |> parser |> decoVector|> logger
}