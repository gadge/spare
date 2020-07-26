export const FUNC_REG = /\((.*?)\)\s+{/s
export const LAMB_REG = /\(?(.*?)\)?\s+=>/s

export const argnames = (fn) => {
  const text = fn.toString()
  let ms, ph
  if ((ms = FUNC_REG.exec(text)) && ([, ph] = ms)) return ph.match(/\w+/g)
  if ((ms = LAMB_REG.exec(text)) && ([, ph] = ms)) return ph.match(/\w+/g)
  return []
}