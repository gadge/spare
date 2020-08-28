import { ANSI } from '../resources/globalRegexes'

export const clearAnsi = tx => tx.replace(ANSI, '')