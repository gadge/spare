import { DA }                   from '@spare/enum-chars'
import { LPad, RPad }           from '@spare/padder'
import { HAN }                  from '@spare/regex-charset'
import { mapper }               from '@vect/vector-mapper'
import { fieldPadderFullWidth } from './fieldPadderFullWidth'
import { fieldWidth }           from './fieldWidth'

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
  const { name, list } = field
  if (config.fullAngle && (hasHan(name) || list.some(hasHan))) return fieldPadderFullWidth(field, config)
  const
    lpad = LPad(config), // use config.ansi
    rpad = RPad(config) // use config.ansi
  const width = fieldWidth(name, list, config.ansi)
  return {
    name: rpad(name, width),
    rule: DA.repeat(width),
    list: mapper(list, x => lpad(x, width))
  }
}



