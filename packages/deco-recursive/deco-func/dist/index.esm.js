import { parenth } from '@spare/bracket';
import { SP } from '@spare/enum-chars';
import { lange } from '@spare/lange';
import { Blue, LightBlue, Lime, Grey, Brown, BlueGrey, Purple, DeepPurple } from '@palett/cards';
import { Dye } from '@palett/dye';
import { makeReplaceable } from '@spare/translator';

const DECOFUN_CONFIG = {
  pr: true,
  fw: 160,
  aw: 192
};
const DECOFUNC_CONFIG = {
  pretty: true,
  flatMark: 160,
  abbrMark: 192
};

var _ref, _function, _return;
const nameDye = Dye.hex(Blue.lighten_2);
const argsDye = Dye.hex(LightBlue.accent_2);
const bodyDye = Dye.hex(LightBlue.lighten_3);
const arrowDye = Dye.hex(Lime.lighten_1);
const PresetDye = (_ref = [[/function/gi, (_function = 'function', Dye.hex(Grey.base)(_function))], [/return/gi, (_return = 'return', Dye.hex(Brown.lighten_3)(_return))], [/\bthis\b/gi, Dye.hex(BlueGrey.accent_2)], [/\b(if|else|while|do|switch|for)\b/gi, Dye.hex(Purple.lighten_3)], [/\b(var|let|const)\b/gi, Dye.hex(DeepPurple.lighten_3)]], makeReplaceable(_ref));

const funcName = func => {
  var _func$name;

  return `[fn:(${(_func$name = func === null || func === void 0 ? void 0 : func.name) !== null && _func$name !== void 0 ? _func$name : '<anonym>'})]`;
};

const FUNCTION_BODY = /function\s*(\w*)\s*\(([\w\s,]+)\)\s*\{\s*return(.+);?\s*\}/gs;
const THIS_REG = /\bthis\b/;
const FUNCTION_INITIAL = /^function/;
const LINEFEEDS = /\n\s*(\n\s*)/g;

const funcToLined = func => {
  return func.toString().replace(LINEFEEDS, (_, p1) => p1);
};

const flatten = (text, flatMark) => {
  const temp = text.replace(/\s+/g, ' ');
  if (temp.length <= flatMark) text = temp.replace(/;\s*}/g, ' }');
  return text;
};

const lambdafy = (text, pretty, defaultName = 'anonym') => {
  if (!THIS_REG.test(text)) text = pretty ? text.replace(FUNCTION_BODY, (_, name, args, body) => nameDye(name === 'anonymous' ? defaultName : name) + SP + parenth(argsDye(args.trim())) + SP + arrowDye('=>') + bodyDye(body)) : text.replace(FUNCTION_BODY, (_, name, args, body) => name + SP + parenth(args) + SP + '=>' + body);
  return text.replace(FUNCTION_INITIAL, '').trim();
};

const abbrev = (text, abbrMark, func) => {
  if (lange(text) > abbrMark) return funcName(func);
  return text;
};

const prettify = (text, pretty) => {
  if (pretty) return text.replace(PresetDye);
  return text;
};

const _decoFunc = function (func) {
  let text;
  const {
    pr,
    fw,
    aw
  } = this;
  text = funcToLined(func);
  text = flatten(text, fw);
  text = lambdafy(text, pr, func === null || func === void 0 ? void 0 : func.name);
  text = abbrev(text, aw, func);
  return prettify(text, pr);
};

const FUNC_REG = /\((.*?)\)\s+{/s;
const LAMB_REG = /\(?(.*?)\)?\s+=>/s;
const argnames = fn => {
  const text = fn.toString();
  let ms, ph;
  if ((ms = FUNC_REG.exec(text)) && ([, ph] = ms)) return ph.match(/\w+/g);
  if ((ms = LAMB_REG.exec(text)) && ([, ph] = ms)) return ph.match(/\w+/g);
  return [];
};

const parseConfig = p => {
  var _ref, _p$pretty, _ref2, _p$flatMark, _ref3, _p$abbrMark;

  p.pr = (_ref = (_p$pretty = p.pretty) !== null && _p$pretty !== void 0 ? _p$pretty : p.pr) !== null && _ref !== void 0 ? _ref : true;
  p.fw = (_ref2 = (_p$flatMark = p.flatMark) !== null && _p$flatMark !== void 0 ? _p$flatMark : p.fw) !== null && _ref2 !== void 0 ? _ref2 : 160;
  p.aw = (_ref3 = (_p$abbrMark = p.abbrMark) !== null && _p$abbrMark !== void 0 ? _p$abbrMark : p.aw) !== null && _ref3 !== void 0 ? _ref3 : 192;
  return p;
};
/**
 * @param {Function} func
 * @param {Object} p
 * @param {boolean} [p.pretty=true]
 * @param {number} [p.flatMark=160]
 * @param {number} [p.abbrMark=192]
 * @returns {string}
 */


const decoFunc = (func, p = DECOFUNC_CONFIG) => _decoFunc.call(parseConfig(p), func);
/**
 * @param {Object} p
 * @param {boolean} [p.pretty=true]
 * @param {number} [p.flatMark=160]
 * @param {number} [p.abbrMark=192]
 * @returns {Function}
 */

const DecoFunc = (p = DECOFUNC_CONFIG) => _decoFunc.bind(parseConfig(p));

export { DECOFUN_CONFIG, DecoFunc, _decoFunc, argnames, decoFunc, funcName };
