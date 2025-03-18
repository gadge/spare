export { Deco, deco } from '@spare/deco';
export { DecoCrostab, decoCrostab } from '@spare/deco-crostab';
export { DecoEntries, decoEntries } from '@spare/deco-entries';
export { DecoFlat, decoFlat } from '@spare/deco-flat';
export { DecoFunc, decoFunc } from '@spare/deco-func';
export { DecoMatrix, decoMatrix } from '@spare/deco-matrix';
export { DecoObject, decoObject } from '@spare/deco-object';
export { DecoPale, decoPale } from '@spare/deco-pale';
export { decoSamples } from '@spare/deco-samples';
export { DecoString, decoString } from '@spare/deco-string';
export { DecoTable, decoTable } from '@spare/deco-table';
export { DecoVector, decoVector } from '@spare/deco-vector';
export { $, Xr, ros, says, xr } from '@spare/plot';
import { LF } from '@texting/enum-chars';

const logger = (x, ...p) => console.log(x + '', ...p);
const logNeL = (x, ...p) => console.log(x + '', ...p, LF);

export { logNeL, logger };
