'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var enumChars = require('@spare/enum-chars');
var matrixPadder = require('@spare/matrix-padder');
var padder = require('@spare/padder');
var matrixMapper = require('@vect/matrix-mapper');
var vector = require('@vect/vector');
var vectorMapper = require('@vect/vector-mapper');
var vectorZipper = require('@vect/vector-zipper');
var enumFullAngleChars = require('@spare/enum-full-angle-chars');
var fullwidth = require('@spare/fullwidth');
var columnsMapper = require('@vect/columns-mapper');

/**
 *
 * @param {object} table
 * @param {*[]}  table.head
 * @param {string[][]} table.rows
 * @param {object} config
 * @param {boolean=false} [config.ansi]
 * @return {{head: string[], rows: string[][], rule: string[]}}
 */

const tablePadderFull = (table, config = {}) => {
  const {
    head,
    rows
  } = table;
  const {
    ansi = false
  } = config;
  const columns = vector.acquire([head], rows);
  const widths = matrixPadder.widthsByColumns(columns, ansi);
  const marks = columnsMapper.mapper(columns, col => col.some(fullwidth.hasFull));
  const padRight = padder.PadFull({
    dock: padder.RIGHT,
    ansi
  }),
        padCentre = padder.PadFull({
    dock: padder.CENTRE,
    ansi
  });
  return {
    head: vectorZipper.zipper(head, widths, (value, width, j) => padRight(value, width, marks[j])),
    rule: vectorZipper.zipper(widths, marks, (width, check) => (check ? enumFullAngleChars.DA : enumChars.DA).repeat(width)),
    rows: matrixMapper.mapper(rows, (x, i, j) => padCentre(x, widths[j], marks[j], x))
  };
};

/**
 *
 *
 * @param {object} table
 * @param {*[]} table.head
 * @param {string[][]} table.rows
 * @param config
 * @param {boolean=false} [config.ansi]
 * @param {boolean=false} [config.fullAngle]
 * @return {{head: string[], rule: string[], rows: string[][]}}
 */

const tablePadder = (table, config = {}) => {
  if (config.fullAngle) return tablePadderFull(table, config);
  const padder$1 = padder.Pad(config); // use ansi

  const {
    head,
    rows
  } = table;
  const widths = matrixPadder.widthsByColumns(vector.acquire([head], rows), config.ansi);
  return {
    head: vectorZipper.zipper(head, widths, (x, p) => padder$1(x, p, x)),
    rule: vectorMapper.mapper(widths, p => enumChars.DA.repeat(p)),
    rows: matrixMapper.mapper(rows, (x, i, j) => padder$1(x, widths[j], x))
  };
};

exports.tablePadder = tablePadder;
