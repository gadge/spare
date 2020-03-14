import { LF, TB } from '@spare/enum-chars'

export const joinLines = (lines, level) => {
  const rn = LF + TB.repeat(level)
  return `${rn}  ${lines.join(`,${rn + TB}`)}${rn}`
}
