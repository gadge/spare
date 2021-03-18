'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var enumChars = require('@spare/enum-chars');
var matrixPadder = require('@spare/matrix-padder');
var padder = require('@texting/padder');
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
 * @param {object} [config]
 * @param {boolean=false} [config.ansi]
 * @return {{head: string[], rows: string[][], rule: string[]}}
 */

const tablePadderFull = (table, config = {}) => {
  const columns = vector.acquire([table.head], table.rows);
  const widths = matrixPadder.widthsByColumns(columns, config.ansi);
  const marks = columnsMapper.mapper(columns, col => col.some(fullwidth.hasFull));
  const pad = padder.PadFull(config, config);
  return {
    head: vectorZipper.zipper(table.head, widths, (value, width, j) => pad(value, width, marks[j])),
    rule: vectorZipper.zipper(widths, marks, (width, check) => (check ? enumFullAngleChars.DA : enumChars.DA).repeat(width)),
    rows: matrixMapper.mapper(table.rows, (x, i, j) => pad(x, widths[j], marks[j]))
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
 * @param {boolean=false} [config.full]
 * @return {{head: string[], rule: string[], rows: string[][]}}
 */

const tablePadder = (table, config = {}) => {
  if (config.full) return tablePadderFull(table, config);
  const padder$1 = padder.Pad(config); // use ansi

  const widths = matrixPadder.widthsByColumns(vector.acquire([table.head], table.rows), config.ansi);
  return {
    head: vectorZipper.zipper(table.head, widths, (x, p) => padder$1(x, p)),
    rule: vectorMapper.mapper(widths, p => enumChars.DA.repeat(p)),
    rows: matrixMapper.mapper(table.rows, (x, i, j) => padder$1(x, widths[j]))
  };
};

exports.tablePadder = tablePadder;
