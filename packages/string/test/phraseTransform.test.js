import { dashedToCamel } from '../src/phraseTransform'
import { logger } from '@spare/logger'
import { DASHED } from '../src/enums/PhraseReg'

const dashedToUpperCamel = (dashed, de = '') =>
  dashed
    ?.match(DASHED)
    ?.map(wd => wd[0].toUpperCase() + wd.slice(1).toLowerCase())
    .join(de)
  ?? dashed

export class PhraseTransformTest {
  static test () {
    const candidates = [
      'GDP',
      'POPULATION',
      'CONSUMPTION_EXPENDITURE',
      'INDUSTRY_VALUE_ADDED',
      'STOCKS_TRADED_TOTAL_VALUE',
      'MARKET_CAPITALIZATION_OF_LISTED_DOMESTIC_COMPANIES',
      'FOREIGN_DIRECT_INVESTMENT_NET_INFLOWS',
      'FOREIGN_DIRECT_INVESTMENT_NET_OUTFLOWS',
    ]
    for (let candidate of candidates) dashedToUpperCamel(candidate) |> logger
    '' |> logger
    for (let candidate of candidates) candidate.toUpperCase() |> logger
  }
}

PhraseTransformTest.test()
