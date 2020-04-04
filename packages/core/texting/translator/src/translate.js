export const translate = (word, dict) => {
  for (let [curr, proj] of dict) word = word.replace(curr, proj)
  return word.trim()
}

