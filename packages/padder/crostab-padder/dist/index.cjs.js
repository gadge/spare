'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var fieldPadder = require('@spare/field-padder');
var tablePadder = require('@spare/table-padder');
var vectorMerge = require('@vect/vector-merge');

/**
 *
 * @param {object} crostab
 * @param {string[]} crostab.side
 * @param {string[]} crostab.head
 * @param {string[][]} crostab.rows
 * @param {string} [crostab.title]
 *
 * @param {object} config
 * @param {boolean} [config.ansi]
 * @param {boolean} [config.fullAngle]
 *
 * @returns {{head: string[], side: string[], rule: string[], title: ?string, rows: string[][]}}
 */

const crostabPadder = (crostab, config = {}) => {
  var _crostab$title;

  const sidePart = fieldPadder.fieldPadder({
    name: (_crostab$title = crostab.title) !== null && _crostab$title !== void 0 ? _crostab$title : '',
    list: crostab.side
  }, config);
  const bodyPart = tablePadder.tablePadder(crostab, config);
  return {
    title: sidePart.name,
    side: sidePart.list,
    head: bodyPart.head,
    rows: bodyPart.rows,
    rule: vectorMerge.acquire([sidePart.rule], bodyPart.rule)
  };
};

exports.crostabPadder = crostabPadder;
