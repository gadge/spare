import { DA as DA$1 } from '@spare/enum-chars';
import { widthsByColumns } from '@spare/matrix-padder';
import { PadFull, Pad } from '@texting/padder';
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
 * @param {object} [config]
 * @param {boolean=false} [config.ansi]
 * @return {{head: string[], rows: string[][], rule: string[]}}
 */

const tablePadderFull = (table, config = {}) => {
  const columns = acquire([table.head], table.rows);
  const widths = widthsByColumns(columns, config.ansi);
  const marks = mapper$1(columns, col => col.some(hasFull));
  const pad = PadFull(config, config);
  return {
    head: zipper(table.head, widths, (value, width, j) => pad(value, width, marks[j])),
    rule: zipper(widths, marks, (width, check) => (check ? DA : DA$1).repeat(width)),
    rows: mapper(table.rows, (x, i, j) => pad(x, widths[j], marks[j]))
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
  const padder = Pad(config); // use ansi

  const widths = widthsByColumns(acquire([table.head], table.rows), config.ansi);
  return {
    head: zipper(table.head, widths, (x, p) => padder(x, p)),
    rule: mapper$2(widths, p => DA$1.repeat(p)),
    rows: mapper(table.rows, (x, i, j) => padder(x, widths[j]))
  };
};

export { tablePadder };
