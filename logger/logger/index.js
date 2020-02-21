import * as Deco from '@spare/deco'
import * as XrEnv from '@spare/xr'
import * as Sayer from '@palett/says'
import * as DecoVectorEnv from '@spare/deco-vector'
import * as DecoEntriesEnv from '@spare/deco-entries'
import * as DecoMatrixEnv from '@spare/deco-matrix'
import * as DecoTableEnv from '@spare/deco-table'
import * as DecoCrostabEnv from '@spare/deco-crostab'

export { logger, logNeL } from './src/logger'

/** @function */ export const Xr = XrEnv.Xr
/** @function */ export const xr = XrEnv.xr
/** @class */ export const Says = Sayer.Says
/** @function */ export const says = Sayer.says
/** @function */ export const deco = Deco.deco
/** @function */ export const deca = Deco.deca
/** @function */ export const delogger = Deco.delogger
/** @function */ export const delogNeL = Deco.delogNeL

/** @function */ export const decoVector = DecoVectorEnv.deco
/** @function */ export const decoEntries = DecoEntriesEnv.deco
/** @function */ export const decoMatrix = DecoMatrixEnv.deco
/** @function */ export const decoTable = DecoTableEnv.deco
/** @function */ export const decoCrostab = DecoCrostabEnv.deco

/** @function */ export const DecoVector = DecoVectorEnv.Deco
/** @function */ export const DecoEntries = DecoEntriesEnv.Deco
/** @function */ export const DecoMatrix = DecoMatrixEnv.Deco
/** @function */ export const DecoTable = DecoTableEnv.Deco
/** @function */ export const DecoCrostab = DecoCrostabEnv.Deco
