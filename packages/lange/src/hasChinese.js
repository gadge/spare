import { chineseReg } from './regs'

export const hasChn = tx => chineseReg.test(tx)
