'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var preci = require('@spare/preci');
var util = require('@spare/util');
var palett = require('palett');
var veho = require('veho');

/**
 *
 * @param {
 *          {banner:*[],matrix:*[][],[title]:string,[types]:*[]} |
 *          {head:*[],rows:*[][],[title]:string,[types]:*[]} |
 *          {header:*[],rowSet:*[][],[title]:string,[types]:*[]}
 *        } table
 * @param {?function(*):string} [abstract]
 * @param {{[abstract]:?function(*):string,[head]:?number,[tail]:?number}} [_head]
 * @param {{[head]:?number,[tail]:?number}} [_rows]
 * @param {{
 *          [on]:boolean,
 *          [mark]:{
 *            [max]:string|number[],
 *            [min]:string|number[],
 *            [na]:string|number[],
 *          },
 *          [direct]:number
 *         }} [visual]
 * @param {boolean} [ansi=false]
 * @param {boolean} [chinese=false]
 * @return {string}
 */

const brief = (table, {
  abstract,
  head: _head = {
    abstract: null,
    head: 0,
    tail: 0
  },
  rows: _rows = {
    head: 0,
    tail: 0
  },
  visual = {
    on: true,
    mark: {
      max: palett.Palett.lightGreen.accent_3,
      min: palett.Palett.orange.accent_2,
      na: palett.Greys.blueGrey.lighten_3
    },
    direct: 2
  },
  ansi = false,
  chinese = false
} = {}) => {
  var _visual, _rows2, _head2;

  let head = table.head || table.banner || table.header,
      rows = table.rows || table.matrix || table.rowSet,
      blanc;
  const [ht, wd] = veho.Mx.size(rows);
  if (!ht || !wd) return util.AEU;
  const visualOn = (_visual = visual, util.isVisual(_visual));
  ansi = visualOn ? true : ansi;
  const hs = preci.Preci.fromArr(head, _head.head, _head.tail).stringify(abstract).toList('..'),
        {
    rawx,
    palx,
    wordx
  } = preci.destructPreX(rows, (_rows2 = _rows, util.readCrop(_rows2)), (_head2 = _head, util.readCrop(_head2)), {
    abstract,
    visual,
    ansi
  }, [ht, wd]);
  ({
    head,
    blanc,
    rows
  } = preci.padTable(hs, wordx, rawx, palx, ansi, chinese));
  return [head.join(' | '), blanc.join('-+-')].concat(rows.map(row => row.join(' | '))).join(util.RN);
};

exports.brief = brief;
