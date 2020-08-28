import { ASTRAL } from '@spare/regex-charset'

export const hasAstral = tx => ASTRAL.test(tx)
