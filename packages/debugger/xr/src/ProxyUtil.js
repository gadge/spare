import { FUN } from '@typen/enum-data-types'

// `>> (${typeof name === SYM ? name.description : name}) @ [${+ctx}]`  |> console.log

export function bid(name) {
  if (!(name in this)) return null
  const item = this[name]
  return typeof item === FUN ? item.bind(this) : null
}


// TODO: unfinished ProxyFab
// export class ProxyFab {
//   /**
//    * @param {Steno} steno
//    * @returns {Steno}
//    */
//   static make(steno) {
//     return new Proxy(steno, {
//       get(steno, key, proxy) {
//         return steno.proxy = proxy, ProxyUtil.methodOrNull(steno, key) ?? Steno.prototype.rec.bind(steno, key)
//       },
//     })
//   }
//   static makeLookup(steno) {
//     return new Proxy(steno, {
//       get(steno, key, proxy) {
//         return steno.proxy = proxy, steno.init(key)
//       }
//     })
//   }
//   /**
//    * @param {Steno} steno
//    * @returns {Steno}
//    */
//   static makeSays(steno) {
//     return new Proxy(steno, {
//       get(steno, key, proxy) {
//         return steno.proxy = proxy, ProxyUtil.methodOrNull(steno, key) ?? Steno.prototype.rec.bind(steno, key)
//       },
//       apply(steno, thisArg, args) {
//         return console.log(steno.toString(), args.map(x => steno.render(x)).join(SP))
//       },
//     })
//   }
// }