import { ANSI_G, ASTRAL_G, ANSI, ASTRAL } from '@spare/regex-charset';

const clearAnsi = tx => tx.replace(ANSI_G, '');

const clearAstral = tx => tx.replace(ASTRAL_G, '_');

const hasAnsi = tx => ANSI.test(tx);

const hasAstral = tx => ASTRAL.test(tx);

export { clearAnsi, clearAstral, hasAnsi, hasAstral };
