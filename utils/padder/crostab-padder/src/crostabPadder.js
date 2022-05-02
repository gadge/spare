import { fieldPadder } from '@spare/field-padder'
import { tablePadder } from '@spare/table-padder'
import { acquire }     from '@vect/vector-merge'

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
export const crostabPadder = (crostab, config = {}) => {
  const sidePart = fieldPadder({ name: crostab.title ?? '', list: crostab.side }, config)
  const bodyPart = tablePadder(crostab, config)
  return {
    title: sidePart.name,
    side: sidePart.list,
    head: bodyPart.head,
    rows: bodyPart.rows,
    rule: acquire([sidePart.rule], bodyPart.rule)
  }
}



