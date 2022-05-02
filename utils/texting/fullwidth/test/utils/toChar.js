/**
 *
 * @param {number} n
 * @returns {string}
 */
export const toChar = n => String.fromCharCode(n)

/**
 *
 * @param {string} x
 * @returns {number}
 */
export const toCode = x => x.charCodeAt(0)

/**
 *
 * @param {number} n
 * @returns {string}
 */
export const codeToHex = n => '0x' + n.toString(16).padStart(4, '0')