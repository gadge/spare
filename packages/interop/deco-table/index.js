import { BESQUE, ENSIGN, SUBTLE } from '@palett/presets';
import { tabs, parsePresm } from '@spare/node';
import { rend, Grad } from '@spare/serial';
import { VO, LF, SP, DA } from '@texting/enum-chars';
import { POINTWISE, ROWWISE, COLUMNWISE } from '@vect/enum-matrix-directions';
import { width } from '@vect/matrix-index';
import { init } from '@vect/vector-init';

class Concat {
  static chain(iter, de) {
    let tx, d, v;
    ({ done: d, value: v } = iter.next());
    tx = d ? VO : v;
    for (let x of iter) tx += de + x;
    return tx
  }
  static stand(iter, tr, id = 0) {
    const tb = tabs(id);
    let tx, d, v;
    ({ done: d, value: v } = iter.next());
    tx = d ? VO : tb + v;
    for (let x of iter) tx += tr + tb + x;
    return tx
  }
}

const VB = ' | ', CX = '-+-';

class TableNode {
  kpm
  vpm
  constructor(keyPresm, valPresm) {
    this.kpm = keyPresm ?? valPresm ?? null;
    this.vpm = valPresm ?? keyPresm ?? null;
  }

  table(table, direct, indent = 0) {
    if (direct === POINTWISE) return Concat.stand(this.pointwiseLines(table), LF, indent)
    if (direct === ROWWISE) return Concat.stand(this.rowwiseLines(table), LF, indent)
    if (direct === COLUMNWISE) return Concat.stand(this.columnwiseLines(table), LF, indent)
    return Concat.stand(this.pointwiseLines(table), LF, indent)
  }

  * headLines(tvs, nvs, wds, grad, sgr) {
    let j, line;
    const kpm = this.kpm, wd = tvs.length;
    line = sgr ? (SP.repeat(sgr.wd) + VB) : VO;
    for (j = 0; j < wd; j++) line += (j ? VB : VO) + rend.call(kpm, grad, tvs[j], nvs[j], wds[j]);
    yield line;
    line = sgr ? (DA.repeat(sgr.wd) + CX) : VO;
    for (j = 0; j < wd; j++) line += (j ? CX : VO) + DA.repeat(wds[j]);
    yield line;
  }

  * pointwiseLines({ head, side, rows }) {
    const kpm = this.kpm, vpm = this.vpm;
    const ht = rows?.length ?? 0, wd = head?.length ?? width(rows), cn = ht * wd;
    const vts = Array(cn), vns = Array(cn), sts = Array(ht), sns = Array(ht), hts = Array(wd), hns = Array(wd);
    const vgr = new Grad(vpm?.dim), hgr = head ? new Grad(kpm?.dim) : null, sgr = side ? new Grad(kpm?.dim) : null;
    const xs = Array(ht).fill(0), ys = Array(wd).fill(0);
    let sw = 0, hw = 0, vw = 0, w = 0, p = 0;
    if (side) for (let i = 0; i < ht; i++) { if ((xs[i] = sgr.rec(sts, sns, side[i], i)) > sw) sw = xs[i]; }
    if (head) for (let j = 0; j < wd; j++) { if ((ys[j] = hgr.rec(hts, hns, head[j], j)) > hw) hw = ys[j]; }
    for (let i = 0; i < ht; i++) {
      for (let j = 0, row = rows[i]; j < wd; j++) {
        w = vgr.rec(vts, vns, row[j], p++);
        if (w > xs[i]) xs[i] = w;
        if (w > ys[j]) ys[j] = w;
        if (w > vw) vw = w;
      }
    }
    hgr?.lever(kpm, hw);
    sgr?.lever(kpm, sw);
    if (head) { yield* this.headLines(hts, hns, ys, hgr, sgr); }
    let i, j, line;
    vgr.lever(vpm, vw);
    // console.log(sw, hw, vw)
    // console.log(vgr)
    for (i = 0, p = 0; i < ht; i++) {
      line = side ? (rend.call(kpm, sgr, sts[i], sns[i], sgr.wd) + VB) : VO;
      for (j = 0; j < wd; j++, p++)
        line += (j ? VB : VO) + rend.call(vpm, vgr, vts[p], vns[p], ys[j]);
      yield line;
    }
  }

