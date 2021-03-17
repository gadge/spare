import { HAN } from '@spare/regex-charset'

export const hasHan = x => HAN.test(x)