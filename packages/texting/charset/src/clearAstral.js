import { ASTRAL_G } from '@spare/regex-charset'


export const clearAstral = tx => tx.replace(ASTRAL_G, '_')