  * rowwiseLines({ head, side, rows }) {
    const kpm = this.kpm, vpm = this.vpm;
    const ht = rows.length, wd = head?.length ?? width(rows), cn = ht * wd;
    const vts = Array(cn), vns = Array(cn), sts = Array(ht), sns = Array(ht), hts = Array(wd), hns = Array(wd);
    const vgr = init(ht, () => new Grad(vpm?.dim)), hgr = new Grad(kpm?.dim), sgr = new Grad(kpm?.dim);
    const xs = Array(ht).fill(0), ys = Array(wd).fill(0);
    let sw = 0, hw = 0, w = 0, p = 0;
    if (side) for (let i = 0; i < ht; i++) { if ((xs[i] = sgr.rec(sts, sns, side[i], i)) > sw) sw = xs[i]; }
    if (head) for (let j = 0; j < wd; j++) { if ((ys[j] = hgr.rec(hts, hns, head[j], j)) > hw) hw = ys[j]; }
    for (let i = 0; i < ht; i++) {
      for (let j = 0, row = rows[i]; j < wd; j++) {
        w = vgr[i].rec(vts, vns, row[j], p++);
        if (w > xs[i]) xs[i] = w;
        if (w > ys[j]) ys[j] = w;
      }
    }
    hgr?.lever(kpm, hw);
    sgr?.lever(kpm, sw);
    if (head) { yield* this.headLines(hts, hns, ys, hgr, sgr); }
    let i, j, line;
    for (i = 0, p = 0; i < ht; i++) {
      line = side ? (rend.call(kpm, sgr, sts[i], sns[i], sgr.wd) + VB) : VO;
      for (j = 0, vgr[i].lever(vpm, xs[i]); j < wd; j++, p++)
        line += (j ? VB : VO) + rend.call(vpm, vgr[i], vts[p], vns[p], ys[j]);
      yield line;
    }
  }

  * columnwiseLines({ head, side, rows }) {
    const kpm = this.kpm, vpm = this.vpm;
    const ht = rows.length, wd = head?.length ?? width(rows), cn = ht * wd;
    const vts = Array(cn), vns = Array(cn), sts = Array(ht), sns = Array(ht), hts = Array(wd), hns = Array(wd);
    const vgr = init(wd, () => new Grad(vpm?.dim)), hgr = new Grad(kpm?.dim), sgr = new Grad(kpm?.dim);
    const xs = Array(ht).fill(0), ys = Array(wd).fill(0);
    let sw = 0, hw = 0, w = 0, p = 0;
    if (side) for (let i = 0; i < ht; i++) { if ((xs[i] = sgr.rec(sts, sns, side[i], i)) > sw) sw = xs[i]; }
    if (head) for (let j = 0; j < wd; j++) { if ((ys[j] = hgr.rec(hts, hns, head[j], j)) > hw) hw = ys[j]; }
    for (let i = 0; i < ht; i++) {
      for (let j = 0, row = rows[i]; j < wd; j++) {
        w = vpm.rec(vgr[j], vts, vns, row[j], p++);
        if (w > xs[i]) xs[i] = w;
        if (w > ys[j]) ys[j] = w;
      }
    }
    hgr?.lever(kpm, hw), sgr?.lever(kpm, sw);
    if (head) { yield* this.headLines(hts, hns, ys, hgr, sgr); }
    let i, j, line;
    for (j = 0; j < wd; j++) { vgr[j].lever(vpm, ys[j]); }
    for (i = 0, p = 0; i < ht; i++) {
      line = side ? (rend.call(kpm, sgr, sts[i], sns[i], sgr.wd) + VB) : VO;
      for (j = 0; j < wd; j++, p++)
        line += (j ? VB : VO) + rend.call(vpm, vgr[j], vts[p], vns[p], ys[j]);
      yield line;
    }
  }
}

