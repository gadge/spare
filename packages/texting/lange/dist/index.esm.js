import { ANSI_G, ASTRAL_G, ANSI, ASTRAL } from '@spare/regex-charset';

/**
 *
 * @param {string} tx
 * @returns {number}
 */

const lange = tx => tx.replace(ANSI_G, '').replace(ASTRAL_G, '_').length;
const Lange = ansi => ansi ? lange : x => x.length;

const clearAnsi = tx => tx.replace(ANSI_G, '');

const clearAstral = tx => tx.replace(ASTRAL_G, '_');

const hasAnsi = tx => ANSI.test(tx);

const hasAstral = tx => ASTRAL.test(tx);

export { Lange, clearAnsi, clearAstral, hasAnsi, hasAstral, lange };
