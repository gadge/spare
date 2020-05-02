export const tap = (...words) => {
  const ve = []
  for (let word of words)
    if (word?.length)
      ve.push(word)
  return ve
}
