import { Roster } from './Roster.js'
import { Steno }  from './Steno.js'
import { Keep }   from './TextUtil.js'

export class Rosters {
  static main = Roster.build() // ITALIC
}

export class Stenos {
  static flat = Steno.build()
  static camel = Steno.build('', Keep.snakePrettyKey)
  static host = Steno.build('', Keep.snakePrettyKey)
}