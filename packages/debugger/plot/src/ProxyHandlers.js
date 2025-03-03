export class Handlers {
  static index(retFn, ctx) {
    return ctx ? {
      get(_, key) {
        // console.log('>> [trap].index', retFn.name, '[key]', `(${String(key).padStart(12)})`, '[ctx]', ctx + '')
        if (key in ctx) { return ctx[key].bind(ctx) }
        ctx.sign(key)
        return retFn.bind(ctx)
      }
    } : {
      get(tar, key) {
        // console.log('>> [trap].index', retFn.name, '[key]', `(${String(key).padStart(12)})`, '[tar]', tar + '')
        if (key in tar) { return tar[key].bind(tar) }
        tar.sign(key)
        return retFn.bind(tar)
      }
    }
  }
}