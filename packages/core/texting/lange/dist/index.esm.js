const ansi = ['[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:[a-zA-Z\\d]*(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)', '(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))'];
const astral = ['[\uD800-\uDBFF][\uDC00-\uDFFF]'];
const chinese = ['[\u4e00-\u9fa5]', '[\uff00-\uffff]'];

const ansiReg = new RegExp(ansi.join('|'), 'g');
const astralReg = new RegExp(astral.join('|'), 'g');

/**
 *
 * @param {string} tx
 * @returns {number}
 */

const lange = tx => tx.replace(ansiReg, '').replace(astralReg, '_').length;
const Lange = ansi => ansi ? lange : x => x.length;

const ANSI = new RegExp(ansi.join('|'));
const HAN = new RegExp(chinese.join('|'));

const hasAnsi = tx => ANSI.test(tx);

const hasChn = tx => HAN.test(tx);

export { Lange, hasAnsi, hasChn, lange };
