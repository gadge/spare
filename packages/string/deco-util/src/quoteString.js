import { STR } from '@typen/enum-data-types'

export const quoteString = function (x) {
  const { qt } = this
  return (typeof x === STR) ? (qt + x + qt) : x
}

export const makeQuoteAbstract = (abstract, quote) => {
  if (!quote?.length) return abstract
  if (!abstract) return quoteString.bind({ qt: quote })
  return x => x |> abstract |> quoteString.bind({ qt: quote })
}
