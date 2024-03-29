import { hasAnsi } from '@spare/charset'
import { lange }   from '@texting/lange'

export const ansiPadLength = (tx, pd) => hasAnsi(tx) ? tx.length + pd - lange(tx) : pd
// export const lpad = String.prototype.padStart
// export const rpad = String.prototype.padEnd
