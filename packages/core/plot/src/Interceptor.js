export class Interceptor {
  static index(func, ctx) {
    return ctx ? {
      get(_, key) {
        // console.log('>> [trap].index', retFn.name, '[key]', `(${String(key).padStart(12)})`, '[ctx]', ctx + '')
        if (key in ctx) { return ctx[key].bind(ctx) }
        ctx.reg(key)
        return func.bind(ctx)
      },
    } : {
      get(plot, key) {
        // console.log('>> [trap].index', retFn.name, '[key]', `(${String(key).padStart(12)})`, '[plot]', plot + '')
        if (key in plot) { return plot[key].bind(plot) }
        plot.reg(key)
        return func.bind(plot)
      },
    }
  }
}