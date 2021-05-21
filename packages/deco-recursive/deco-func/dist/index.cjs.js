'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var bracket = require('@spare/bracket');
var enumChars = require('@spare/enum-chars');
var lange = require('@spare/lange');
var cards = require('@palett/cards');
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

var _ref, _function, _return;
const nameDye = dye.Dye.hex(cards.Blue.lighten_2);
const argsDye = dye.Dye.hex(cards.LightBlue.accent_2);
const bodyDye = dye.Dye.hex(cards.LightBlue.lighten_3);
const arrowDye = dye.Dye.hex(cards.Lime.lighten_1);
const PresetDye = (_ref = [[/function/gi, (_function = 'function', dye.Dye.hex(cards.Grey.base)(_function))], [/return/gi, (_return = 'return', dye.Dye.hex(cards.Brown.lighten_3)(_return))], [/\bthis\b/gi, dye.Dye.hex(cards.BlueGrey.accent_2)], [/\b(if|else|while|do|switch|for)\b/gi, dye.Dye.hex(cards.Purple.lighten_3)], [/\b(var|let|const)\b/gi, dye.Dye.hex(cards.DeepPurple.lighten_3)]], translator.makeReplaceable(_ref));

const funcName = func => `[fn:(${(func == null ? void 0 : func.name) ?? '<anonym>'})]`;

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
  if (!THIS_REG.test(text)) text = pretty ? text.replace(FUNCTION_BODY, (_, name, args, body) => nameDye(name === 'anonymous' ? defaultName : name) + enumChars.SP + bracket.parenth(argsDye(args.trim())) + enumChars.SP + arrowDye('=>') + bodyDye(body)) : text.replace(FUNCTION_BODY, (_, name, args, body) => name + enumChars.SP + bracket.parenth(args) + enumChars.SP + '=>' + body);
  return text.replace(FUNCTION_INITIAL, '').trim();
};

const abbrev = (text, abbrMark, func) => {
  if (lange.lange(text) > abbrMark) return funcName(func);
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
  text = lambdafy(text, pr, func == null ? void 0 : func.name);
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
  p.pr = p.pretty ?? p.pr ?? true;
  p.fw = p.flatMark ?? p.fw ?? 160;
  p.aw = p.abbrMark ?? p.aw ?? 192;
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

exports.DECOFUN_CONFIG = DECOFUN_CONFIG;
exports.DecoFunc = DecoFunc;
exports._decoFunc = _decoFunc;
exports.argnames = argnames;
exports.decoFunc = decoFunc;
exports.funcName = funcName;
