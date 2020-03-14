'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var decoVector = require('@spare/deco-vector');
var decoEntries = require('@spare/deco-entries');
var decoMatrix = require('@spare/deco-matrix');
var decoSamples = require('@spare/deco-samples');
var decoUtil = require('@spare/deco-util');
var tableInit = require('@analys/table-init');
var crostabInit = require('@analys/crostab-init');

class Verse {
  static vector(vector, {
    abstract,
    delimiter = ', ',
    quote = '\''
  } = {}) {
    return decoVector.cosmetics.call({
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
    return decoEntries.cosmetics.call({
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
    const lines = decoEntries.cosmetics.call({
      keyAbstract,
      abstract,
      dash,
      delimiter,
      keyQuote,
      quote,
      bracket: false,
      discrete: true
    }, entries);
    return '{' + decoUtil.joinLines(lines, level) + '}';
  }

  static matrix(matrix, {
    abstract,
    delimiter = ', ',
    quote = '\'',
    level = 0
  } = {}) {
    const lines = decoMatrix.cosmetics.call({
      abstract,
      delimiter,
      quote,
      bracket: true,
      discrete: true
    }, matrix);
    return '[' + decoUtil.joinLines(lines, level) + ']';
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
    } = (_table = table, crostabInit.matchSlice(_table));
    const sideText = Verse.vector(side);
    const headText = Verse.vector(head);
    const rowsText = Verse.matrix(rows, {
      abstract,
      delimiter,
      quote,
      level: level + 1
    });
    const lines = ['side' + ': ' + sideText, 'head' + ': ' + headText, 'rows' + ': ' + rowsText];
    return '{' + decoUtil.joinLines(lines, level) + '}';
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
    } = (_table2 = table, tableInit.matchSlice(_table2));
    const headText = Verse.vector(head);
    const rowsText = Verse.matrix(rows, {
      abstract,
      delimiter,
      quote,
      level: level + 1
    });
    const lines = ['head' + ': ' + headText, 'rows' + ': ' + rowsText];
    return '{' + decoUtil.joinLines(lines, level) + '}';
  }

  static samples(samples, {
    abstract,
    delimiter = ', ',
    quote = '\'',
    level = 0
  } = {}) {
    const lines = decoSamples.cosmetics.call({
      indexes: false,
      abstract,
      delimiter,
      quote,
      bracket: false,
      discrete: true
    }, samples);
    return '[' + decoUtil.joinLines(lines, level) + ']';
  }

}

exports.Verse = Verse;
