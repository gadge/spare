import { Grad, Node, tabs }               from '@spare/node'
import { DA, LF, SP, VO }                 from '@texting/enum-chars'
import { COLUMNWISE, POINTWISE, ROWWISE } from '@vect/enum-matrix-directions'
import { width }                          from '@vect/matrix-index'
import { init }                           from '@vect/vector-init'

const VB = ', '

export class TableNode {
  kpr
  vpr
  constructor(conf) {
    this.kpr = new Node(conf, conf.keys)
    this.vpr = new Node(conf)
  }

  * pointwiseLines({ head, side, rows }) {
    const { kpr, vpr } = this
    const ht = rows?.length ?? 0, wd = head?.length ?? width(rows), cn = ht * wd
    const rts = Array(cn), rns = Array(cn), sts = Array(ht), sns = Array(ht), hts = Array(wd), hns = Array(wd)
    const rbd = new Grad(vpr.uns), hbd = head ? new Grad(kpr.uns) : null, sbd = side ? new Grad(kpr.uns) : null
    const xs = Array(ht).fill(0), ys = Array(wd).fill(0)
    let sw = 0, hw = 0, w = 0, p = 0
    if (side) for (let i = 0; i < ht; i++) { if ((xs[i] = kpr.store(sts, sns, sbd, side[i], i)) > sw) sw = xs[i] }
    if (head) for (let j = 0; j < wd; j++) { if ((ys[j] = kpr.store(hts, hns, hbd, head[j], j)) > hw) hw = ys[j] }
    for (let i = 0; i < ht; i++) {
      for (let j = 0, row = rows[i]; j < wd; j++) {
        (w = vpr.store(rts, rns, rbd, row[j], p++)), (w > xs[i]) && (xs[i] = w), (w > ys[j]) && (ys[j] = w)
      }
    }
    hbd?.lever(kpr, hw), sbd?.lever(kpr, sw)
    if (head) { yield* this.headLines(hts, hns, ys, hbd, sbd) }
    let i, j, line
    for (i = 0, p = 0; i < ht; i++) {
      line = side ? (kpr.render(sbd, sts[i], sns[i], sbd.w) + VB) : VO
      for (j = 0, rbd.lever(vpr, xs[i]); j < wd; j++, p++) line += (j ? VB : VO) + vpr.render(rbd, rts[p], rns[p], ys[j])
      yield line
    }
  }

  * rowwiseLines({ head, side, rows }) {
    const { kpr, vpr } = this
    const ht = rows.length, wd = head?.length ?? width(rows), cn = ht * wd
    const rts = Array(cn), rns = Array(cn), sts = Array(ht), sns = Array(ht), hts = Array(wd), hns = Array(wd)
    const bds = init(ht, () => new Grad(vpr.uns)), hbd = new Grad(kpr.uns), sbd = new Grad(kpr.uns)
    const xs = Array(ht).fill(0), ys = Array(wd).fill(0)
    let sw = 0, hw = 0, w = 0, p = 0
    if (side) for (let i = 0; i < ht; i++) { if ((xs[i] = kpr.store(sts, sns, sbd, side[i], i)) > sw) sw = xs[i] }
    if (head) for (let j = 0; j < wd; j++) { if ((ys[j] = kpr.store(hts, hns, hbd, head[j], j)) > hw) hw = ys[j] }
    for (let i = 0; i < ht; i++) {
      for (let j = 0, row = rows[i]; j < wd; j++) {
        (w = vpr.store(rts, rns, bds[i], row[j], p++)), (w > xs[i]) && (xs[i] = w), (w > ys[j]) && (ys[j] = w)
      }
    }
    hbd?.lever(kpr, hw), sbd?.lever(kpr, sw)
    if (head) { yield* this.headLines(hts, hns, ys, hbd, sbd) }
    let i, j, line
    for (i = 0, p = 0; i < ht; i++) {
      line = side ? (kpr.render(sbd, sts[i], sns[i], sbd.w) + VB) : VO
      for (j = 0, bds[i].lever(vpr, xs[i]); j < wd; j++, p++) line += (j ? VB : VO) + vpr.render(bds[i], rts[p], rns[p], ys[j])
      yield line
    }
  }

  * columnwiseLines({ head, side, rows }) {
    const { kpr, vpr } = this
    const ht = rows.length, wd = head?.length ?? width(rows), cn = ht * wd
    const rts = Array(cn), rns = Array(cn), sts = Array(ht), sns = Array(ht), hts = Array(wd), hns = Array(wd)
    const bds = init(wd, () => new Grad(vpr.uns)), hbd = new Grad(kpr.uns), sbd = new Grad(kpr.uns)
    const xs = Array(ht).fill(0), ys = Array(wd).fill(0)
    let sw = 0, hw = 0, w = 0, p = 0
    if (side) for (let i = 0; i < ht; i++) { if ((xs[i] = kpr.store(sts, sns, sbd, side[i], i)) > sw) sw = xs[i] }
    if (head) for (let j = 0; j < wd; j++) { if ((ys[j] = kpr.store(hts, hns, hbd, head[j], j)) > hw) hw = ys[j] }
    for (let i = 0; i < ht; i++) {
      for (let j = 0, row = rows[i]; j < wd; j++) {
        (w = vpr.store(rts, rns, bds[j], row[j], p++)), (w > xs[i]) && (xs[i] = w), (w > ys[j]) && (ys[j] = w)
      }
    }
    hbd?.lever(kpr, hw), sbd?.lever(kpr, sw)
    if (head) { yield* this.headLines(hts, hns, ys, hbd, sbd) }
    let i, j, line
    for (j = 0; j < wd; j++) { bds[j].lever(vpr, ys[j]) }
    for (i = 0, p = 0; i < ht; i++) {
      line = side ? (kpr.render(sbd, sts[i], sns[i], sbd.w) + VB) : VO
      for (j = 0; j < wd; j++, p++) line += (j ? VB : VO) + vpr.render(bds[j], rts[p], rns[p], ys[j])
      yield line
    }
  }

  * headLines(hts, hns, yws, hbd, sbd) {
    let j, line
    const kpr = this.kpr, wd = hts.length
    line = sbd ? (SP.repeat(sbd.w) + VB) : VO
    for (j = 0; j < wd; j++) line += (j ? VB : VO) + kpr.render(hbd, hts[j], hns[j], yws[j])
    yield line
    line = sbd ? (DA.repeat(sbd.w) + CX) : VO
    for (j = 0; j < wd; j++) line += (j ? CX : VO) + DA.repeat(yws[j])
    yield line
  }

  table(table, direct, id = 0) {
    if (direct === POINTWISE) return It.stand(this.pointwiseLines(table), LF, id)
    if (direct === ROWWISE) return It.stand(this.rowwiseLines(table), LF, id)
    if (direct === COLUMNWISE) return It.stand(this.columnwiseLines(table), LF, id)
    return It.stand(this.pointwiseLines(table), LF, id)
  }
}

export class It {
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

