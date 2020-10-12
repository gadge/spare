'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var fieldPadder = require('@spare/field-padder');
var tablePadder = require('@spare/table-padder');
var vectorMerge = require('@vect/vector-merge');

const crostabPadder = (crostab, config = {}) => {
  const sidePart = fieldPadder.fieldPadder(crostab, config);
  const bodyPart = tablePadder.tablePadder(crostab, config);
  return {
    title: sidePart.title,
    side: sidePart.side,
    head: bodyPart.head,
    rows: bodyPart.rows,
    rule: vectorMerge.acquire([sidePart.rule], bodyPart.rule)
  };
};

exports.crostabPadder = crostabPadder;
