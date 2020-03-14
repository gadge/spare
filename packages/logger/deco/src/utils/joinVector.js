import { LF, TB } from '@spare/enum-chars'

export const joinVector = (list, lv) => {
  const rn = LF + TB.repeat(lv)
  return `${rn}  ${list.join(`,${rn + TB}`)}${rn}`
}
