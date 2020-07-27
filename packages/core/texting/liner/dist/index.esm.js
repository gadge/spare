import { br } from '@spare/bracket';
import { NONE } from '@spare/enum-brackets';
import { TB, LF, CO } from '@spare/enum-chars';

/**
 *
 * @param {string[]} lines - input string[]
 * @param {string} delim - trailing punctuation added to each line
 * @param {number} level - level of indent to each line
 * @param {boolean} hover - first and last line void
 * @return {*}
 */

const joinLines = (lines, delim = '', level, hover = true) => {
  const IND = level > 0 ? TB.repeat(level) : '';
  let tab;
  return hover ? (tab = LF + IND + TB, `${tab}${lines.join(delim + tab)}${delim + LF + IND}`) : (tab = IND + TB, `${tab}${lines.join(delim + LF + tab)}${delim}`);
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
