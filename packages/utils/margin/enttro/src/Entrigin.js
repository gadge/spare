import { totx }                                   from '@spare/util'
import { Vectogin }                               from '@spare/vettro'
import { marginCopy, marginMapper, marginMutate } from '@vect/entries-margin'

export class Entrigin extends Vectogin {
  constructor (entries, head, tail, dash) {
    super(entries, head, tail, dash)
  }

  static build (entries, h = 0, t = 0) {
    let d = true, l
    if (!entries || !(l = entries.length)) [entries, h, t, d] = [[], 0, 0, false]
    if (!h && !t || h >= l) [h, t, d] = [l, 0, false]
    return new Entrigin(marginCopy(entries, h, t, l), h, t, d)
  }

  map (keyMapper, valueMapper, mutate = false) {
    const { vec, head, tail } = this
    return mutate
      ? this.reboot(marginMutate(vec, keyMapper, valueMapper, head, tail))
      : this.clone(marginMapper(vec, keyMapper, valueMapper, head, tail))
  }

  /**
   *
   * @param {function} [keyMapper]
   * @param {function} [valueMapper]
   * @param {boolean} [mutate]
   * @return { Entrigin }
   */
  stringify (keyMapper, valueMapper, mutate = true) {
    return this.map(
      keyMapper ? (_ => String(keyMapper(_))) : totx,
      valueMapper ? (_ => String(valueMapper(_))) : totx,
      mutate
    )
  }
}
