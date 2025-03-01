import { tabs } from '../src/Concat.js'

export class Join {
  static chain(iter, de) {
    let tx, d, v
    ({ done: d, value: v } = iter.next())
    tx = d ? '' : v
    for (let x of iter) tx += de + x
    return tx
  }
  static stand(iter, tr, id = 0) {
    const tb = tabs(id)
    let tx, d, v
    ({ done: d, value: v } = iter.next())
    tx = d ? '' : tb + v
    for (let x of iter) tx += tr + tb + x
    return tx
  }
}