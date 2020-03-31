import { CO, LF, TB } from '@spare/enum-chars'
import { br } from '@spare/bracket'
import { NONE } from '@spare/enum-brackets'

export const joinLines = (lines, de = '', lv, hover = true) => {
  const IND = lv > 0 ? TB.repeat(lv) : '', LFI = LF + IND
  return hover
    ? `${LFI + TB}${lines.join(de + LFI + TB)}${de + LFI}`
    : `${IND + TB}${lines.join(de + LFI + TB)}${de}`
}

const LFREG = /\n/
const COREG = /,/

export const liner = (lines, { discrete = false, delim = LF, bracket = NONE, level = 0 } = {}) => {
  if (discrete) return lines
  const hover = !!bracket
  const joined = lines.length && LFREG.test(delim)
    ? joinLines(lines, COREG.test(delim) ? CO : '', level, hover)
    : lines.join(delim)
  return br(joined, bracket)
}
