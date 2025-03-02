import { Roster }         from './Roster.js'
import { Steno }          from './Steno.js'
import { retSnakePretty } from './text-utils.js'

export class Rosters {
  static main = Roster.build() // ITALIC
}

export class Stenos {
  static flat = Steno.build()
  static camel = Steno.build('', retSnakePretty)
  static host = Steno.build('', retSnakePretty)
}