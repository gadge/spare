'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var bracket = require('@spare/bracket');
var enumBrackets = require('@spare/enum-brackets');
var enumChars = require('@spare/enum-chars');

/**
 *
 * @param {string[]} lines - input string[]
 * @param {string} delim - trailing punctuation added to each line
 * @param {number} level - level of indent to each line
 * @param {boolean} hover - first and last line void
 * @return {*}
 */

const joinLines = (lines, delim = '', level, hover = true) => {
  const IND = level > 0 ? enumChars.TB.repeat(level) : '';
  let tab;
  return hover ? (tab = enumChars.LF + IND + enumChars.TB, `${tab}${lines.join(delim + tab)}${delim + enumChars.LF + IND}`) : (tab = IND + enumChars.TB, `${tab}${lines.join(delim + enumChars.LF + tab)}${delim}`);
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
  delim = enumChars.LF,
  bracket: bracket$1 = enumBrackets.NONE,
  level = 0
} = {}) => {
  if (discrete) return lines;
  const hover = !!bracket$1;
  const joined = lines.length && LINEFEED.test(delim) ? joinLines(lines, COMMA.test(delim) ? enumChars.CO : '', level, hover) : lines.join(delim);
  return bracket.br(joined, bracket$1);
};

exports.joinLines = joinLines;
exports.liner = liner;
