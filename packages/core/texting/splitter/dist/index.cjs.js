'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var regexPhrasing = require('@spare/regex-phrasing');
var ripper = require('@spare/ripper');

/**
 * @deprecated use @spare/ripper instead
 */
const splitter = (text, reg) => {
  let ms,
      l = 0,
      r = 0,
      sp,
      ph;
  const vec = [];

  while ((ms = reg.exec(text)) && ([ph] = ms)) {
    r = ms.index;
    if (sp = text.slice(l, r)) vec.push(sp);
    vec.push(ph);
    l = reg.lastIndex;
  }

  if (l < text.length) vec.push(text.slice(l));
  return vec;
};

/** @type {Function|function(string):string[]} */

const splitLiteral = ripper.ripper.bind(regexPhrasing.LITERAL);

/**
 * Camel/pascal case phrase -> split vector
 * Snake: fox_jumps_over_dog
 * Kebab: fox-jumps-over-dog
 * @param {string} phrase camel/pascal-case phrase
 * @returns {string[]}
 */

function splitCamel(phrase) {
  let ms,
      wd,
      ve = [];
  if ((ms = regexPhrasing.INILOW.exec(phrase)) && ([wd] = ms)) ve.push(wd);

  while ((ms = regexPhrasing.CAPWORD.exec(phrase)) && ([wd] = ms)) ve.push(wd);

  return ve;
}

/**
 * snake or kebab phrase -> split vector
 * @param {string} phrase - dashed phrase
 * @returns {string[]}
 */
const splitSnake = phrase => phrase.split(/\W/g);

exports.splitCamel = splitCamel;
exports.splitLiteral = splitLiteral;
exports.splitSnake = splitSnake;
exports.splitter = splitter;
