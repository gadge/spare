import * as Sayer          from '@palett/says'
import * as DecoGeneric    from '@spare/deco'
import * as DecoCrostabEnv from '@spare/deco-crostab'
import * as DecoEntriesEnv from '@spare/deco-entries'
import * as DecoMatrixEnv  from '@spare/deco-matrix'
import * as DecoObjectEnv  from '@spare/deco-object'
import * as DecoSamplesEnv from '@spare/deco-samples'
import * as DecoStringEnv  from '@spare/deco-string'
import * as DecoTableEnv   from '@spare/deco-table'
import * as DecoVectorEnv  from '@spare/deco-vector'
import * as DecoPaleEnv from '@spare/deco-pale'
import * as DecoFlatEnv from '@spare/deco-flat'
import * as DecoFuncEnv from '@spare/deco-func'
import * as XrEnv          from '@spare/xr'

export { logger, logNeL } from './src/logger'

/** @type {Function} */ export const Xr = XrEnv.Xr
/** @type {Function} */ export const xr = XrEnv.xr
/** @class */ export const Says = Sayer.Says
/** @type {Function} */ export const says = Sayer.says
/** @type {Function} */ export const ros = Sayer.ros
/** @type {Function} */ export const deco = DecoGeneric.deco
/** @type {Function} */ export const Deco = DecoGeneric.Deco
/** @type {Function} */ export const deca = DecoGeneric.Deco
/** @type {Function} */ export const delogger = DecoGeneric.delogger
/** @type {Function} */ export const delogNeL = DecoGeneric.delogNeL

/** @type {Function} */ export const decoString = DecoStringEnv.deco
/** @type {Function} */ export const decoVector = DecoVectorEnv.deco
/** @type {Function} */ export const decoEntries = DecoEntriesEnv.deco
/** @type {Function} */ export const decoObject = DecoObjectEnv.deco
/** @type {Function} */ export const decoMatrix = DecoMatrixEnv.deco
/** @type {Function} */ export const decoSamples = DecoSamplesEnv.deco
/** @type {Function} */ export const decoTable = DecoTableEnv.deco
/** @type {Function} */ export const decoCrostab = DecoCrostabEnv.deco
/** @type {Function} */ export const decoFunc =DecoFuncEnv.decoFunc
/** @type {Function} */ export const decoPale =DecoPaleEnv.decoPale
/** @type {Function} */ export const decoFlat =DecoFlatEnv.decoFlat

/** @type {Function} */ export const DecoString = DecoStringEnv.Deco
/** @type {Function} */ export const DecoVector = DecoVectorEnv.Deco
/** @type {Function} */ export const DecoEntries = DecoEntriesEnv.Deco
/** @type {Function} */ export const DecoObject = DecoObjectEnv.Deco
/** @type {Function} */ export const DecoMatrix = DecoMatrixEnv.Deco
/** @type {Function} */ export const DecoSamples = DecoSamplesEnv.Deco
/** @type {Function} */ export const DecoTable = DecoTableEnv.Deco
/** @type {Function} */ export const DecoCrostab = DecoCrostabEnv.Deco
/** @type {Function} */ export const DecoFunc = DecoFuncEnv.DecoFunc
/** @type {Function} */ export const DecoPale =DecoPaleEnv.DecoPale
/** @type {Function} */ export const DecoFlat =DecoFlatEnv.DecoFlat


