import { tabs } from '@spare/node'
import { VO }   from '@texting/enum-chars'

export class Concat {
  static chain(iter, de) {
    let tx, d, v
    ({ done: d, value: v } = iter.next())
    tx = d ? VO : v
    for (let x of iter) tx += de + x
    return tx
  }
  static stand(iter, tr, id = 0) {
    const tb = tabs(id)
    let tx, d, v
    ({ done: d, value: v } = iter.next())
    tx = d ? VO : tb + v
    for (let x of iter) tx += tr + tb + x
    return tx
  }
}