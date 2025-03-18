export async function asyncDistinct(iter, by, to) {
  const cache = {}
  for await (const x of iter)
    if (by?.(x) ?? true) cache[to?.(x) ?? x] = null
  return Object.keys(cache)
}

export async function asyncCollect(iter, by, to) {
  const target = []
  for await (const x of iter)
    if (by?.(x) ?? true) target.push(to?.(x) ?? x)
  return target.length ? target : null
}

export async function asyncReduce(vec, accum, init) {
  const hi = vec.length
  if (hi === 0) return Promise.resolve(init)
  let i = 0
  for await (const item of vec) {
    init = await accum(init, item, i++)
  }
  return init
}