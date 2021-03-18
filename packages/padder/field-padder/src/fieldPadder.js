import { DA }              from '@spare/enum-chars'
import { Pad }             from '@texting/padder'
import { HAN }             from '@spare/regex-charset'
import { mapper }          from '@vect/vector-mapper'
import { fieldPadderFull } from './fieldPadderFull'
import { fieldWidth }      from './fieldWidth'

const hasHan = HAN.test.bind(HAN)
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
export const fieldPadder = (field, config = {}) => {
  if (config.fullAngle && (hasHan(field.name) || field.list.some(hasHan))) return fieldPadderFull(field, config)
  const pad = Pad(config)// use config.ansi
  const width = fieldWidth(field.name, field.list, config.ansi)
  return {
    name: pad(field.name, width),
    rule: DA.repeat(width),
    list: mapper(field.list, x => pad(x, width))
  }
}



