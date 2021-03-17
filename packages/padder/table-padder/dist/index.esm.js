import { DA as DA$1 } from '@spare/enum-chars';
import { widthsByColumns } from '@spare/matrix-padder';
import { PadFull, RIGHT, CENTRE, Pad } from '@spare/padder';
import { mapper } from '@vect/matrix-mapper';
import { acquire } from '@vect/vector';
import { mapper as mapper$2 } from '@vect/vector-mapper';
import { zipper } from '@vect/vector-zipper';
import { DA } from '@spare/enum-full-angle-chars';
import { hasFull } from '@spare/fullwidth';
import { mapper as mapper$1 } from '@vect/columns-mapper';

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
  const columns = acquire([head], rows);
  const widths = widthsByColumns(columns, ansi);
  const marks = mapper$1(columns, col => col.some(hasFull));
  const padRight = PadFull({
    dock: RIGHT,
    ansi
  }),
        padCentre = PadFull({
    dock: CENTRE,
    ansi
  });
  return {
    head: zipper(head, widths, (value, width, j) => padRight(value, width, marks[j])),
    rule: zipper(widths, marks, (width, check) => (check ? DA : DA$1).repeat(width)),
    rows: mapper(rows, (x, i, j) => padCentre(x, widths[j], marks[j], x))
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
  const padder = Pad(config); // use ansi

  const {
    head,
    rows
  } = table;
  const widths = widthsByColumns(acquire([head], rows), config.ansi);
  return {
    head: zipper(head, widths, (x, p) => padder(x, p, x)),
    rule: mapper$2(widths, p => DA$1.repeat(p)),
    rows: mapper(rows, (x, i, j) => padder(x, widths[j], x))
  };
};

export { tablePadder };
