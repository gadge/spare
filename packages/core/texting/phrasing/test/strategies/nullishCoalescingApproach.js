import { logger } from '@spare/logger'
import { WORD }   from '../../resources/regexes'

const dashedToUpperCamel = (dashed, de = '') =>
  dashed
    ?.match(WORD)
    ?.map(wd => wd[0].toUpperCase() + wd.slice(1).toLowerCase())
    .join(de)
  ?? dashed

export class NullishCoalescingApproach {
  static test () {
    const candidates = [
      'logger-vector',
      'logger-entries',
      'logger-matrix',
      'logger-table',
      'logger-crostab',
    ]
    for (let candidate of candidates) dashedToUpperCamel(candidate) |> logger
    '' |> logger
    for (let candidate of candidates) candidate.toUpperCase() |> logger
  }
}

NullishCoalescingApproach.test()
