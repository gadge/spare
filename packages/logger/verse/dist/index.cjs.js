'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var decoVector = require('@spare/deco-vector');
var decoEntries = require('@spare/deco-entries');
var decoObject = require('@spare/deco-object');
var decoMatrix = require('@spare/deco-matrix');
var decoSamples = require('@spare/deco-samples');
var decoUtil = require('@spare/deco-util');
var tableInit = require('@analys/table-init');
var crostabInit = require('@analys/crostab-init');
var bracket = require('@spare/bracket');
var numLoose = require('@typen/num-loose');
var enumBrackets = require('@spare/enum-brackets');

const keyer = x => /\W/.test(x) || numLoose.isNumeric(x) ? '\'' + x + '\'' : x;

class Verse {
  static vector(vector, {
    abstract,
    delim = ', ',
    quote = '\'',
    level
  } = {}) {
    return decoVector.cosmetics.call({
      abstract,
      delim,
      quote,
      bracket: enumBrackets.BRACKET,
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
    return decoEntries.cosmetics.call({
      keyAbstract,
      abstract,
      dash,
      delim,
      quote,
      bracket: enumBrackets.BRACKET,
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
    return decoObject.cosmetics.call({
      keyAbstract,
      abstract,
      dash,
      delim,
      quote,
      bracket: enumBrackets.BRACE,
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

    const lines = decoMatrix.cosmetics.call({
      abstract,
      delim,
      quote,
      bracket: enumBrackets.BRACKET,
      discrete: true
    }, matrix);
    return _joinLines = decoUtil.joinLines(lines, delim, level), bracket.bracket(_joinLines);
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
    } = (_table = table, crostabInit.matchSlice(_table));
    const sideText = Verse.vector(side);
    const headText = Verse.vector(head);
    const rowsText = Verse.matrix(rows, {
      abstract,
      delim,
      quote,
      level: level + 1
    });
    const lines = ['side' + ': ' + sideText, 'head' + ': ' + headText, 'rows' + ': ' + rowsText];
    return _joinLines2 = decoUtil.joinLines(lines, delim, level), bracket.brace(_joinLines2);
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
    } = (_table2 = table, tableInit.matchSlice(_table2));
    const headText = Verse.vector(head);
    const rowsText = Verse.matrix(rows, {
      abstract,
      delim,
      quote,
      level: level + 1
    });
    const lines = ['head' + ': ' + headText, 'rows' + ': ' + rowsText];
    return _joinLines3 = decoUtil.joinLines(lines, delim, level), bracket.brace(_joinLines3);
  }

  static samples(samples, {
    abstract,
    delim = ', ',
    quote = '\'',
    level = 0
  } = {}) {
    var _joinLines4;

    const lines = decoSamples.cosmetics.call({
      indexes: false,
      abstract,
      delim,
      quote,
      bracket: false,
      discrete: true
    }, samples);
    return _joinLines4 = decoUtil.joinLines(lines, delim, level), bracket.bracket(_joinLines4);
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
    const lines = decoEntries.cosmetics.call({
      keyAbstract,
      abstract,
      dash,
      delim,
      keyQuote,
      quote,
      bracket: false,
      discrete: true
    }, entries);
    return decoUtil.liner(lines, {
      bracket: enumBrackets.BRACE,
      delim,
      level
    });
  }

}

exports.Verse = Verse;
