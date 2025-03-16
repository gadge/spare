import { render }  from '@palett/dye'
import { lange }   from '@texting/lange'
import { value }   from '@texting/string-value'
import { padAnsi } from './utils/padTypo.js'
import { Sub }     from './utils/Sub.js'


/** @type {(x:string)=>number} get string length */ const len = lange
/** @type {(t:string,n:number,w:number)=>string} */ const pad = padAnsi

const { NaN: E, Num: N, Str: S, Han: H } = Sub

export function rend(grad, tv, nv, wd) {
  const presm = this
  if (wd) tv = pad(tv, nv, wd) // console.log('calling render', 'tv', tv, 'nv', nv, 'grad.wd', grad.wd)
  if (!presm || nv === null) return tv // nv === null → is string && has ansi
  if (nv === undefined) return presm.hasX ? render.call(this, grad.rgiStr(presm, value(tv, grad.wd)), tv) : tv
  if (!isNaN(nv)) return presm.hasY ? render.call(this, grad.rgiNum(presm, nv), tv) : tv
  return presm.hasX ? render.call(this, presm.nan, tv) : tv
}
