import { says }              from '@spare/logger'
import { ComplexCollection } from '../../assets/ComboCollection.js'

export const paramNames = (fn) => {
  return fn.toString()
    .replace(/[/][/].*$/mg, '') // strip single-line comments
    .replace(/\s+/g, '') // strip white space
    .replace(/[/][*][^/*]*[*][/]/g, '') // strip multi-line comments
    .split('){', 1)[0].replace(/^[^(]*[(]/, '') // extract the parameters
    .replace(/=[^,]+/g, '') // strip any ES6 defaults
    .split(',').filter(Boolean) // split & filter [""]
}

for (const [name, func] of Object.entries(ComplexCollection)) {
  says[name](paramNames(func))
}

