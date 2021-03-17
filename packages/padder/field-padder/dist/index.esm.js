import { DA as DA$1 } from '@spare/enum-chars';
import { LPad, RPad } from '@spare/padder';
import { mapper } from '@vect/vector-mapper';
import { DA, SP } from '@spare/enum-full-angle-chars';
import { FullWidth } from '@spare/fullwidth';
import { max } from '@aryth/comparer';
import { Lange } from '@spare/lange';
import { maxBy } from '@vect/vector-indicator';

const CJK_PUNCS = '\u3000-\u303f';
const CJK_CHARS = '\u4e00-\u9fbf';
const FULL_CHARS = '\uff00-\uffef';

const HAN = new RegExp(`[${CJK_PUNCS}${CJK_CHARS}${FULL_CHARS}]`); // HAN ideographs

const fieldWidth = (name, list, ansi) => {
  const lange = Lange(ansi);
  return max(lange(name), maxBy(list, lange));
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
  const toFull = FullWidth(config); // use config.ansi

  const configPad = {
    ansi: config.ansi,
    fill: SP
  },
        lpad = LPad(configPad),
        rpad = RPad(configPad);
  const width = fieldWidth(name, list, config.ansi);
  return {
    name: rpad(toFull(name), width),
    rule: DA.repeat(width),
    list: mapper(list, x => lpad(toFull(x), width))
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
  if (config.fullAngle && (hasHan(name) || list.some(hasHan))) return fieldPadderFull(field, config);
  const lpad = LPad(config),
        // use config.ansi
  rpad = RPad(config); // use config.ansi

  const width = fieldWidth(name, list, config.ansi);
  return {
    name: rpad(name, width),
    rule: DA$1.repeat(width),
    list: mapper(list, x => lpad(x, width))
  };
};

export { fieldPadder, fieldWidth };
