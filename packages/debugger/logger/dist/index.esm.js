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
import * as Sayer from '@spare/says';
import * as XrEnv from '@spare/xr';
import { LF } from '@spare/enum-chars';

const logger = (x, ...p) => void console.log(x + '', ...p);
const logNeL = (x, ...p) => void console.log(x + '', ...p, LF);

const {
  deco,
  Deco,
  delogger,
  delogNeL
} = DecoGeneric;
const {
  deco: decoString,
  Deco: DecoString
} = DecoStringEnv;
const {
  deco: decoVector,
  Deco: DecoVector
} = DecoVectorEnv;
const {
  deco: decoEntries,
  Deco: DecoEntries
} = DecoEntriesEnv;
const {
  deco: decoObject,
  Deco: DecoObject
} = DecoObjectEnv;
const {
  deco: decoMatrix,
  Deco: DecoMatrix
} = DecoMatrixEnv;
const {
  deco: decoSamples,
  Deco: DecoSamples
} = DecoSamplesEnv;
const {
  deco: decoTable,
  Deco: DecoTable
} = DecoTableEnv;
const {
  deco: decoCrostab,
  Deco: DecoCrostab
} = DecoCrostabEnv;
const {
  decoFunc,
  DecoFunc
} = DecoFuncEnv;
const {
  decoPale,
  DecoPale
} = DecoPaleEnv;
const {
  decoFlat,
  DecoFlat
} = DecoFlatEnv;
const {
  Says,
  says,
  ros
} = Sayer;
const {
  Xr,
  xr
} = XrEnv;

export { Deco, DecoCrostab, DecoEntries, DecoFlat, DecoFunc, DecoMatrix, DecoObject, DecoPale, DecoSamples, DecoString, DecoTable, DecoVector, Says, Xr, deco, decoCrostab, decoEntries, decoFlat, decoFunc, decoMatrix, decoObject, decoPale, decoSamples, decoString, decoTable, decoVector, delogNeL, delogger, logNeL, logger, ros, says, xr };
