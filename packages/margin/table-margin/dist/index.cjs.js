'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var matrixMargin = require('@spare/matrix-margin');
var vectorMargin = require('@spare/vector-margin');

/**
 *
 * @param {*[]} head
 * @param {*[][]} rows
 * @param {*} [title]
 * @param {Object} config
 * @param {number} config.top
 * @param {number} config.bottom
 * @param {number} config.left
 * @param {number} config.right
 * @param {number} [config.height]
 * @param {number} [config.width]
 * @param {Function} [config.read]
 * @param {Function} [config.headRead]
 * @return {{head: string[], rows: string[][], title: string}}
 */

const tableMargin = ({
  head,
  rows,
  title
}, config) => {
  return {
    head: vectorMargin.vectorMargin(head, {
      head: config.left,
      tail: config.right,
      read: config.headRead
    }),
    rows: matrixMargin.matrixMargin(rows, config),
    // { top, bottom, left, right, height, width, read },
    title
  };
};

exports.tableMargin = tableMargin;
