import { Fold }         from '@spare/node/src/Fold.js'
import { splitLiteral } from '@texting/splitter'

const candidates = [
  'C:\\Users\\Prim\\Dev\\iohub\\scripts\\filesIntoIter.recursive.translate.script.js',
  'G:\\library blaustein\\semiotics\\general semiotics\\Barthes, Roland - Elements of Semiology.pdf',
  'G:\\library blaustein\\semiotics\\sociology, identity, art, phenomenology\\Merleau-Ponty, Maurice, T. Carman, et al. - Phenomenology of Perception.pdf',
]

/**
 * @param {string} str input string
 * @param {number} thr width of each line
 * @param {number} ind indent
 * @param {number} sur surge
 * @return {string}
 */
function string(str, thr, ind, sur) {
  const vec = splitLiteral(str)
  return !vec.length ? '' : Fold.string(this.flatVector(vec), '', thr, ind, sur)
}