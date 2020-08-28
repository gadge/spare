import { HAN } from '../resources/oneoffRegexes'

export const hasHan = tx => HAN.test(tx)
