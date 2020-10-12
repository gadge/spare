import { br }         from '@spare/bracket'
import { NONE }       from '@spare/enum-brackets'
import { CO, LF, TB } from '@spare/enum-chars'

/**
 *
 * @param {string[]} lines - input string[]
 * @param {string} delim - trailing punctuation added to each line
 * @param {number} level - level of indent to each line
 * @param {boolean} hover - first and last line hang up
 * @return {*}
 */
export const joinLines = (lines, delim = '', level, hover = true) => {
  const IND = level > 0 ? TB.repeat(level) : ''
  return hover
    ? (`${ LF + IND + TB }${ lines?.join(delim + LF + IND + TB) }${ delim + LF + IND }`)
    : (`${ IND + TB }${ lines?.join(delim + LF + IND + TB) }${ delim }`)
}

const LINEFEED = /\n/
const COMMA = /,/

const linesHandler = function (lines) {
  const { discrete = false, delim = LF, bracket = NONE, level = 0 } = this
  if (discrete) return lines
  const hover = !!bracket
  const joined = lines.length && LINEFEED.test(delim)
    ? joinLines(lines, COMMA.test(delim) ? CO : '', level, hover)
    : lines.join(delim)
  return br(joined, bracket)
}

/**
 *
 * @param {string[]} lines - input string[]
 * @param {Object} p
 * @param {boolean|*}       [p.discrete=false] - if true, return the input lines as string[]
 * @param {string|*}        [p.delim=LF] - trailing punctuation added to each line
 * @param {number|string|*} [p.bracket=NONE] - bracket added to the start and end of the entire rendered lines
 * @param {number|*}        [p.level=0] - level of indent to each line
 * @return {string|string[]}
 */
export const liner = (lines, p = {}) => linesHandler.call(p, lines)


/**
 *
 * @param {Object} p
 * @param {boolean}       [p.discrete=false] - if true, return the input lines as string[]
 * @param {string}        [p.delim=LF] - trailing punctuation added to each line
 * @param {number|string} [p.bracket=NONE] - bracket added to the start and end of the entire rendered lines
 * @param {number}        [p.level=0] - level of indent to each line
 * @return { Function|function(string[]):string|string[] }
 */
export const Liner = (p = {}) => linesHandler.bind(p)
