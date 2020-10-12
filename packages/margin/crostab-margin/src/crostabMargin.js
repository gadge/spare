import { matrixMargin } from '@spare/matrix-margin'
import { vectorMargin } from '@spare/vector-margin'

/**
 *
 * @param {string|*} title
 * @param {*[]} side
 * @param {*[]} head
 * @param {*[][]} rows
 * @param {Object} config
 * @param {number} config.top
 * @param {number} config.bottom
 * @param {number} config.left
 * @param {number} config.right
 * @param {number} [config.height]
 * @param {number} [config.width]
 * @param {Function} [config.sideRead]
 * @param {Function} [config.headRead]
 * @param {Function} [config.read]
 * @return {{title: string|*, side: string[], head: string[], rows: string[][] }}
 */
export const crostabMargin = ({ title, side, head, rows, }, config) => {
  return {
    title: title,
    side: vectorMargin(side, { head: config.top, tail: config.bottom, read: config.sideRead }),
    head: vectorMargin(head, { head: config.left, tail: config.right, read: config.headRead }),
    rows: matrixMargin(rows, config), // { top, bottom, left, right, height, width, read },
  }
}