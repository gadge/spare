import { sortKeysByLength } from '../utils/sortKeysByLength'

export const makeReplaceable = function (dict) {
  if (this?.sort) sortKeysByLength(dict)
  Object.defineProperty(
    dict,
    Symbol.replace, {
      value (word, after) {
        for (let [curr, proj] of this) word = word.replace(curr, proj)
        return after ? after(word) : word
      },
      configurable: true,
      enumerable: false
    })
  return dict
}

export const MakeReplaceable = ({ sort = true } = {}) => makeReplaceable.bind({ sort })
