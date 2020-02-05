import { ansiReg } from './regs'

export const hasAnsi = tx => ansiReg.test(tx)
