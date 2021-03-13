'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var enumChars = require('@spare/enum-chars');
var padder = require('@spare/padder');
var vectorMapper = require('@vect/vector-mapper');
var enumFullAngleChars = require('@spare/enum-full-angle-chars');
var fullwidth = require('@spare/fullwidth');
var comparer = require('@aryth/comparer');
var lange = require('@spare/lange');
var vectorIndicator = require('@vect/vector-indicator');

const HAN = /[\u4e00-\u9fa5]|[\uff00-\uffff]/; // HAN ideographs

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

const fieldPadderFullWidth = (field, config = {}) => {
  const {
    name,
    list
  } = field;
  const toFull = fullwidth.FullWidth(config); // use config.ansi

  const configPad = {
    ansi: config.ansi,
    fill: enumFullAngleChars.SP
  },
        lpad = padder.LPad(configPad),
        rpad = padder.RPad(configPad);
  const width = fieldWidth(name, list, config.ansi);
  return {
    name: rpad(toFull(name), width),
    rule: enumFullAngleChars.DA.repeat(width),
    list: vectorMapper.mapper(list, x => lpad(toFull(x), width))
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
  const {
    name,
    list
  } = field;
  if (config.fullAngle && (hasHan(name) || list.some(hasHan))) return fieldPadderFullWidth(field, config);
  const lpad = padder.LPad(config),
        // use config.ansi
  rpad = padder.RPad(config); // use config.ansi

  const width = fieldWidth(name, list, config.ansi);
  return {
    name: rpad(name, width),
    rule: enumChars.DA.repeat(width),
    list: vectorMapper.mapper(list, x => lpad(x, width))
  };
};

exports.fieldPadder = fieldPadder;
exports.fieldWidth = fieldWidth;
