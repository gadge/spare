import { FRESH, OCEAN, PLANET, JUNGLE, SUBTLE } from '@palett/presets';
import { NONE, BRK, BRC } from '@spare/enum-brackets';
import { LF, CO, SP } from '@spare/enum-chars';
import { ROWWISE, POINTWISE, COLUMNWISE } from '@vect/enum-matrix-directions';

/***
 * @param {Object} p
 * @param {Function} [p.utils]
 * @param {Function} [p.read]
 * @param {Object} [p.preset=FRESH]
 * @param {Object} [p.stringPreset=OCEAN]
 * @param {number} [p.head]
 * @param {number} [p.tail]
 * @param {string} [p.keyQuote]
 * @param {string} [p.quote]
 * @param {boolean} [p.discrete]
 * @param {string} [p.dash=' > ']
 * @param {string} [p.delim='\n']
 * @param {number} [p.bracket=BRK]
 * @param {boolean} [p.ansi]
 * @param {number} [p.level=0]
 * @returns {Object}
 */

const presetEntries = p => {
  p.preset = p.preset || FRESH;
  p.stringPreset = p.stringPreset || OCEAN;
  p.dash = p.dash || ' > ';
  p.delim = p.delim || LF;
  p.bracket = !p.bracket ? NONE : BRK;
  return p;
};

/**
 *
 * @param {Object} p
 * @param {Function} [p.utils]
 * @param {Function} [p.read]
 * @param {Object} [p.preset=FRESH]
 * @param {Object} [p.stringPreset=PLANET]
 * @param {number} [p.head]
 * @param {number} [p.tail]
 * @param {boolean} [p.discrete]
 * @param {number} [p.bracket=BRC]
 * @param {string} [p.dash=': ']
 * @param {string} [p.delim=',\n']
 * @param {string} [p.keyQuote]
 * @param {string} [p.quote]
 * @param {boolean} [p.ansi]
 * @param {number} [p.level]
 * @returns {Object}
 */

const presetObject = p => {
  p.preset = p.preset || FRESH;
  p.stringPreset = p.stringPreset || PLANET;
  p.dash = p.dash || ': ';
  p.delim = p.delim || CO + LF;
  p.bracket = !p.bracket ? NONE : BRC;
  return p;
};

/***
 *
 * @param {Object} p
 * @param {boolean} [p.indexed=true]
 * @param {Function} [p.read]
 * @param {Object} [p.preset=FRESH]
 * @param {Object} [p.stringPreset=JUNGLE]
 * @param {number} [p.head]
 * @param {number} [p.tail]
 * @param {boolean} [p.discrete]
 * @param {number} [p.bracket=BRK] - BRK = 1
 * @param {string} [p.dash=') ']
 * @param {string} [p.delim=',\n']
 * @param {string} [p.quote]
 * @param {boolean} [p.ansi]
 * @param {number} [p.level=0]
 * @returns {Object}
 */

const presetVector = p => {
  var _p$indexed;

  p.indexed = (_p$indexed = p.indexed) !== null && _p$indexed !== void 0 ? _p$indexed : true;
  p.preset = p.preset || FRESH;
  p.stringPreset = p.stringPreset || JUNGLE;
  p.dash = p.dash || ') ';
  p.delim = p.delim || CO + LF;
  p.bracket = !p.bracket ? NONE : BRK;
  return p;
};

/***
 *
 * @param {Object} p
 * @param {number} [p.direct=ROWWISE]
 * @param {Function} [p.read]
 * @param {Object} [p.preset=FRESH]
 * @param {Object} [p.stringPreset=OCEAN]
 * @param {number} [p.top]
 * @param {number} [p.bottom]
 * @param {number} [p.left]
 * @param {number} [p.right]
 * @param {boolean} [p.discrete]
 * @param {number} [p.bracket=BRK]
 * @param {string} [p.delim=', ']
 * @param {string} [p.quote]
 * @param {boolean} [p.ansi]
 * @param {number} [p.level=0]
 * @returns {Object}
 */

const presetMatrix = p => {
  p.direct = p.direct || ROWWISE;
  p.preset = p.preset || FRESH;
  p.stringPreset = p.stringPreset || OCEAN;
  p.delim = p.delim || CO + SP;
  p.bracket = !p.bracket ? NONE : BRK;
  return p;
};

