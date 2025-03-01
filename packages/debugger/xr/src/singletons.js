import { Roster }             from './Roster.js'
import { Steno }              from './Steno.js'
import { keepSnakePrettyKey } from './TextUtil.js'

export class Rosters {
  static main = Roster.build() // ITALIC
}

export class Stenos {
  static flat = Steno.build()
  static camel = Steno.build('', keepSnakePrettyKey)
  static host = Steno.build('', keepSnakePrettyKey)
}