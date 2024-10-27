import { sortKeysByLength } from '../utils/sortKeysByLength'
import { makeReplaceable }  from './makeReplaceable'

export class Translator {
  constructor (dictionary) {
    this.dict = makeReplaceable(dictionary)
  }

  static build (dict, { sort = true } = {}) {
    if (sort) sortKeysByLength(dict)
    return new Translator(dict)
  }

  parse (word, after) { return word.replace(this.dict, after) }

  reboot (dict) { return dict ? (this.dict = (makeReplaceable(dict)), this) : this }
}



