import { quote } from '@spare/quote';
import { isNumeric, inferType } from '@typen/num-strict';
import { COSP } from '@spare/enum-chars';
import { NUM, BOO, STR } from '@typen/enum-data-types';
import { ARRAY, OBJECT } from '@typen/enum-object-types';
import { BRACKET, BRACE } from '@spare/enum-brackets';
import { cosmetics } from '@spare/deco-vector';
import { cosmetics as cosmetics$1 } from '@spare/deco-object';

const decoString = x => quote(x.replace(/'/g, '\\\''));

const decoKey = x => /\W/.test(x) || isNumeric(x) ? decoString(x) : x;

const PRESET_VE = {
  delim: COSP,
  read: decoValue,
  bracket: BRACKET
};
const PRESET_OB = {
  dash: ':',
  delim: COSP,
  keyRead: decoKey,
  read: decoValue,
  bracket: BRACE
};
function decoValue(x) {
  if (x === void 0 || x === null) return x;
  const t = inferType(x);
  if (t === NUM || t === BOO) return x;
  if (t === STR) return decoString(x);
  if (t === ARRAY) return cosmetics.call(PRESET_VE, x);
  if (t === OBJECT) return cosmetics$1.call(PRESET_OB, x);
  return decoString(x.toString());
}

export { decoKey, decoString, decoValue };
