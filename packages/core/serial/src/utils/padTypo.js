import { SP }              from '@texting/enum-chars'
import { fix, lpad, rpad } from '@texting/padder'

/**
 * Pads a string with a specified fill character to a given width, either on the left or right.
 *
 * @param {string} t - The string to pad.
 * @param {number|string} n - A number that determines the padding direction. If NaN, pads on the right; otherwise, pads on the left.
 * @param {number} w - The desired width of the padded string.
 * @returns {string} The padded string.
 * @example
 * padTypo('hello', NaN, 10) // returns 'hello     '
 * padTypo('hello', 1, 10) // returns '     hello'
 */
export function padTypo(t, n, w) {
  const fill = this?.fill ?? SP
  return isNaN(n) ? rpad(t, w, fill) : lpad(t, w, fill)
}

/**
 * Pads a string containing ANSI escape codes with a specified fill character to a given width, either on the left or right.
 *
 * @param {string} t - The string to pad, potentially containing ANSI escape codes.
 * @param {number} n - A number that determines the padding direction. If NaN, pads on the right; otherwise, pads on the left.
 * @param {number} w - The desired width of the padded string.
 * @returns {string} The padded string.
 * @example
 * padAnsi('\u001b[31mhello\u001b[39m', NaN, 10) // returns '\u001b[31mhello\u001b[39m     '
 * padAnsi('\u001b[31mhello\u001b[39m', 1, 10) // returns '     \u001b[31mhello\u001b[39m'
 */
export function padAnsi(t, n, w) {
  const fill = this?.fill ?? SP
  return isNaN(n) ? rpad(t, fix(t, w), fill) : lpad(t, fix(t, w), fill)
}
