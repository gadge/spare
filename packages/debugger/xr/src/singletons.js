import { Roster } from './Roster'
import { Steno }  from './Steno'
import { Keep }   from './TextUtil'

export class Rosters {
  static main = Roster.build() // ITALIC
}

export class Stenos {
  static flat = Steno.build()
  static camel = Steno.build('', Keep.snakePrettyKey)
  static host = Steno.build('', Keep.snakePrettyKey)
}