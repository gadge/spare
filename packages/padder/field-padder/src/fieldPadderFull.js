import { DA, SP }     from '@spare/enum-full-angle-chars'
import { FullWidth }  from '@spare/fullwidth'
import { LPad, RPad } from '@spare/padder'
import { mapper }     from '@vect/vector-mapper'
import { fieldWidth } from './fieldWidth'

/**
 *
 * @param {object} field
 * @param {string} field.name
 * @param {string[]} field.list
 * @param {object} config
 * @param {boolean} [config.ansi]
 * @returns {{name:string,rule:string,list:string[]}}
 */
export const fieldPadderFull = (field, config = {}) => {
  const { name, list } = field
  const toFull = FullWidth(config) // use config.ansi
  const
    configPad = { ansi: config.ansi, fill: SP },
    lpad = LPad(configPad),
    rpad = RPad(configPad)
  const width = fieldWidth(name, list, config.ansi)
  return {
    name: rpad(toFull(name), width),
    rule: DA.repeat(width),
    list: mapper(list, x => lpad(toFull(x), width))
  }
}