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

class Verse {
  static vector(vector, {
    abstract,
    delim = ', ',
    quote = '\'',
    level
  } = {}) {
    return cosmetics.call({
      abstract,
      delim,
      quote,
      bracket: BRACKET,
      level
    }, vector);
  }

  static entries(entries, {
    keyAbstract = keyer,
    abstract,
    dash = ', ',
    delim = ',\n',
    quote = '\'',
    level
  } = {}) {
    return cosmetics$1.call({
      keyAbstract,
      abstract,
      dash,
      delim,
      quote,
      bracket: BRACKET,
      level
    }, entries);
  }

  static object(o, {
    keyAbstract = keyer,
    abstract,
    dash = ': ',
    delim = ',\n',
    quote = '\'',
    level
  } = {}) {
    return cosmetics$2.call({
      keyAbstract,
      abstract,
      dash,
      delim,
      quote,
      bracket: BRACE,
      level
    }, o);
  }

  static matrix(matrix, {
    abstract,
    delim = ', ',
    quote = '\'',
    level = 0
  } = {}) {
    var _joinLines;

    const lines = cosmetics$3.call({
      abstract,
      delim,
      quote,
      bracket: BRACKET,
      discrete: true
    }, matrix);
    return _joinLines = joinLines(lines, level), bracket(_joinLines);
  }

  static crostab(table, {
    abstract,
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
    const sideText = Verse.vector(side);
    const headText = Verse.vector(head);
    const rowsText = Verse.matrix(rows, {
      abstract,
      delim,
      quote,
      level: level + 1
    });
    const lines = ['side' + ': ' + sideText, 'head' + ': ' + headText, 'rows' + ': ' + rowsText];
    return _joinLines2 = joinLines(lines, level), brace(_joinLines2);
  }

  static table(table, {
    abstract,
    delim = ', ',
    quote = '\'',
    level = 0
  } = {}) {
    var _table2, _joinLines3;

    const {
      head,
      rows
    } = (_table2 = table, matchSlice$1(_table2));
    const headText = Verse.vector(head);
    const rowsText = Verse.matrix(rows, {
      abstract,
      delim,
      quote,
      level: level + 1
    });
    const lines = ['head' + ': ' + headText, 'rows' + ': ' + rowsText];
    return _joinLines3 = joinLines(lines, level), brace(_joinLines3);
  }

  static samples(samples, {
    abstract,
    delim = ', ',
    quote = '\'',
    level = 0
  } = {}) {
    var _joinLines4;

    const lines = cosmetics$4.call({
      indexes: false,
      abstract,
      delim,
      quote,
      bracket: false,
      discrete: true
    }, samples);
    return _joinLines4 = joinLines(lines, level), bracket(_joinLines4);
  }

  static entriesAsObject(entries, {
    keyAbstract = keyer,
    abstract,
    dash = ': ',
    delim = ',\n',
    keyQuote = null,
    quote = '\'',
    level = 0
  } = {}) {
    const lines = cosmetics$1.call({
      keyAbstract,
      abstract,
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
