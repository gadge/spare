import { ansi, astral, han } from './elements'

// export const assets = new RegExp([...ansi, ...astral].join('|'), 'g')

export const ANSI = new RegExp(ansi.join('|'), 'g')
export const ASTRAL = new RegExp(astral.join('|'), 'g')
export const HAN = new RegExp(han.join('|'), 'g')