/**
 * @typedef {Object}    Opt
 * @typedef {?Preset}   Opt.pres
 * @typedef {?function} Opt.str
 * @typedef {?function} Opt.num
 * @typedef {?boolean}  Opt.ansi
 * @typedef {?string}   Opt.fill
 * @typedef {?number}   Opt.top
 * @typedef {?number}   Opt.bottom
 * @typedef {?number}   Opt.left
 * @typedef {?number}   Opt.right
 */

const PRES = { str: SUBTLE, neg: ENSIGN, pos: BESQUE };

const { table } = TableNode.prototype;


/**
 * @param {Opt} conf
 * @returns {(table:*, dir?:number, ind?:number)=>string}
 */
function DecoTable(conf) {
  conf = conf ?? this ?? {};
  // conf.fill = conf.fill ?? SP
  // conf.ansi = conf.ansi ?? true
  const direct = conf.direct;
  const indent = conf.indent;
  const vpm = parsePresm(conf?.pres ?? conf, PRES);
  const kpm = parsePresm(conf?.key, vpm);
  const proc = table.bind(new TableNode(kpm, vpm));
  return (table, dir, ind) => proc(table, dir ?? direct, ind ?? indent)
}

function decoTable(tbl, dir, ind) {
  const conf = this ?? {};
  // conf.fill = conf.fill ?? SP
  // conf.ansi = conf.ansi ?? true
  const direct = conf.direct;
  const indent = conf.indent;
  const vpm = parsePresm(conf?.pres ?? conf, PRES);
  const kpm = parsePresm(conf?.key, vpm);
  return table.call(new TableNode(kpm, vpm), tbl, dir ?? direct, ind ?? indent)
}


/**
 * @param {Opt} conf
 * @returns {function}
 */
function PaleTable(conf) {
  conf = conf ?? this ?? {};
  // conf.fill = conf.fill ?? SP
  // conf.ansi = conf.ansi ?? true
  const direct = conf.direct;
  const indent = conf.indent;
  const vpm = null; // parsePresm(conf?.pres ?? conf, PRES)
  const kpm = null; // parsePresm(conf?.key, vpm)
  const proc = table.bind(new TableNode(kpm, vpm));
  return (table, dir, ind) => proc(table, dir ?? direct, ind ?? indent)
}

function paleTable(tbl, dir, ind) {
  const conf = this ?? {};
  // conf.fill = conf.fill ?? SP
  // conf.ansi = conf.ansi ?? true
  const direct = conf.direct;
  const indent = conf.indent;
  const vpm = null; // parsePresm(conf?.pres ?? conf, PRES)
  const kpm = null; // parsePresm(conf?.key, vpm)
  return table.call(new TableNode(kpm, vpm), tbl, dir ?? direct, ind ?? indent)
}


// {boolean}         [p.discrete]
// {string}          [p.delim=',\n']
// {boolean|number}  [p.bracket] - currently not functional, keeps for future fix
// {Function}        [p.read]
// {Function}        [p.headRead]
// {Object|Object[]} [p.presets=[FRESH, JUNGLE]]
// {Object}          [p.labelPreset=SUBTLE]
// {number}          [p.direct=COLUMNWISE]
// {number}          [p.top]
// {number}          [p.bottom]
// {number}          [p.left]
// {number}          [p.right]
// {boolean}         [p.ansi=true]
// {boolean}         [p.fullAngle]
// {number}          [p.level=0]

export { DecoTable as Deco, DecoTable, PaleTable, TableNode, decoTable as deco, decoTable, paleTable };
