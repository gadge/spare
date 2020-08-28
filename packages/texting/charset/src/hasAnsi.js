import { ANSI } from '@spare/regex-charset'

export const hasAnsi = tx => ANSI.test(tx)
