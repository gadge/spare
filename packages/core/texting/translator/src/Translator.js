import { makeReplaceable } from './makeReplaceable'
import { sortKeysByLength } from '../utils/sortKeysByLength'

export class Translator {
  constructor (dictionary) {
    this.dict = dictionary|> makeReplaceable
  }

  static build (dict, { sort = true } = {}) {
    if (sort) dict |> sortKeysByLength
    return new Translator(dict)
  }

  parse (word, after) { return word.replace(this.dict, after) }

  reboot (dict) { return dict ? (this.dict = (dict|> makeReplaceable), this) : this }
}



