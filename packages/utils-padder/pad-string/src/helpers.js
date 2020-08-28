import { hasAnsi } from '@spare/lange'
import { lange }   from '@spare/lange'

export const ansiPadLength = (tx, pd) => hasAnsi(tx) ? tx.length + pd - lange(tx) : pd
export const lpad = String.prototype.padStart
export const rpad = String.prototype.padEnd
