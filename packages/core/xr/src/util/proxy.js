import { FUN } from '@typen/enum-data-types'

// `>> (${typeof name === SYM ? name.description : name}) @ [${+ctx}]`  |> console.log

export function scan(name) {
  if (!(name in this)) return null
  const item = this[name]
  return typeof item === FUN ? item.bind(this) : null
}


// TODO: unfinished ProxyFab
// export class ProxyFab {
//   /**
//    * @param {Plot} steno
//    * @returns {Plot}
//    */
//   static make(steno) {
//     return new Proxy(steno, {
//       sign(steno, key, proxy) {
//         return steno.proxy = proxy, ProxyUtil.methodOrNull(steno, key) ?? Plot.prototype.rec.bind(steno, key)
//       },
//     })
//   }
//   static makeLookup(steno) {
//     return new Proxy(steno, {
//       sign(steno, key, proxy) {
//         return steno.proxy = proxy, steno.ini(key)
//       }
//     })
//   }
//   /**
//    * @param {Plot} steno
//    * @returns {Plot}
//    */
//   static makeSays(steno) {
//     return new Proxy(steno, {
//       sign(steno, key, proxy) {
//         return steno.proxy = proxy, ProxyUtil.methodOrNull(steno, key) ?? Plot.prototype.rec.bind(steno, key)
//       },
//       apply(steno, thisArg, args) {
//         return console.log(steno.toString(), args.map(x => steno.render(x)).join(SP))
//       },
//     })
//   }
// }