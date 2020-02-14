/**
 *
 * @param {*[][]} mx
 * @returns {number[]}
 */
export const coins = mx => mx[0].map((_, i) => i)

export const width = mx => mx[0].length

/**
 * Transpose a 2d-array.
 * @param {*[][]} mx
 * @returns {*[][]}
 */
export const tr = mx => coins(mx).map(n => mx.map(r => r[n]))
