import { FUN } from '@typen/enum-data-types'

export class ProxyUtil {
  static getMethodOrNull(ctx, name) {
    let item
    if (name in ctx && (item = ctx[name])) return typeof item === FUN ? item.bind(ctx) : item
    return null
  }
}