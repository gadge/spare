export const FUNC_REG = /\((.*?)\)\s+\{/s
export const LAMB_REG = /\(?(.*?)\)?\s+=>/s
export const WORD_REG = /\w+/g

const words = phrase => {
  let ms, wd, ve = []
  while ((ms = WORD_REG.exec(phrase)) && ([wd] = ms)) ve.push(wd)
  return ve
}

export const argnames = (fn) => {
  const text = fn.toString()
  let ms, ph
  if ((ms = FUNC_REG.exec(text)) && ([, ph] = ms)) return words(ph)
  if ((ms = LAMB_REG.exec(text)) && ([, ph] = ms)) return words(ph)
  return []
}
