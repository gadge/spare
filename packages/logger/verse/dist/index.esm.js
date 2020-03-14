import { cosmetics } from '@spare/deco-vector';
import { cosmetics as cosmetics$1 } from '@spare/deco-entries';
import { cosmetics as cosmetics$2 } from '@spare/deco-matrix';
import { cosmetics as cosmetics$3 } from '@spare/deco-samples';
import { joinLines } from '@spare/deco-util';
import { matchSlice as matchSlice$1 } from '@analys/table-init';
import { matchSlice } from '@analys/crostab-init';

class Verse {
  static vector(vector, {
    abstract,
    delimiter = ', ',
    quote = '\''
  } = {}) {
    return cosmetics.call({
      abstract,
      delimiter,
      quote,
      bracket: true
    }, vector);
  }

  static entries(entries, {
    keyAbstract,
    abstract,
    dash = ', ',
    delimiter = ',\n',
    quote = '\''
  } = {}) {
    return cosmetics$1.call({
      keyAbstract,
      abstract,
      dash,
      delimiter,
      quote,
      bracket: true
    }, entries);
  }

  static entriesAsObject(entries, {
    keyAbstract,
    abstract,
    dash = ': ',
    delimiter = ',\n',
    keyQuote = null,
    quote = '\'',
    level = 0
  } = {}) {
    const lines = cosmetics$1.call({
      keyAbstract,
      abstract,
      dash,
      delimiter,
      keyQuote,
      quote,
      bracket: false,
      discrete: true
    }, entries);
    return '{' + joinLines(lines, level) + '}';
  }

  static matrix(matrix, {
    abstract,
    delimiter = ', ',
    quote = '\'',
    level = 0
  } = {}) {
    const lines = cosmetics$2.call({
      abstract,
      delimiter,
      quote,
      bracket: true,
      discrete: true
    }, matrix);
    return '[' + joinLines(lines, level) + ']';
  }

  static crostab(table, {
    abstract,
    delimiter = ', ',
    quote = '\'',
    level = 0
  } = {}) {
    var _table;

    const {
      side,
      head,
      rows
    } = (_table = table, matchSlice(_table));
    const sideText = Verse.vector(side);
    const headText = Verse.vector(head);
    const rowsText = Verse.matrix(rows, {
      abstract,
      delimiter,
      quote,
      level: level + 1
    });
    const lines = ['side' + ': ' + sideText, 'head' + ': ' + headText, 'rows' + ': ' + rowsText];
    return '{' + joinLines(lines, level) + '}';
  }

  static table(table, {
    abstract,
    delimiter = ', ',
    quote = '\'',
    level = 0
  } = {}) {
    var _table2;

    const {
      head,
      rows
    } = (_table2 = table, matchSlice$1(_table2));
    const headText = Verse.vector(head);
    const rowsText = Verse.matrix(rows, {
      abstract,
      delimiter,
      quote,
      level: level + 1
    });
    const lines = ['head' + ': ' + headText, 'rows' + ': ' + rowsText];
    return '{' + joinLines(lines, level) + '}';
  }

  static samples(samples, {
    abstract,
    delimiter = ', ',
    quote = '\'',
    level = 0
  } = {}) {
    const lines = cosmetics$3.call({
      indexes: false,
      abstract,
      delimiter,
      quote,
      bracket: false,
      discrete: true
    }, samples);
    return '[' + joinLines(lines, level) + ']';
  }

}

export { Verse };
