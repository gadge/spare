import { ansi, astral, han } from './elements'

export const ANSI = new RegExp(ansi.join('|'))
export const ASTRAL = new RegExp(astral.join('|'))
export const HAN = new RegExp(han.join('|'))
