import { CO, LF, TB } from '@spare/enum-chars'
import { br } from '@spare/bracket'
import { NONE } from '@spare/enum-brackets'

export const joinLines = (lines, level, hover = true) => {
  const ind = TB.repeat(level), lfi = LF + ind
  return hover
    ? `${lfi + TB}${lines.join(CO + lfi + TB)}${CO + lfi}`
    : `${ind + TB}${lines.join(CO + lfi + TB)}${CO}`
}

export const liner = (lines, { discrete = false, delim = LF, bracket = NONE, level = 0 } = {}) =>
    discrete
      ? lines
      : lines.length && /\n/.test(delim)
      ? br(joinLines(lines, level, bracket), bracket)
      : br(lines.join(delim), bracket)
