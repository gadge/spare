import { DecoConfig } from '@spare/deco-config';
import { DUAL_PRESET_COLLECTION } from '@spare/preset-deco';
import { decoFlat } from '@spare/deco-flat';
import { BRC } from '@spare/enum-brackets';
import { RTSP, COLF } from '@spare/enum-chars';
import { _decoEntries } from '@spare/deco-entries';
import { liner } from '@spare/liner';

const CONFIG = {
  dash: RTSP,
  delim: COLF,
  bracket: BRC,
  read: decoFlat,
  ansi: true
};

const LOCAL_OPTION = {
  discrete: true,
  bracket: undefined
};
const _decoObject = function (o = {}) {
  const entriesOptions = Object.assign({}, this, LOCAL_OPTION);

  const lines = _decoEntries.call(entriesOptions, Object.entries(o));

  return liner(lines, this);
};

/**
 * @typedef {{[max]:string|*[],[min]:string|*[],[na]:string|*[]}} Preset
 */

/**
 *
 * @param {Object} p
 *
 * @param {boolean} [p.discrete]
 * @param {string} [p.dash=': ']
 * @param {string} [p.delim=',\n']
 *
 *
 * @param {boolean|number} [p.bracket=true]
 *
 * @param {Function} [p.keyRead]
 * @param {Function} [p.read]
 *
 * @param {Object[]} [p.presets=[FRESH,PLANET]]
 *
 * @param {number} [p.head]
 * @param {number} [p.tail]
 *
 * @param {boolean} [p.ansi]
 * @param {number} [p.level]
 *
 * @returns {Function}
 */

const Deco = (p = {}) => _decoObject.bind(DecoConfig.parse(p, CONFIG, DUAL_PRESET_COLLECTION));
/***
 *
 * @param {Object} o
 * @param {Object} p
 *
 * @param {boolean} [p.discrete]
 * @param {string} [p.dash=': ']
 * @param {string} [p.delim=',\n']
 *
 *
 * @param {boolean|number} [p.bracket=true]
 *
 * @param {Function} [p.keyRead]
 * @param {Function} [p.read]
 *
 * @param {Object[]|*} [p.presets=[FRESH,PLANET]]
 *
 * @param {number} [p.head]
 * @param {number} [p.tail]
 *
 * @param {boolean} [p.ansi]
 * @param {number} [p.level]
 *
 * @returns {string}
 */

const deco = (o, p = {}) => _decoObject.call(DecoConfig.parse(p, CONFIG, DUAL_PRESET_COLLECTION), o);

export { Deco, _decoObject, deco };
