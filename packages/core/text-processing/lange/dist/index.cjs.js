'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const ansi = ['[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:[a-zA-Z\\d]*(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)', '(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))'];
const astral = ['[\uD800-\uDBFF][\uDC00-\uDFFF]'];
const chinese = ['[\u4e00-\u9fa5]', '[\uff00-\uffff]'];

const ansiReg = new RegExp(ansi.join('|'), 'g');
const astralReg = new RegExp(astral.join('|'), 'g');
const chineseReg = new RegExp(chinese.join('|'), 'g');

/**
 *
 * @param {string} tx
 * @returns {number}
 */

const lange = tx => tx.replace(ansiReg, '').replace(astralReg, '_').length;
const Lange = ansi => ansi ? lange : x => x.length;

const hasAnsi = tx => ansiReg.test(tx);

const hasChn = tx => chineseReg.test(tx);

exports.Lange = Lange;
exports.hasAnsi = hasAnsi;
exports.hasChn = hasChn;
exports.lange = lange;
