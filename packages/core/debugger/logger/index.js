import * as Deco from '@spare/deco'
import * as XrEnv from '@spare/xr'
import * as Sayer from '@palett/says'
import * as DecoVectorEnv from '@spare/deco-vector'
import * as DecoEntriesEnv from '@spare/deco-entries'
import * as DecoObjectEnv from '@spare/deco-object'
import * as DecoMatrixEnv from '@spare/deco-matrix'
import * as DecoSamplesEnv from '@spare/deco-samples'
import * as DecoTableEnv from '@spare/deco-table'
import * as DecoCrostabEnv from '@spare/deco-crostab'

export { logger, logNeL } from './src/logger'

/** @type {Function} */ export const Xr = XrEnv.Xr
/** @type {Function} */ export const xr = XrEnv.xr
/** @class */ export const Says = Sayer.Says
/** @type {Function} */ export const says = Sayer.says
/** @type {Function} */ export const deco = Deco.deco
/** @type {Function} */ export const deca = Deco.deca
/** @type {Function} */ export const delogger = Deco.delogger
/** @type {Function} */ export const delogNeL = Deco.delogNeL

/** @type {Function} */ export const decoVector = DecoVectorEnv.deco
/** @type {Function} */ export const decoEntries = DecoEntriesEnv.deco
/** @type {Function} */ export const decoObject = DecoObjectEnv.deco
/** @type {Function} */ export const decoMatrix = DecoMatrixEnv.deco
/** @type {Function} */ export const decoSamples = DecoSamplesEnv.deco
/** @type {Function} */ export const decoTable = DecoTableEnv.deco
/** @type {Function} */ export const decoCrostab = DecoCrostabEnv.deco

/** @type {Function} */ export const DecoVector = DecoVectorEnv.Deco
/** @type {Function} */ export const DecoEntries = DecoEntriesEnv.Deco
/** @type {Function} */ export const DecoObject = DecoObjectEnv.Deco
/** @type {Function} */ export const DecoMatrix = DecoMatrixEnv.Deco
/** @type {Function} */ export const DecoSamples = DecoSamplesEnv.Deco
/** @type {Function} */ export const DecoTable = DecoTableEnv.Deco
/** @type {Function} */ export const DecoCrostab = DecoCrostabEnv.Deco
