const LOW = /[a-z]/
const UPP = /[A-Z]/

export const decoStringIter = (text) => {
  const ve = ''
  let p = ''
  let word = ''
  let appendable = true
  for (let c of text) {
    if (LOW.test(c)) {
      word += c
    } else if (UPP.test(c)) {
      word += c
    } else {
      word += c
    }
  }
  return word
}