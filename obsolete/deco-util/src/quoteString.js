import { STR } from '@typen/enum-data-types'

export const quoteString = function (x) {
  const { qt } = this
  return (typeof x === STR) ? (qt + x + qt) : x
}

export const pipeQuote = (read, quote) => {
  if (!quote?.length) return read
  if (!read) return quoteString.bind({ qt: quote })
  return x => x |> read |> quoteString.bind({ qt: quote })
}
