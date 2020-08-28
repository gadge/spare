import { ANSI } from '../resources/oneoffRegexes'

export const hasAnsi = tx => ANSI.test(tx)
