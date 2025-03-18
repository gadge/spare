import { deco, Deco }               from '@spare/deco'
import { decoCrostab, DecoCrostab } from '@spare/deco-crostab'
import { decoEntries, DecoEntries } from '@spare/deco-entries'
import { decoFlat, DecoFlat }       from '@spare/deco-flat'
import { decoFunc, DecoFunc }       from '@spare/deco-func'
import { decoMatrix, DecoMatrix }   from '@spare/deco-matrix'
import { decoObject, DecoObject }   from '@spare/deco-object'
import { decoPale, DecoPale }       from '@spare/deco-pale'
import { decoSamples }              from '@spare/deco-samples'
import { decoString, DecoString }   from '@spare/deco-string'
import { decoTable, DecoTable }     from '@spare/deco-table'
import { decoVector, DecoVector }   from '@spare/deco-vector'
import { $, ros, says, xr, Xr }     from '@spare/plot'
import { logger, logNeL }           from './logger.js'


/**
 * @function deco
 * @description Decorate a value.
 * @param {*} value - The value to decorate.
 * @param {Object} [options] - Optional decoration options.
 * @returns {string} - The decorated string.
 */
export { deco }
/**
 * @function Deco
 * @description Decorator class.
 */
export { Deco }
/**
 * @function decoString
 * @description Decorate a string.
 * @param {string} str - The string to decorate.
 * @param {Object} [options] - Optional decoration options.
 * @returns {string} - The decorated string.
 */
export { decoString }
/**
 * @function DecoString
 * @description String decorator class.
 */
export { DecoString }
/**
 * @function decoVector
 * @description Decorate a vector (array).
 * @param {Array} vec - The vector to decorate.
 * @param {Object} [options] - Optional decoration options.
 * @returns {string} - The decorated string.
 */
export { decoVector }
/**
 * @function DecoVector
 * @description Vector decorator class.
 */
export { DecoVector }
/**
 * @function decoEntries
 * @description Decorate entries (key-value pairs).
 * @param {Array<[string, any]>} entries - The entries to decorate.
 * @param {Object} [options] - Optional decoration options.
 * @returns {string} - The decorated string.
 */
export { decoEntries }
/**
 * @function DecoEntries
 * @description Entries decorator class.
 */
export { DecoEntries }
/**
 * @function decoObject
 * @description Decorate an object.
 * @param {Object} obj - The object to decorate.
 * @param {Object} [options] - Optional decoration options.
 * @returns {string} - The decorated string.
 */
export { decoObject }
/**
 * @function DecoObject
 * @description Object decorator class.
 */
export { DecoObject }
/**
 * @function decoMatrix
 * @description Decorate a matrix (2D array).
 * @param {Array<Array>} matrix - The matrix to decorate.
 * @param {Object} [options] - Optional decoration options.
 * @returns {string} - The decorated string.
 */
export { decoMatrix }
/**
 * @function DecoMatrix
 * @description Matrix decorator class.
 */
export { DecoMatrix }
/**
 * @function decoSamples
 * @description Decorate samples.
 */
export { decoSamples }
/**
 * @function decoTable
 * @description Decorate a table.
 */
export { decoTable }
/**
 * @function DecoTable
 * @description Table decorator class.
 */
export { DecoTable }
/**
 * @function decoCrostab
 * @description Decorate a crostab.
 */
export { decoCrostab }
/**
 * @function DecoCrostab
 * @description Crostab decorator class.
 */
export { DecoCrostab }
/**
 * @function decoFunc
 * @description Decorate a function.
 */
export { decoFunc }
/**
 * @function DecoFunc
 * @description Function decorator class.
 */
export { DecoFunc }
/**
 * @function decoPale
 * @description Decorate a pale value.
 */
export { decoPale }
/**
 * @function DecoPale
 * @description Pale decorator class.
 */
export { DecoPale }
/**
 * @function decoFlat
 * @description Decorate a flat value.
 */
export { decoFlat }
/**
 * @function DecoFlat
 * @description Flat decorator class.
 */
export { DecoFlat }
/**
 * @function Xr
 * @description Xr class.
 */
export { Xr }
/**
 * @function xr
 * @description Xr function.
 */
export { xr }
/**
 * @function ros
 * @description Ros function.
 */
export { ros }
/**
 * @function $
 * @description $ function.
 */
export { $ }
/**
 * @function says
 * @description Says function.
 */
export { says }
/**
 * @function logger
 * @description Logger function.
 */
export { logger }
/**
 * @function logNeL
 * @description LogNeL function.
 */
export { logNeL }
