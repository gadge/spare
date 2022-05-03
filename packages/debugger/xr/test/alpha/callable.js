import { Callable }               from '@ject/callable'
import { assign, inherit, mixin } from '@ject/mixin'
import { bracket }                from '@texting/bracket'

// class Callable extends Function {
//   constructor(f) {
//     super()
//     Reflect.setPrototypeOf(f, new.target.prototype)
//     return f
//   }
// }

class Point {
  x
  y
  constructor() {}
}

class Logger extends mixin(Function, Array) {
  constructor(o = {}) {
    super()
    // assign(this, Array())
    return new Proxy(this, {
      apply: (logger, thisArg, args) => {
        Logger.prototype.writeLine.apply(logger, args)
      }
    })
  }
  writeLine(...args) {
    console.log(bracket(this?.name ?? ''), ...args)
  }
}

// inherit(Logger, Array)

const logger = new Logger()
logger.push(1, 2, 3)
logger(logger.slice())
