import * as Sayer from '@spare/says';
import * as DecoGeneric from '@spare/deco';
import * as DecoCrostabEnv from '@spare/deco-crostab';
import * as DecoEntriesEnv from '@spare/deco-entries';
import * as DecoFlatEnv from '@spare/deco-flat';
import * as DecoFuncEnv from '@spare/deco-func';
import * as DecoMatrixEnv from '@spare/deco-matrix';
import * as DecoObjectEnv from '@spare/deco-object';
import * as DecoPaleEnv from '@spare/deco-pale';
import * as DecoSamplesEnv from '@spare/deco-samples';
import * as DecoStringEnv from '@spare/deco-string';
import * as DecoTableEnv from '@spare/deco-table';
import * as DecoVectorEnv from '@spare/deco-vector';
import * as XrEnv from '@spare/xr';
import { LF } from '@spare/enum-chars';

const logger = (x, ...p) => void console.log(x + '', ...p);
const logNeL = (x, ...p) => void console.log(x + '', ...p, LF);

/** @type {Function} */

const Xr = XrEnv.Xr;
/** @type {Function} */

const xr = XrEnv.xr;
/** @class */

const Says = Sayer.Says;
/** @type {Function} */

const says = Sayer.says;
/** @type {Function} */

const ros = Sayer.ros;
/** @type {Function} */

const deco = DecoGeneric.deco;
/** @type {Function} */

const Deco = DecoGeneric.Deco;
/** @type {Function} */

const deca = DecoGeneric.Deco;
/** @type {Function} */

const delogger = DecoGeneric.delogger;
/** @type {Function} */

const delogNeL = DecoGeneric.delogNeL;
/** @type {Function} */

const decoString = DecoStringEnv.deco;
/** @type {Function} */

const decoVector = DecoVectorEnv.deco;
/** @type {Function} */

const decoEntries = DecoEntriesEnv.deco;
/** @type {Function} */

const decoObject = DecoObjectEnv.deco;
/** @type {Function} */

const decoMatrix = DecoMatrixEnv.deco;
/** @type {Function} */

const decoSamples = DecoSamplesEnv.deco;
/** @type {Function} */

const decoTable = DecoTableEnv.deco;
/** @type {Function} */

const decoCrostab = DecoCrostabEnv.deco;
/** @type {Function} */

const decoFunc = DecoFuncEnv.decoFunc;
/** @type {Function} */

const decoPale = DecoPaleEnv.decoPale;
/** @type {Function} */

const decoFlat = DecoFlatEnv.decoFlat;
/** @type {Function} */

const DecoString = DecoStringEnv.Deco;
/** @type {Function} */

const DecoVector = DecoVectorEnv.Deco;
/** @type {Function} */

const DecoEntries = DecoEntriesEnv.Deco;
/** @type {Function} */

const DecoObject = DecoObjectEnv.Deco;
/** @type {Function} */

const DecoMatrix = DecoMatrixEnv.Deco;
/** @type {Function} */

const DecoSamples = DecoSamplesEnv.Deco;
/** @type {Function} */

const DecoTable = DecoTableEnv.Deco;
/** @type {Function} */

const DecoCrostab = DecoCrostabEnv.Deco;
/** @type {Function} */

const DecoFunc = DecoFuncEnv.DecoFunc;
/** @type {Function} */

const DecoPale = DecoPaleEnv.DecoPale;
/** @type {Function} */

const DecoFlat = DecoFlatEnv.DecoFlat;

export { Deco, DecoCrostab, DecoEntries, DecoFlat, DecoFunc, DecoMatrix, DecoObject, DecoPale, DecoSamples, DecoString, DecoTable, DecoVector, Says, Xr, deca, deco, decoCrostab, decoEntries, decoFlat, decoFunc, decoMatrix, decoObject, decoPale, decoSamples, decoString, decoTable, decoVector, delogNeL, delogger, logNeL, logger, ros, says, xr };
