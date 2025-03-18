import { parenth } from '@texting/bracket';
import { SP } from '@texting/enum-chars';
import { lange } from '@texting/lange';
import { Blue, LightBlue, Lime, Grey, Brown, BlueGrey, Purple, DeepPurple } from '@palett/cards';
import { HexDye } from '@palett/dye';
import { makeReplaceable } from '@texting/translator';

const DECOFUN_CONFIG = { pr: true, fw: 160, aw: 192 };

const DECOFUNC_CONFIG = { pretty: true, flatMark: 160, abbrMark: 192 };

const hexDye = new HexDye();
const nameDye = hexDye.make(Blue.lighten_2);
const argsDye = hexDye.make(LightBlue.accent_2);
const bodyDye = hexDye.make(LightBlue.lighten_3);
const arrowDye = hexDye.make(Lime.lighten_1);

const PresetDye = makeReplaceable([
  [ /function/gi, hexDye.render(Grey.base, 'function') ],
  [ /return/gi, hexDye.render(Brown.lighten_3, 'return') ],
  [ /\bthis\b/gi, hexDye.make(BlueGrey.accent_2) ],
  [ /\b(if|else|while|do|switch|for)\b/gi, hexDye.make(Purple.lighten_3) ],
  [ /\b(var|let|const)\b/gi, hexDye.make(DeepPurple.lighten_3) ],
]);

const funcName = func => `[fn:(${func?.name ?? '<anonym>'})]`;

const FUNCTION_BODY = /function\s*(\w*)\s*\(([\w\s,]+)\)\s*\{\s*return(.+);?\s*\}/gs;
const THIS_REG = /\bthis\b/;
const FUNCTION_INITIAL = /^function/;
const LINE_FEEDS = /\n\s*(\n\s*)/g;

const funcToLined = func => {
  return func.toString().replace(LINE_FEEDS, (_, p1) => p1)
};

const flatten = (text, flatWd) => {
  const temp = text.replace(/\s+/g, ' ');
  if (temp.length <= flatWd) text = temp.replace(/;\s*}/g, ' }');
  return text
};

const toLambda = (text, pretty, defaultName = 'anonym') => {
  if (!THIS_REG.test(text))
    text = pretty
      ? text.replace(FUNCTION_BODY, (_, name, args, body) =>
        nameDye(name === 'anonymous' ? defaultName : name) + SP + parenth(argsDye(args.trim())) + SP +
        arrowDye('=>') + bodyDye(body)
      )
      : text.replace(FUNCTION_BODY, (_, name, args, body) =>
        name + SP + parenth(args) + SP +
        '=>' + body
      );
  return text.replace(FUNCTION_INITIAL, '').trim()
};

const abbrev = (text, abbrWd, func) => {
  if (lange(text) > abbrWd) return funcName(func)
  return text
};

const prettify = (text, pretty) => {
  if (pretty) return text.replace(PresetDye)
  return text
};

const FUNC_REG = /\((.*?)\)\s+{/s;
const LAMB_REG = /\(?(.*?)\)?\s+=>/s;

const argnames = (fn) => {
  const text = fn.toString();
  let ms, ph;
  if ((ms = FUNC_REG.exec(text)) && ([, ph] = ms)) return ph.match(/\w+/g)
  if ((ms = LAMB_REG.exec(text)) && ([, ph] = ms)) return ph.match(/\w+/g)
  return []
};

/**
 * @param {Function} func
 * @param {Object} conf
 * @param {boolean} [conf.pretty=true]
 * @param {number} [conf.flatWd=160]
 * @param {number} [conf.abbrWd=192]
 * @returns {string}
 */
function decoFunc(func, conf) {
  conf = conf ?? this ?? {};
  const pretty = conf.pretty ?? true;
  const flatWd = conf.flatWd ?? 160;
  const abbrWd = conf.abbrWd ?? 192;
  let text;
  text = funcToLined(func);
  text = flatten(text, flatWd);
  text = toLambda(text, pretty, func?.name);
  text = abbrev(text, abbrWd, func);
  return prettify(text, pretty)
}

/**
 * @param {Object} conf
 * @param {boolean} [conf.pretty=true]
 * @param {number} [conf.flatWd=160]
 * @param {number} [conf.abbrWd=192]
 * @returns {(func:Function) => string}
 */
const DecoFunc = (conf = DECOFUNC_CONFIG) => decoFunc.bind(conf);

export { DECOFUNC_CONFIG, DECOFUN_CONFIG, DecoFunc, decoFunc as _decoFunc, argnames, decoFunc, funcName };
