'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var regexCharset = require('@spare/regex-charset');

/**
 *
 * @param {string} tx
 * @returns {number}
 */

const lange = tx => tx.replace(regexCharset.ANSI_G, '').replace(regexCharset.ASTRAL_G, '_').length;
const Lange = ansi => ansi ? lange : x => x.length;

const clearAnsi = tx => tx.replace(regexCharset.ANSI_G, '');

const clearAstral = tx => tx.replace(regexCharset.ASTRAL_G, '_');

const hasAnsi = tx => regexCharset.ANSI.test(tx);

const hasAstral = tx => regexCharset.ASTRAL.test(tx);

exports.Lange = Lange;
exports.clearAnsi = clearAnsi;
exports.clearAstral = clearAstral;
exports.hasAnsi = hasAnsi;
exports.hasAstral = hasAstral;
exports.lange = lange;
