import { br } from '@spare/bracket';
import { NONE } from '@spare/enum-brackets';
import { TB, LF, CO } from '@spare/enum-chars';

/**
 *
 * @param {string[]} lines - input string[]
 * @param {string} delim - trailing punctuation added to each line
 * @param {number} level - level of indent to each line
 * @param {boolean} hover - first and last line hang up
 * @return {*}
 */

const joinLines = (lines, delim = '', level, hover = true) => {
  const IND = level > 0 ? TB.repeat(level) : '';
  return hover ? `${LF + IND + TB}${lines === null || lines === void 0 ? void 0 : lines.join(delim + LF + IND + TB)}${delim + LF + IND}` : `${IND + TB}${lines === null || lines === void 0 ? void 0 : lines.join(delim + LF + IND + TB)}${delim}`;
};
const LINEFEED = /\n/;
const COMMA = /,/;
/**
 *
 * @param {string[]} lines - input string[]
 * @param {boolean} discrete - if true, return the input lines as string[]
 * @param {string} delim - trailing punctuation added to each line
 * @param {number|string} bracket - bracket added to the start and end of the entire rendered lines
 * @param {number} level - level of indent to each line
 * @return {string|string[]}
 */

const liner = (lines, {
  discrete = false,
  delim = LF,
  bracket = NONE,
  level = 0
} = {}) => {
  if (discrete) return lines;
  const hover = !!bracket;
  const joined = lines.length && LINEFEED.test(delim) ? joinLines(lines, COMMA.test(delim) ? CO : '', level, hover) : lines.join(delim);
  return br(joined, bracket);
};

export { joinLines, liner };