import { REG_NUM_FULL } from '../assets/regex'

export const isNumeric = tx => REG_NUM_FULL.test(tx)