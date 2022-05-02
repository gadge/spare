import * as DecoGeneric    from '@spare/deco'
import * as DecoCrostabEnv from 'packages/interop/deco-crostab'
import * as DecoEntriesEnv from '@spare/deco-entries'
import * as DecoFlatEnv    from '@spare/deco-flat'
import * as DecoFuncEnv    from '@spare/deco-func'
import * as DecoMatrixEnv  from '@spare/deco-matrix'
import * as DecoObjectEnv  from '@spare/deco-object'
import * as DecoPaleEnv    from '@spare/deco-pale'
import * as DecoSamplesEnv from 'packages/interop/deco-samples'
import * as DecoStringEnv  from '@spare/deco-string'
import * as DecoTableEnv   from 'packages/interop/deco-table'
import * as DecoVectorEnv  from '@spare/deco-vector'
import * as Sayer          from '@spare/says'
import * as XrEnv          from '@spare/xr'

export { logger, logNeL } from './src/logger'


export const { deco, Deco, delogger, delogNeL } = DecoGeneric
export const { deco: decoString, Deco: DecoString } = DecoStringEnv
export const { deco: decoVector, Deco: DecoVector } = DecoVectorEnv
export const { deco: decoEntries, Deco: DecoEntries } = DecoEntriesEnv
export const { deco: decoObject, Deco: DecoObject } = DecoObjectEnv
export const { deco: decoMatrix, Deco: DecoMatrix } = DecoMatrixEnv
export const { deco: decoSamples, Deco: DecoSamples } = DecoSamplesEnv
export const { deco: decoTable, Deco: DecoTable } = DecoTableEnv
export const { deco: decoCrostab, Deco: DecoCrostab } = DecoCrostabEnv
export const { decoFunc, DecoFunc } = DecoFuncEnv
export const { decoPale, DecoPale } = DecoPaleEnv
export const { decoFlat, DecoFlat } = DecoFlatEnv
export const { Says, says, ros } = Sayer
export const { Xr, xr } = XrEnv


