import { cosmetics } from '@spare/deco-vector';
import { cosmetics as cosmetics$1 } from '@spare/deco-entries';
import { cosmetics as cosmetics$2 } from '@spare/deco-object';
import { cosmetics as cosmetics$3 } from '@spare/deco-matrix';
import { cosmetics as cosmetics$4 } from '@spare/deco-samples';
import { joinLines, liner } from '@spare/deco-util';
import { matchSlice as matchSlice$1 } from '@analys/table-init';
import { matchSlice } from '@analys/crostab-init';
import { bracket, brace } from '@spare/bracket';
import { isNumeric } from '@typen/num-loose';
import { BRACKET, BRACE } from '@spare/enum-brackets';

const keyer = x => /\W/.test(x) || isNumeric(x) ? '\'' + x + '\'' : x;

const SIDE = 'side',
      HEAD = 'head',
      ROWS = 'rows';
class Verse {
  static vector(vector, {
    read,
    delim = ', ',
    quote = '\'',
    level
  } = {}) {
    return cosmetics.call({
      read,
      delim,
      quote,
      bracket: BRACKET,
      level
    }, vector);
  }

  static entries(entries, {
    keyRead = keyer,
    read,
    dash = ', ',
    delim = ',\n',
    quote = '\'',
    level
  } = {}) {
    return cosmetics$1.call({
      keyRead,
      read,
      dash,
      delim,
      quote,
      bracket: BRACKET,
      level
    }, entries);
  }

  static object(o, {
    keyRead = keyer,
    read,
    dash = ': ',
    delim = ',\n',
    quote = '\'',
    level
  } = {}) {
    return cosmetics$2.call({
      keyRead,
      read,
      dash,
      delim,
      quote,
      bracket: BRACE,
      level
    }, o);
  }

  static matrix(matrix, {
    read,
    delim = ', ',
    quote = '\'',
    level = 0
  } = {}) {
    var _joinLines;

    const lines = cosmetics$3.call({
      read,
      delim,
      quote,
      bracket: BRACKET,
      discrete: true
    }, matrix);
    return _joinLines = joinLines(lines, delim, level), bracket(_joinLines);
  }

  static crostab(table, {
    read,
    delim = ', ',
    quote = '\'',
    level = 0
  } = {}) {
    var _table, _joinLines2;

    const {
      side,
      head,
      rows
    } = (_table = table, matchSlice(_table));
    const sideText = Verse.vector(side, {
      read,
      delim,
      quote,
      level: level + 1
    });
    const headText = Verse.vector(head, {
      read,
      delim,
      quote,
      level: level + 1
    });
    const rowsText = Verse.matrix(rows, {
      read,
      delim,
      quote,
      level: level + 1
    });
    const lines = [SIDE + ': ' + sideText, HEAD + ': ' + headText, ROWS + ': ' + rowsText];
    return _joinLines2 = joinLines(lines, delim, level), brace(_joinLines2);
  }

  static table(table, {
    read,
    delim = ', ',
    quote = '\'',
    level = 0
  } = {}) {
    var _table2, _joinLines3;

    const {
      head,
      rows
    } = (_table2 = table, matchSlice$1(_table2));
    const headText = Verse.vector(head, {
      read,
      delim,
      quote,
      level: level + 1
    });
    const rowsText = Verse.matrix(rows, {
      read,
      delim,
      quote,
      level: level + 1
    });
    const lines = [HEAD + ': ' + headText, ROWS + ': ' + rowsText];
    return _joinLines3 = joinLines(lines, delim, level), brace(_joinLines3);
  }

  static samples(samples, {
    read,
    delim = ', ',
    quote = '\'',
    level = 0
  } = {}) {
    var _joinLines4;

    const lines = cosmetics$4.call({
      indexes: false,
      read,
      delim,
      quote,
      bracket: false,
      discrete: true
    }, samples);
    return _joinLines4 = joinLines(lines, delim, level), bracket(_joinLines4);
  }

  static entriesAsObject(entries, {
    keyRead = keyer,
    read,
    dash = ': ',
    delim = ',\n',
    keyQuote = null,
    quote = '\'',
    level = 0
  } = {}) {
    const lines = cosmetics$1.call({
      keyRead,
      read,
      dash,
      delim,
      keyQuote,
      quote,
      bracket: false,
      discrete: true
    }, entries);
    return liner(lines, {
      bracket: BRACE,
      delim,
      level
    });
  }

}

export { Verse };
