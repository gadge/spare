import { deco as deco$1, deca as deca$1, delogger as delogger$1, delogNeL as delogNeL$1 } from '@spare/deco';
import { Xr as Xr$1, xr as xr$1 } from '@spare/xr';
import { Says as Says$1, says as says$1 } from '@palett/says';
import { deco as deco$2, Deco } from '@spare/deco-vector';
import { deco as deco$3, Deco as Deco$1 } from '@spare/deco-entries';
import { deco as deco$4, Deco as Deco$2 } from '@spare/deco-matrix';
import { deco as deco$5, Deco as Deco$3 } from '@spare/deco-samples';
import { deco as deco$6, Deco as Deco$4 } from '@spare/deco-table';
import { deco as deco$7, Deco as Deco$5 } from '@spare/deco-crostab';

const logger = (x, ...p) => void console.log(x + '', ...p);
const logNeL = (x, ...p) => void console.log(x + '', ...p, '\n');

/** @function */

const Xr = Xr$1;
/** @function */

const xr = xr$1;
/** @class */

const Says = Says$1;
/** @function */

const says = says$1;
/** @function */

const deco = deco$1;
/** @function */

const deca = deca$1;
/** @function */

const delogger = delogger$1;
/** @function */

const delogNeL = delogNeL$1;
/** @function */

const decoVector = deco$2;
/** @function */

const decoEntries = deco$3;
/** @function */

const decoMatrix = deco$4;
/** @function */

const decoSamples = deco$5;
/** @function */

const decoTable = deco$6;
/** @function */

const decoCrostab = deco$7;
/** @function */

const DecoVector = Deco;
/** @function */

const DecoEntries = Deco$1;
/** @function */

const DecoMatrix = Deco$2;
/** @function */

const DecoSamples = Deco$3;
/** @function */

const DecoTable = Deco$4;
/** @function */

const DecoCrostab = Deco$5;

export { DecoCrostab, DecoEntries, DecoMatrix, DecoSamples, DecoTable, DecoVector, Says, Xr, deca, deco, decoCrostab, decoEntries, decoMatrix, decoSamples, decoTable, decoVector, delogNeL, delogger, logNeL, logger, says, xr };
