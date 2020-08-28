const ansi = ['[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:[a-zA-Z\\d]*(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)', '(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))'];
const astral = ['[\uD800-\uDBFF][\uDC00-\uDFFF]'];
const han = ['[\u4e00-\u9fa5]', '[\uff00-\uffff]'];

const ANSI = new RegExp(ansi.join('|'), 'g');
const ASTRAL = new RegExp(astral.join('|'), 'g');

/**
 *
 * @param {string} tx
 * @returns {number}
 */

const lange = tx => tx.replace(ANSI, '').replace(ASTRAL, '_').length;
const Lange = ansi => ansi ? lange : x => x.length;

const ANSI$1 = new RegExp(ansi.join('|'));
const HAN = new RegExp(han.join('|'));

const hasAnsi = tx => ANSI$1.test(tx);

const hasHan = tx => HAN.test(tx);

export { Lange, hasAnsi, hasHan, lange };
