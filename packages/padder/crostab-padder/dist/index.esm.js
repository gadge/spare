import { fieldPadder } from '@spare/field-padder';
import { tablePadder } from '@spare/table-padder';
import { acquire } from '@vect/vector-merge';

const crostabPadder = (crostab, config = {}) => {
  const sidePart = fieldPadder(crostab, config);
  const bodyPart = tablePadder(crostab, config);
  return {
    title: sidePart.title,
    side: sidePart.side,
    head: bodyPart.head,
    rows: bodyPart.rows,
    rule: acquire([sidePart.rule], bodyPart.rule)
  };
};

export { crostabPadder };
