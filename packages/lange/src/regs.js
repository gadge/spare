import { ansi, astral, chinese } from './elements'

// export const reg = new RegExp([...ansi, ...astral].join('|'), 'g')

export const ansiReg = new RegExp(ansi.join('|'), 'g')
export const astralReg = new RegExp(astral.join('|'), 'g')
export const chineseReg = new RegExp(chinese.join('|'), 'g')
