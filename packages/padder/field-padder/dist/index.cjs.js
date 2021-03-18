'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var enumChars = require('@spare/enum-chars');
var padder = require('@texting/padder');
var vectorMapper = require('@vect/vector-mapper');
var enumFullAngleChars = require('@spare/enum-full-angle-chars');
var fullwidth = require('@spare/fullwidth');
var comparer = require('@aryth/comparer');
var lange = require('@spare/lange');
var vectorIndicator = require('@vect/vector-indicator');

const CJK_PUNCS = '\u3000-\u303f';
const CJK_LETTERS = '\u4e00-\u9fbf';
const FULL_CHARS = '\uff00-\uffef'; // full letters + full puncs

const HAN = new RegExp(`[${CJK_PUNCS}${CJK_LETTERS}${FULL_CHARS}]`); // HAN ideographs

const fieldWidth = (name, list, ansi) => {
  const lange$1 = lange.Lange(ansi);
  return comparer.max(lange$1(name), vectorIndicator.maxBy(list, lange$1));
};

/**
 *
 * @param {object} field
 * @param {string} field.name
 * @param {string[]} field.list
 * @param {object} config
 * @param {boolean} [config.ansi]
 * @returns {{name:string,rule:string,list:string[]}}
 */

const fieldPadderFull = (field, config = {}) => {
  const {
    name,
    list
  } = field;
  const toFull = fullwidth.FullWidth(config); // use config.ansi

  const pad = padder.PadFull(config, config);
  const width = fieldWidth(name, list, config.ansi);
  return {
    name: pad(toFull(name), width, true),
    rule: enumFullAngleChars.DA.repeat(width),
    list: vectorMapper.mapper(list, x => pad(toFull(x), width, true))
  };
};

const hasHan = HAN.test.bind(HAN);
/**
 *
 * @param {object} field
 * @param {string} field.name
 * @param {string[]} field.list
 * @param {object} config
 * @param {function[]} [config.dye]
 * @param {boolean} [config.ansi]
 * @param {boolean} [config.fullAngle]
 * @returns {{name:string,rule:string,list:string[]}}
 */

const fieldPadder = (field, config = {}) => {
  if (config.fullAngle && (hasHan(field.name) || field.list.some(hasHan))) return fieldPadderFull(field, config);
  const pad = padder.Pad(config); // use config.ansi

  const width = fieldWidth(field.name, field.list, config.ansi);
  return {
    name: pad(field.name, width),
    rule: enumChars.DA.repeat(width),
    list: vectorMapper.mapper(field.list, x => pad(x, width))
  };
};

exports.fieldPadder = fieldPadder;
exports.fieldWidth = fieldWidth;
