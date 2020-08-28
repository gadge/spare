import { Says as Says$1, says as says$1, ros as ros$1 } from '@palett/says';
import { deco as deco$1, Deco as Deco$1, delogger as delogger$1, delogNeL as delogNeL$1 } from '@spare/deco';
import { deco as deco$9, Deco as Deco$9 } from '@spare/deco-crostab';
import { deco as deco$4, Deco as Deco$4 } from '@spare/deco-entries';
import { decoFlat as decoFlat$1, DecoFlat as DecoFlat$1 } from '@spare/deco-flat';
import { decoFunc as decoFunc$1, DecoFunc as DecoFunc$1 } from '@spare/deco-func';
import { deco as deco$6, Deco as Deco$6 } from '@spare/deco-matrix';
import { deco as deco$5, Deco as Deco$5 } from '@spare/deco-object';
import { decoPale as decoPale$1, DecoPale as DecoPale$1 } from '@spare/deco-pale';
import { deco as deco$7, Deco as Deco$7 } from '@spare/deco-samples';
import { deco as deco$2, Deco as Deco$2 } from '@spare/deco-string';
import { deco as deco$8, Deco as Deco$8 } from '@spare/deco-table';
import { deco as deco$3, Deco as Deco$3 } from '@spare/deco-vector';
import { Xr as Xr$1, xr as xr$1 } from '@spare/xr';
import { LF } from '@spare/enum-chars';

const logger = (x, ...p) => void console.log(x + '', ...p);
const logNeL = (x, ...p) => void console.log(x + '', ...p, LF);

/** @type {Function} */

const Xr = Xr$1;
/** @type {Function} */

const xr = xr$1;
/** @class */

const Says = Says$1;
/** @type {Function} */

const says = says$1;
/** @type {Function} */

const ros = ros$1;
/** @type {Function} */

const deco = deco$1;
/** @type {Function} */

const Deco = Deco$1;
/** @type {Function} */

const deca = Deco$1;
/** @type {Function} */

const delogger = delogger$1;
/** @type {Function} */

const delogNeL = delogNeL$1;
/** @type {Function} */

const decoString = deco$2;
/** @type {Function} */

const decoVector = deco$3;
/** @type {Function} */

const decoEntries = deco$4;
/** @type {Function} */

const decoObject = deco$5;
/** @type {Function} */

const decoMatrix = deco$6;
/** @type {Function} */

const decoSamples = deco$7;
/** @type {Function} */

const decoTable = deco$8;
/** @type {Function} */

const decoCrostab = deco$9;
/** @type {Function} */

const decoFunc = decoFunc$1;
/** @type {Function} */

const decoPale = decoPale$1;
/** @type {Function} */

const decoFlat = decoFlat$1;
/** @type {Function} */

const DecoString = Deco$2;
/** @type {Function} */

const DecoVector = Deco$3;
/** @type {Function} */

const DecoEntries = Deco$4;
/** @type {Function} */

const DecoObject = Deco$5;
/** @type {Function} */

const DecoMatrix = Deco$6;
/** @type {Function} */

const DecoSamples = Deco$7;
/** @type {Function} */

const DecoTable = Deco$8;
/** @type {Function} */

const DecoCrostab = Deco$9;
/** @type {Function} */

const DecoFunc = DecoFunc$1;
/** @type {Function} */

const DecoPale = DecoPale$1;
/** @type {Function} */

const DecoFlat = DecoFlat$1;

export { Deco, DecoCrostab, DecoEntries, DecoFlat, DecoFunc, DecoMatrix, DecoObject, DecoPale, DecoSamples, DecoString, DecoTable, DecoVector, Says, Xr, deca, deco, decoCrostab, decoEntries, decoFlat, decoFunc, decoMatrix, decoObject, decoPale, decoSamples, decoString, decoTable, decoVector, delogNeL, delogger, logNeL, logger, ros, says, xr };
