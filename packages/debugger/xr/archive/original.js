import { bracket as bracket$2, parenth as parenth$2 } from '@texting/bracket'
import { SP, COSP, CO }                               from '@texting/enum-chars'
import { Cards }                                      from '@palett/cards'
import { Dye }                                        from '@palett/dye'
import { hasAnsi, clearAnsi }                         from '@spare/charset'
import { nullish }                                    from '@typen/nullish'
import { deNaTab }                                    from '@spare/util'

// from x => typeof x
const NUM = 'number'
const STR = 'string'
const DEF = 'default'

const orange = Dye.hex(Cards.orange.lighten_3)
const indigo = Dye.hex(Cards.indigo.lighten_1)
const bracket$1 = tx => orange('[') + tx + orange(']')
const parenth$1 = tx => indigo('(') + tx + indigo(')')

const blueGrey = Dye.hex(Cards.blueGrey.base)
const grey = Dye.hex(Cards.grey.darken_1)
const bracket = (tx = '') => blueGrey('[') + grey(tx) + blueGrey(']')
const parenth = (tx = '') => blueGrey('(') + grey(tx) + blueGrey(')')

/**
 *
 * @param {*} [text]
 * @return {string}
 */

function render(text) {
  const queue = this,
        {
          indent
        }     = queue
  if (text !== null && text !== void 0 && text.length) queue.push(text)
  return SP.repeat(indent << 1) + queue.join(SP)
}

const EDGE_BRACKET = /^[(\[{].*[)\]}]$/
const enqueue = function (key, ...items) {
  const {
          queue,
          conf
        } = this
  const {
          bracket,
          parenth
        } = conf

  if (items.every(nullish)) {}
  else {
    items = items.map(String).join(COSP)
    queue.push(bracket.major(String(key)))
    queue.push(hasAnsi(items) && EDGE_BRACKET.test(clearAnsi(items)) ? items : parenth.major(items))
  }

  return this
}

const initQueue = t => {
  var _t

  const queue = []
  let hi, indent
  if (t && (hi = (_t = t = String(t)) === null || _t === void 0 ? void 0 : _t.length) && (indent = deNaTab(t)) < hi) queue.push(t.slice(indent))
  queue.indent = indent
  return {
    queue
  }
}

class Callable extends Function {
  constructor(f) {
    super()
    Reflect.setPrototypeOf(f, new.target.prototype)
    return f
  }

}

const clearQueue = function (word) {
  return Object.assign(this, initQueue(word)), this
}
/**
 * @typedef {Array<string>} ArrayWithIndent
 * @typedef {string} ArrayWithIndent.indent
 */

/**
 * @type {Object<string,string>}
 */

class XrStream extends Callable {
  /** @type {ArrayWithIndent} */
  queue
  /** @type {number} */

  indent
  /** @type {{br:{major:Function,minor:Function},pa:{major:Function,minor:Function}} */

  #conf = {}

  constructor(word, pretty = true) {
    super(word => render.call(this.queue, word))
    Object.assign(this, initQueue(word))
    this.#conf.bracket = pretty ? {
      major: bracket$1,
      minor: bracket
    } : {
      major: bracket$2,
      minor: bracket$2
    }
    this.#conf.parenth = pretty ? {
      major: parenth$1,
      minor: parenth
    } : {
      major: parenth$2,
      minor: parenth$2
    }
    return new Proxy(this, {
      get(target, name, receiver) {
        return name in target ? target[name] // `[proxy.get] (${ String(name) }) (${ target?.name })` |> logger,
          : (...items) => (enqueue.call(target, name, ...items), receiver)
      }

    })
  }

  get conf() {
    return this.#conf
  }

  asc() {
    return this.queue.indent++, this
  }

  desc() {
    return this.queue.indent--, this
  }

  p(...items) {
    return this.queue.push(...items), this
  }

  br(...items) {
    return this.queue.push(items.map(parenth$2).join(CO)), this
  }

  toString() {
    return render.call(this.queue)
  }

  [Symbol.toPrimitive](h) {
    switch (h) {
      case STR:
      case DEF:
        return render.call(this.queue)

      case NUM:
        return this.queue.indent

      default:
        throw new Error('XrStream Symbol.toPrimitive error')
    }
  }

}

const xrSingleton = new XrStream()

/**
 *
 * @param {string} [word]
 * @param {boolean} [color]
 * @returns {XrStream}
 * @constructor
 */

const Xr = (word, color = true) => new XrStream(word, color)
const xr = word => clearQueue.call(xrSingleton, word)

export { Xr, xr }
