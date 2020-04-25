'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var enumChars = require('@spare/enum-chars');
var bracket = require('@spare/bracket');
var lange = require('@spare/lange');
var cards = require('@palett/cards');
var convert = require('@palett/convert');
var dye = require('@palett/dye');
var translator = require('@spare/translator');

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

var _Blue$lighten_, _LightBlue$accent_, _LightBlue$lighten_, _Lime$lighten_, _ref, _function, _Grey$base, _return, _Brown$lighten_;
const nameDye = dye.Dye((_Blue$lighten_ = cards.Blue.lighten_2, convert.hexToRgb(_Blue$lighten_)));
const argsDye = dye.Dye((_LightBlue$accent_ = cards.LightBlue.accent_2, convert.hexToRgb(_LightBlue$accent_)));
const bodyDye = dye.Dye((_LightBlue$lighten_ = cards.LightBlue.lighten_3, convert.hexToRgb(_LightBlue$lighten_)));
const arrowDye = dye.Dye((_Lime$lighten_ = cards.Lime.lighten_1, convert.hexToRgb(_Lime$lighten_)));
const PresetDye = (_ref = [[/function/gi, (_function = 'function', dye.Dye((_Grey$base = cards.Grey.base, convert.hexToRgb(_Grey$base)))(_function))], [/return/gi, (_return = 'return', dye.Dye((_Brown$lighten_ = cards.Brown.lighten_3, convert.hexToRgb(_Brown$lighten_)))(_return))], [/\bthis\b/gi, x => {
  var _x, _BlueGrey$accent_;

  return _x = x, dye.Dye((_BlueGrey$accent_ = cards.BlueGrey.accent_2, convert.hexToRgb(_BlueGrey$accent_)))(_x);
}], [/\b(if|else|while|do|switch|for)\b/gi, x => {
  var _x2, _Purple$lighten_;

  return _x2 = x, dye.Dye((_Purple$lighten_ = cards.Purple.lighten_3, convert.hexToRgb(_Purple$lighten_)))(_x2);
}], [/\b(var|let|const)\b/gi, x => {
  var _x3, _DeepPurple$lighten_;

  return _x3 = x, dye.Dye((_DeepPurple$lighten_ = cards.DeepPurple.lighten_3, convert.hexToRgb(_DeepPurple$lighten_)))(_x3);
}]], translator.makeReplaceable(_ref));

const funcName = func => {
  var _func$name;

  return `[fn:(${(_func$name = func === null || func === void 0 ? void 0 : func.name) !== null && _func$name !== void 0 ? _func$name : '<anonym>'})]`;
};

const LAMB_REG = /function\s*(\w*)\s*\(([\w\s,]+)\)\s*\{\s*return(.+);?\s*\}/gs;
const THIS_REG = /\bthis\b/;
const FUNC_INI = /^function/;
const MULTI_LF = /\n\s*(\n\s*)/g;

const funcToLined = func => {
  return func.toString().replace(MULTI_LF, (_, p1) => p1);
};

const flatten = (text, flatMark) => {
  const temp = text.replace(/\s+/g, ' ');
  if (temp.length <= flatMark) text = temp.replace(/;\s*}/g, ' }');
  return text;
};

const lambdafy = (text, pretty) => {
  if (!THIS_REG.test(text)) text = pretty ? text.replace(LAMB_REG, (_, name, args, body) => nameDye(name) + enumChars.SP + bracket.parenth(argsDye(args)) + enumChars.SP + arrowDye('=>') + bodyDye(body)) : text.replace(LAMB_REG, (_, name, args, body) => name + enumChars.SP + bracket.parenth(args) + enumChars.SP + '=>' + body);
  return text.replace(FUNC_INI, '').trim();
};

const abbrev = (text, abbrMark, func) => {
  if (lange.lange(text) > abbrMark) return funcName(func);
  return text;
};

const prettify = (text, pretty) => {
  if (pretty) return text.replace(PresetDye);
  return text;
};

const decofun = function (func) {
  let text;
  const {
    pr,
    fw,
    aw
  } = this;
  text = funcToLined(func);
  text = flatten(text, fw);
  text = lambdafy(text, pr);
  text = abbrev(text, aw, func);
  return prettify(text, pr);
};

const FUNC_REG = /\((.*?)\)\s+\{/s;
const LAMB_REG$1 = /\(?(.*?)\)?\s+=>/s;
const WORD_REG = /\w+/g;

const words = phrase => {
  let ms,
      wd,
      ve = [];

  while ((ms = WORD_REG.exec(phrase)) && ([wd] = ms)) ve.push(wd);

  return ve;
};

const argnames = fn => {
  const text = fn.toString();
  let ms, ph;
  if ((ms = FUNC_REG.exec(text)) && ([, ph] = ms)) return words(ph);
  if ((ms = LAMB_REG$1.exec(text)) && ([, ph] = ms)) return words(ph);
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


const decoFunc = (func, p = DECOFUNC_CONFIG) => decofun.call(parseConfig(p), func);
/**
 * @param {Object} p
 * @param {boolean} [p.pretty=true]
 * @param {number} [p.flatMark=160]
 * @param {number} [p.abbrMark=192]
 * @returns {Function}
 */

const DecoFunc = (p = DECOFUNC_CONFIG) => decofun.bind(parseConfig(p));

exports.DECOFUN_CONFIG = DECOFUN_CONFIG;
exports.DecoFunc = DecoFunc;
exports.argnames = argnames;
exports.decoFunc = decoFunc;
exports.decofun = decofun;
exports.funcName = funcName;
