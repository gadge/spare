import { COSP, LF, SP }         from '@texting/enum-chars'
import { STR }                  from '@typen/enum-data-types'
import { isMatrix }             from '@vect/matrix-index'
import { duozipper, trizipper } from '@vect/vector-zipper'

export class Passage {
  static toLines(mat) {
    if (typeof mat === STR) return mat.split(LF)
    if (isMatrix(mat)) return mat.map(row => '  [ ' + row.join(COSP) + ' ]')
    return mat
  }
  static duoMatrix(matA, matB) {
    matA = Passage.toLines(matA)
    matB = Passage.toLines(matB)
    const fn = (a, b) => SP + a + COSP + b
    const linked = duozipper.call({ fn }, matA, matB)
    return linked.join(LF)
  }
  static triMatrix(matA, matB, matC) {
    matA = Passage.toLines(matA)
    matB = Passage.toLines(matB)
    matC = Passage.toLines(matC)

    const fn = (a, b, c) => SP + a + COSP + b + COSP + c
    const linked = trizipper.call({ fn }, matA, matB, matC)
    return linked.join(LF)
  }
}