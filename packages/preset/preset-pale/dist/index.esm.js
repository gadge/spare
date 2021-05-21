import { decoPale } from '@spare/deco-pale';
import { BRK, BRC } from '@spare/enum-brackets';
import { LF, RTSP, COLF, COSP } from '@spare/enum-chars';

/***
 * @param {Object} p
 *
 * @param {boolean} [p.discrete]
 * @param {string} [p.dash=' > ']
 * @param {string} [p.delim='\n']
 * @param {boolean|number} [p.bracket=true]
 *
 * @param {Function} [p.keyRead]
 * @param {Function} [p.read=decoPale]
 *
 * @param {number} [p.head]
 * @param {number} [p.tail]
 *
 * @param {boolean} [p.ansi=true]
 * @param {number} [p.level=0]
 *
 * @returns {Object}
 */

const presetEntries = p => {
  p.dash = p.dash ?? ' > ';
  p.delim = p.delim ?? LF;
  p.bracket = p.bracket ?? BRK;
  p.read = p.read ?? decoPale;
  p.ansi = p.ansi ?? true;
  return p;
};

/**
 *
 * @param {Object} p
 *
 * @param {boolean} [p.discrete]
 * @param {string} [p.dash=': ']
 * @param {string} [p.delim=',\n']
 * @param {boolean|number} [p.bracket=true]
 *
 * @param {Function} [p.keyRead]
 * @param {Function} [p.read=decoPale]
 *
 * @param {number} [p.head]
 * @param {number} [p.tail]
 *
 * @param {boolean} [p.ansi=true]
 * @param {number} [p.level]
 *
 * @returns {Object}
 */

const presetObject = p => {
  p.dash = p.dash ?? RTSP;
  p.delim = p.delim ?? COLF;
  p.bracket = p.bracket ?? BRC;
  p.read = p.read ?? decoPale;
  p.ansi = p.ansi ?? true;
  return p;
};

/***
 *
 * @param {Object} p
 *
 * @param {boolean} [p.discrete]
 * @param {string} [p.dash=') ']
 * @param {string} [p.delim=',\n']
 * @param {boolean|number} [p.bracket=true] - BRK = 1
 *
 * @param {boolean} [p.indexed=true]
 * @param {Function} [p.read=decoPale]
 *
 * @param {number} [p.head]
 * @param {number} [p.tail]
 *
 * @param {boolean} [p.ansi=true]
 * @param {number} [p.level=0]
 *
 * @returns {Object}
 */

const presetVector = p => {
  p.dash = p.dash ?? ') ';
  p.delim = p.delim ?? COLF;
  p.bracket = p.bracket ?? BRK;
  p.indexed = p.indexed ?? false;
  p.read = p.read ?? decoPale;
  p.ansi = p.ansi ?? true;
  return p;
};

/***
 *
 * @param {Object} p
 *
 * @param {boolean} [p.discrete]
 * @param {string} [p.delim=', ']
 * @param {boolean|number} [p.bracket=true]
 *
 * @param {Function} [p.read=decoPale]
 *
 * @param {number} [p.top]
 * @param {number} [p.bottom]
 * @param {number} [p.left]
 * @param {number} [p.right]
 *
 * @param {boolean} [p.ansi=true]
 * @param {number} [p.level=0]
 *
 * @returns {Object}
 */

const presetMatrix = p => {
  p.delim = p.delim ?? COSP;
  p.bracket = p.bracket ?? BRK;
  p.read = p.read ?? decoPale;
  p.ansi = p.ansi ?? true;
  return p;
};

/**
 * @param {Object} p
 *
 * @param {boolean} [p.discrete]
 * @param {string} [p.delim='\n']
 * @param {number} [p.bracket=NONE] - currently not functional, keeps for future fix
 *
 * @param {Function} [p.read=decoPale]
 * @param {Function} [p.headRead]
 * @param {Function} [p.sideRead]
 *
 * @param {number} [p.top]
 * @param {number} [p.bottom]
 * @param {number} [p.left]
 * @param {number} [p.right]
 *
 * @param {boolean} [p.ansi=true]
 * @param {boolean} [p.fullAngle]
 * @param {number} [p.level=0]
 *
 * @returns {Object}
 */

const presetCrostab = p => {
  p.delim = p.delim ?? LF;
  p.read = p.read ?? decoPale;
  p.ansi = p.ansi ?? true;
  return p;
};

/***
 *
 * @param {Object} p
 *
 * @param {boolean} [p.discrete]
 * @param {string} [p.delim=',\n']
 * @param {boolean|number} [p.bracket] - currently not functional, keeps for future fix
 *
 * @param {Function} [p.read=decoPale]
 * @param {Function} [p.headRead]
 * @param {number} [p.direct=COLUMNWISE]
 *
 * @param {number} [p.top]
 * @param {number} [p.bottom]
 * @param {number} [p.left]
 * @param {number} [p.right]
 * @param {boolean} [p.ansi=true]
 * @param {boolean} [p.fullAngle]
 * @param {number} [p.level=0]
 *
 * @returns {Object}
 */

const presetTable = p => {
  p.delim = p.delim ?? LF;
  p.read = p.read ?? decoPale;
  p.ansi = p.ansi ?? true;
  return p;
};

/**
 *
 * @param {Object} [p]
 *
 * @param {boolean} [p.discrete]
 * @param {string} [p.delim=', ']
 * @param {boolean|number} [p.bracket=true]
 *
 * @param {*[]} [p.fields]
 * @param {boolean} [p.indexed=true]
 * @param {Function} [p.keyRead]
 * @param {Function} [p.read=decoPale]
 *
 * @param {number} [p.top]
 * @param {number} [p.left]
 * @param {number} [p.bottom]
 * @param {number} [p.right]
 *
 * @param {boolean} [p.ansi=false]
 * @param {number} [p.level=0]
 *
 * @returns {Object}
 */

const presetSamples = p => {
  p.delim = p.delim ?? COSP;
  p.bracket = p.bracket ?? BRK;
  p.indexed = p.indexed ?? true;
  p.read = p.read ?? decoPale;
  p.ansi = p.ansi ?? true;
  return p;
};

export { presetCrostab, presetEntries, presetMatrix, presetObject, presetSamples, presetTable, presetVector };
