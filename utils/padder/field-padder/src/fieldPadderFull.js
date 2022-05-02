import { DA }         from '@texting/enum-chars-fullwidth'
import { FullWidth }  from '@spare/fullwidth'
import { PadFull }    from '@texting/padder'
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
  const pad = PadFull(config, config)
  const width = fieldWidth(name, list, config.ansi)
  return {
    name: pad(toFull(name), width, true),
    rule: DA.repeat(width),
    list: mapper(list, x => pad(toFull(x), width, true))
  }
}