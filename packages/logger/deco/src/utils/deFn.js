import { PAL } from '../theme'
import { FUN } from '@typen/enums'

export const deFn = function (fn) {
  let { wf, pr } = this, des = `${fn}`
  if (wf <= 128) des = des.replace(/\s+/g, ' ')
  if (des.startsWith(FUN)) des = des.slice(9)
  des = toLambda(des)
  if (des.length > wf) des = Object.prototype.toString.call(fn)
  return pr ? PAL.FNC(des) : des
}

const LB = '{ return', RB = '}', ARROW = '=>'

export const toLambda = des => {
  const li = des.indexOf(LB), ri = des.lastIndexOf(RB)
  return li && ri
    ? des.slice(0, li) + ARROW + des.slice(li + LB.length, ri)
    : des
}
