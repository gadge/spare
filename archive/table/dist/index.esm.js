import { Preci, destructPreX, padTable } from '@spare/preci';
import { AEU, isVisual, readCrop, RN } from '@spare/util';
import { Palett, Greys } from 'palett';
import { Mx } from 'veho';

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
      max: Palett.lightGreen.accent_3,
      min: Palett.orange.accent_2,
      na: Greys.blueGrey.lighten_3
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
  const [ht, wd] = Mx.size(rows);
  if (!ht || !wd) return AEU;
  const visualOn = (_visual = visual, isVisual(_visual));
  ansi = visualOn ? true : ansi;
  const hs = Preci.fromArr(head, _head.head, _head.tail).stringify(abstract).toList('..'),
        {
    rawx,
    palx,
    wordx
  } = destructPreX(rows, (_rows2 = _rows, readCrop(_rows2)), (_head2 = _head, readCrop(_head2)), {
    abstract,
    visual,
    ansi
  }, [ht, wd]);
  ({
    head,
    blanc,
    rows
  } = padTable(hs, wordx, rawx, palx, ansi, chinese));
  return [head.join(' | '), blanc.join('-+-')].concat(rows.map(row => row.join(' | '))).join(RN);
};

export { brief };