/**
 * @param {Object} p
 * @param {Function} [p.read]
 * @param {Function} [p.headRead]
 * @param {Function} [p.sideRead]
 * @param {Object} [p.preset=FRESH]
 * @param {Object} [p.stringPreset=JUNGLE]
 * @param {Object} [p.labelPreset=SUBTLE]
 * @param {number} [p.direct=POINTWISE]
 * @param {number} [p.top]
 * @param {number} [p.bottom]
 * @param {number} [p.left]
 * @param {number} [p.right]
 * @param {string} [p.delim='\n']
 * @param {string} [p.quote] - currently not functional, keeps for future fix
 * @param {number} [p.bracket] - currently not functional, keeps for future fix
 * @param {boolean} [p.ansi=true]
 * @param {boolean} [p.fullAngle]
 * @returns {Object}
 */

const presetCrostab = p => {
  var _p$direct, _p$ansi;

  p.direct = (_p$direct = p.direct) !== null && _p$direct !== void 0 ? _p$direct : POINTWISE;
  p.preset = p.preset || FRESH;
  p.stringPreset = p.stringPreset || JUNGLE;
  p.labelPreset = p.labelPreset || SUBTLE;
  p.delim = p.delim || LF;
  p.ansi = (_p$ansi = p.ansi) !== null && _p$ansi !== void 0 ? _p$ansi : true;
  return p;
};

/***
 *
 * @param {Object} p
 * @param {Function} [p.read]
 * @param {Function} [p.headRead]
 * @param {Object} [p.preset=FRESH]
 * @param {Object} [p.stringPreset=JUNGLE]
 * @param {Object} [p.labelPreset=SUBTLE]
 * @param {number} [p.direct=COLUMNWISE]
 * @param {number} [p.top]
 * @param {number} [p.bottom]
 * @param {number} [p.left]
 * @param {number} [p.right]
 * @param {boolean} [p.discrete]
 * @param {boolean} [p.bracket] - currently not functional, keeps for future fix
 * @param {string} [p.delim=',\n']
 * @param {string} [p.quote] - currently not functional, keeps for future fix
 * @param {boolean} [p.ansi=true]
 * @param {boolean} [p.fullAngle]
 * @param {number} [p.level=0]
 * @returns {Object}
 */

const presetTable = p => {
  var _p$direct, _p$ansi;

  p.direct = (_p$direct = p.direct) !== null && _p$direct !== void 0 ? _p$direct : COLUMNWISE;
  p.preset = p.preset || FRESH;
  p.stringPreset = p.stringPreset || JUNGLE;
  p.labelPreset = p.labelPreset || SUBTLE;
  p.delim = p.delim || LF;
  p.ansi = (_p$ansi = p.ansi) !== null && _p$ansi !== void 0 ? _p$ansi : true;
  return p;
};

/**
 *
 * @param {Object} [p]
 * @param {*[]} [p.fields]
 * @param {boolean} [p.indexed=true]
 * @param {Function} [p.read]
 * @param {Object} [p.preset]
 * @param {Object} [p.keyPreset]
 * @param {Object} [p.stringPreset]
 * @param {number} [p.direct=COLUMNWISE]
 * @param {number} [p.top]
 * @param {number} [p.left]
 * @param {number} [p.bottom]
 * @param {number} [p.right]
 * @param {boolean} [p.discrete]
 * @param {number} [p.bracket=BRK]
 * @param {string} [p.delim=', ']
 * @param {string} [p.quote]
 * @param {boolean} [p.ansi=false]
 * @param {number} [p.level=0]
 * @returns {Object}
 */

const presetSamples = p => {
  p.indexed = p.indexed || true;
  p.direct = p.direct || COLUMNWISE;
  p.preset = p.preset || FRESH;
  p.keyPreset = p.keyPreset || SUBTLE;
  p.stringPreset = p.stringPreset || JUNGLE;
  p.delim = p.delim || CO + SP;
  p.bracket = !p.bracket ? NONE : BRK;
  return p;
};

export { presetCrostab, presetEntries, presetMatrix, presetObject, presetSamples, presetTable, presetVector };
