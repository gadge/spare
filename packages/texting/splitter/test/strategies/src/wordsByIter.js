export const WORD_REG = /\w+/g

export const wordsByIter = phrase => {
  let ms, wd, ve = []
  while ((ms = WORD_REG.exec(phrase)) && ([wd] = ms)) ve.push(wd)
  return ve
}