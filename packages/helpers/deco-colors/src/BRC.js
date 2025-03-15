import { hslDye } from './dye.js'


export function brc(text) {
  return this.head + '{ ' + this.tail + text + this.head + ' }' + this.tail
}

export class BRC {
  static '0' = brc.bind(hslDye.into([ 45, 100, 53 ]))
  static '1' = brc.bind(hslDye.into([ 44, 100, 59 ]))
  static '2' = brc.bind(hslDye.into([ 43, 100, 64 ]))
  static '3' = brc.bind(hslDye.into([ 42, 100, 70 ]))
  static '4' = brc.bind(hslDye.into([ 41, 100, 74 ]))
  static '5' = brc.bind(hslDye.into([ 40, 100, 78 ]))
  static '6' = brc.bind(hslDye.into([ 39, 100, 82 ]))
  static '7' = brc.bind(hslDye.into([ 37, 100, 86 ]))
}