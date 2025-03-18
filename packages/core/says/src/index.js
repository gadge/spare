import { Says } from './Says.js'

/** @type {Object<string,(name: string) => void>|Says} */
const says = new Says()

/** @type {(name: string) => string} */
  // const ros = says.roster.bind(says)
const ros = (name) => says.roster(name)

export { Says, says, ros }