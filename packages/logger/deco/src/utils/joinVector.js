import { LF, TB } from '@spare/util'

export const joinVector = (list, lv) => {
  const rn = LF + TB.repeat(lv)
  return `${rn}  ${list.join(`,${rn + TB}`)}${rn}`
}
