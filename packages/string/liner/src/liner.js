import { CO, LF, TB } from '@spare/enum-chars'
import { br } from '@spare/bracket'
import { NONE } from '@spare/enum-brackets'

export const joinLines = (lines, de = '', lv, hover = true) => {
  const IND = lv > 0 ? TB.repeat(lv) : '', LFI = LF + IND
  return hover
    ? `${LFI + TB}${lines.join(de + LFI + TB)}${de + LFI}`
    : `${IND + TB}${lines.join(de + LFI + TB)}${de}`
}

export const liner = (lines, { discrete = false, delim = LF, bracket = NONE, level = 0 } = {}) =>
  discrete
    ? lines
    : lines.length && /\n/.test(delim)
    ? br(joinLines(lines, /,/.test(delim) ? CO : '', level, bracket), bracket)
    : br(lines.join(delim), bracket)
