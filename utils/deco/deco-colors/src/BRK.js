import { hslDye } from './dye.js'

export function brk(text) {
  return this.head + '[ ' + this.tail + text + this.head + ' ]' + this.tail
}

export class BRK {
  static '0' = brk.bind(hslDye.into([ 199, 100, 63 ]))
  static '1' = brk.bind(hslDye.into([ 201, 100, 68 ]))
  static '2' = brk.bind(hslDye.into([ 203, 100, 72 ]))
  static '3' = brk.bind(hslDye.into([ 205, 100, 76 ]))
  static '4' = brk.bind(hslDye.into([ 207, 100, 84 ]))
  static '5' = brk.bind(hslDye.into([ 209, 100, 80 ]))
  static '6' = brk.bind(hslDye.into([ 211, 100, 88 ]))
  static '7' = brk.bind(hslDye.into([ 214, 100, 90 ]))
}



