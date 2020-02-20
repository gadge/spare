import * as Deco from '@spare/deco'
import * as XrEnv from '@spare/xr'
import * as Sayer from '@palett/says'
import * as DecoVectorEnv from '@spare/deco-vector'
import * as DecoEntriesEnv from '@spare/deco-entries'
import * as DecoMatrixEnv from '@spare/deco-matrix'
import * as DecoTableEnv from '@spare/deco-table'
import * as DecoCrostabEnv from '@spare/deco-crostab'

export { logger, logNeL } from './src/logger'
export const { Xr, xr } = XrEnv
export const { Says, says } = Sayer
export const { deco, deca, delogger, delogNeL } = Deco

export const decoVector = DecoVectorEnv.deco
export const decoEntries = DecoEntriesEnv.deco
export const decoMatrix = DecoMatrixEnv.deco
export const decoTable = DecoTableEnv.deco
export const decoCrostab = DecoCrostabEnv.deco

export const DecoVector = DecoVectorEnv.Deco
export const DecoEntries = DecoEntriesEnv.Deco
export const DecoMatrix = DecoMatrixEnv.Deco
export const DecoTable = DecoTableEnv.Deco
export const DecoCrostab = DecoCrostabEnv.Deco
