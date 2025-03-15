import { indexed } from '@vect/object-mapper'

export const SP = /\s+/g
export const LF = /\r?\n/

export class Fold {
  wd = 80

  constructor(wd) {
    if (wd) this.wd = wd
  }
  * text(tx, sr = 0) {
    const { wd } = this
    let ms, ph, t = 0, i = 0, p = 0, s = 0, th = i + wd - sr // threshold
    while ((ms = SP.exec(tx)) && ([ ph ] = ms)) {
      if ((s = ms.index) > th) yield tx.slice(i, p), i = t, th = i + wd // 匹配起始索引超出界, 则yield [标-上次匹配首索引], 标赋值为上次匹配尾索引
      if (LF.test(ph)) yield tx.slice(i, s), i = SP.lastIndex, th = i + wd // 匹配中包含换行符, 则yield [上次匹配尾索引-本次匹配首索引], 标赋值为本次匹配尾索引
      p = s, t = SP.lastIndex // 匹配字符的结束索引, 即下次匹配的起始索引
    }
    if (tx.length > th) yield tx.slice(i, p), i = t
    if (i < tx.length) yield tx.slice(i)
  }
  * vector(vec, sr = 0) {
    const { wd } = this
    let ms, ph, b = 0, c = 0, a = 0, i = 0, th = c + wd - sr // threshold
    while ((ms = SP.exec(vec)) && ([ ph ] = ms)) {
      i = ms.index // 匹配字符的起始索引
      if (i > th) yield vec.slice(c, a), c = b, th = c + wd
      if (LF.test(ph)) yield vec.slice(c, i), c = SP.lastIndex, th = c + wd
      a = i, b = SP.lastIndex // 匹配字符的结束索引, 即下次匹配的起始索引
    }
    if (vec.length > th) yield vec.slice(c, a), c = b
    if (c < vec.length) yield vec.slice(c)
  }
  * groupToEntries(tx, sr = 0) {
  }
}


const QUOTES = {
  'Sameness': '+'.repeat(120),
  'War and Peace: Bk. IX, ch. 1':
    'In historical events great men — so-called — are but labels serving to give a name to the event, and like labels they have the least possible connection with the event itself. Every action of theirs, that seems to them an act of their own free will, is in an historical sense not free at all, but in bondage to the whole course of previous history, and predestined from all eternity.',
  'The House of Fame, bk. 2, l. 257-62':
    'Soun is noght but air ybroken,\n' +
    'And every speche that is spoken,\n' +
    'Loud or privee, foul or fair,\n' +
    'In his substaunce is but air;\n' +
    'For as flaumbe is but lighted smoke,\n' +
    'Right so soun is air ybroke.'
}
const W = 50
const LINE = '-'.repeat(W) + W
const fold = new Fold(W, 0)

class It {
  static chain(iter, de) {
    let t, d, v
    ({ done: d, value: v } = iter.next())
    t = d ? '' : v
    for (let x of iter) t += de + x
    return t
  }
}

for (let [ key, quote ] of indexed(QUOTES)) {
  console.log(LINE)
  console.log(key + ': ' + It.chain(fold.text(quote, key.length + 2), '\n'))
  console.log(LINE)
}