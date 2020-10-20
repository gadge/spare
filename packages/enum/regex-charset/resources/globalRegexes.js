import { ANSI, ASTRAL, HAN } from './oneoffRegexes'

// export const regex = new RegExp([...ansi, ...astral].join('|'), 'g')

export const ANSI_G = new RegExp(ANSI, 'g')
export const ASTRAL_G = new RegExp(ASTRAL, 'g')
export const HAN_G = new RegExp(HAN, 'g')
