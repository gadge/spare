'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var matrixMargin = require('@spare/matrix-margin');
var vectorMargin = require('@spare/vector-margin');

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

const crostabMargin = ({
  title,
  side,
  head,
  rows
}, config) => {
  return {
    title: title,
    side: vectorMargin.vectorMargin(side, {
      head: config.top,
      tail: config.bottom,
      read: config.sideRead
    }),
    head: vectorMargin.vectorMargin(head, {
      head: config.left,
      tail: config.right,
      read: config.headRead
    }),
    rows: matrixMargin.matrixMargin(rows, config) // { top, bottom, left, right, height, width, read },

  };
};

exports.crostabMargin = crostabMargin;
