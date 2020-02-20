import * as Deco from '@spare/deco';
import * as XrEnv from '@spare/xr';
import * as Sayer from '@palett/says';
import { deco as deco$1, Deco as Deco$1 } from '@spare/deco-vector';
import { deco as deco$2, Deco as Deco$2 } from '@spare/deco-entries';
import { deco as deco$3, Deco as Deco$3 } from '@spare/deco-matrix';
import { deco as deco$4, Deco as Deco$4 } from '@spare/deco-table';
import { deco as deco$5, Deco as Deco$5 } from '@spare/deco-crostab';

const logger = (x, ...p) => void console.log(x + '', ...p);
const logNeL = (x, ...p) => void console.log(x + '', ...p, '\n');

const {
  Xr,
  xr
} = XrEnv;
const {
  Says,
  says
} = Sayer;
const {
  deco,
  deca,
  delogger,
  delogNeL
} = Deco;
const decoVector = deco$1;
const decoEntries = deco$2;
const decoMatrix = deco$3;
const decoTable = deco$4;
const decoCrostab = deco$5;
const DecoVector = Deco$1;
const DecoEntries = Deco$2;
const DecoMatrix = Deco$3;
const DecoTable = Deco$4;
const DecoCrostab = Deco$5;

export { DecoCrostab, DecoEntries, DecoMatrix, DecoTable, DecoVector, Says, Xr, deca, deco, decoCrostab, decoEntries, decoMatrix, decoTable, decoVector, delogNeL, delogger, logNeL, logger, says, xr };
