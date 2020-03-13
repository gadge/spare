import { hasAnsi, lange } from '@spare/lange'

export const fixpad = (tx, pd) => hasAnsi(tx) ? tx.length + pd - lange(tx) : pd
export const lpad = String.prototype.padStart
export const rpad = String.prototype.padEnd
