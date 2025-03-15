import { ANSI_G } from '@spare/regex-charset'


export const clearAnsi = tx => tx.replace(ANSI_G, '')