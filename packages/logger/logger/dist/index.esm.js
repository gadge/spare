import { deco as deco$1, deca as deca$1, delogger as delogger$1, delogNeL as delogNeL$1 } from '@spare/deco';
import { Xr as Xr$1, xr as xr$1 } from '@spare/xr';
import { Says as Says$1, says as says$1 } from '@palett/says';
import { deco as deco$2, Deco } from '@spare/deco-vector';
import { deco as deco$3, Deco as Deco$1 } from '@spare/deco-entries';
import { deco as deco$4, Deco as Deco$2 } from '@spare/deco-object';
import { deco as deco$5, Deco as Deco$3 } from '@spare/deco-matrix';
import { deco as deco$6, Deco as Deco$4 } from '@spare/deco-samples';
import { deco as deco$7, Deco as Deco$5 } from '@spare/deco-table';
import { deco as deco$8, Deco as Deco$6 } from '@spare/deco-crostab';

const logger = (x, ...p) => void console.log(x + '', ...p);
const logNeL = (x, ...p) => void console.log(x + '', ...p, '\n');

/** @type {Function} */

const Xr = Xr$1;
/** @type {Function} */

const xr = xr$1;
/** @class */

const Says = Says$1;
/** @type {Function} */

const says = says$1;
/** @type {Function} */

const deco = deco$1;
/** @type {Function} */

const deca = deca$1;
/** @type {Function} */

const delogger = delogger$1;
/** @type {Function} */

const delogNeL = delogNeL$1;
/** @type {Function} */

const decoVector = deco$2;
/** @type {Function} */

const decoEntries = deco$3;
/** @type {Function} */

const decoObject = deco$4;
/** @type {Function} */

const decoMatrix = deco$5;
/** @type {Function} */

const decoSamples = deco$6;
/** @type {Function} */

const decoTable = deco$7;
/** @type {Function} */

const decoCrostab = deco$8;
/** @type {Function} */

const DecoVector = Deco;
/** @type {Function} */

const DecoEntries = Deco$1;
/** @type {Function} */

const DecoObject = Deco$2;
/** @type {Function} */

const DecoMatrix = Deco$3;
/** @type {Function} */

const DecoSamples = Deco$4;
/** @type {Function} */

const DecoTable = Deco$5;
/** @type {Function} */

const DecoCrostab = Deco$6;

export { DecoCrostab, DecoEntries, DecoMatrix, DecoObject, DecoSamples, DecoTable, DecoVector, Says, Xr, deca, deco, decoCrostab, decoEntries, decoMatrix, decoObject, decoSamples, decoTable, decoVector, delogNeL, delogger, logNeL, logger, says, xr };
