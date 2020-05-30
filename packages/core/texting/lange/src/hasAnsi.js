import { ANSI } from '../resources/regsForTest'

export const hasAnsi = tx => ANSI.test(tx)
