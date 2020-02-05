import { Ink } from './Ink'

/**
 *
 * @param label
 * @param items
 * @returns {(Ink|object<string,Ink>)}
 * @constructor
 */
export const Xr = (label, ...items) => new Ink(label, ...items)
