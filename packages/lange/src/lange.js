import { ansiReg, astralReg } from './regs'

/**
 *
 * @param {string} tx
 * @returns {number}
 */
export const lange = tx => tx
  .replace(ansiReg, '')
  .replace(astralReg, '_')
  .length


