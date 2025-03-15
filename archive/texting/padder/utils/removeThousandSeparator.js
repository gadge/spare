const DIGIT_INITIAL = /^\d/
const COMMA = /,/g
export const removeThousandSeparator = tx => {
  if (!tx || tx.length <= 4) return tx
  if (!DIGIT_INITIAL.test(tx)) return tx
  return tx.replace(COMMA, '')
}