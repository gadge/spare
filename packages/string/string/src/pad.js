import { hasAnsi, lange } from '@spare/lange'

const padStartAnsi = (tx, len, fill) => hasAnsi(tx)
  ? tx.padStart(tx.length + len - lange(tx), fill)
  : tx.padStart(len, fill)

const padEndAnsi = (tx, len, fill) => hasAnsi(tx)
  ? tx.padEnd(tx.length + len - lange(tx), fill)
  : tx.padEnd(len, fill)

export {
  padEndAnsi,
  padStartAnsi
}
