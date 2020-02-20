import * as Deco from '@spare/deco'
import * as XrEnv from '@spare/xr'
import * as Sayer from '@palett/says'
import * as DecoVector from '@spare/deco-vector'
import * as DecoEntries from '@spare/deco-entries'
import * as DecoMatrix from '@spare/deco-matrix'
import * as DecoTable from '@spare/deco-table'
import * as DecoCrostab from '@spare/deco-crostab'

export { logger, logNeL } from './src/logger'
export const { Xr, xr } = XrEnv
export const { Says, says } = Sayer
export const { deco, deca, delogger, delogNeL } = Deco
export const decoVector = DecoVector.deco
export const decoEntries = DecoEntries.deco
export const decoMatrix = DecoMatrix.deco
export const decoTable = DecoTable.deco
export const decoCrostab = DecoCrostab.deco
