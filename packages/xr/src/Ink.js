import { tabify, totx } from '@spare/util'
// import { Callable } from '@vect/callable'
import { bracket, parenthesis } from './theme'
import { render } from './render'
import { preset } from './preset'

class Callable extends Function {
  constructor (f) {
    super()
    Reflect.setPrototypeOf(f, new.target.prototype)
    return f
  }
}

/**
 * @type {object<string,string>}
 */
export class Ink extends Callable {
  /** @type {number} */ indent
  /** @type {string[]} */ stream

  constructor (label, ...items) {
    super(tx => render(tx, this))
    this.cr(label, ...items)
    return new Proxy(this, {
      /** @returns {Ink|function(...string):Ink} */
      get (target, p, receiver) {
        if (p in target) return target[p]
        target.stream.push(String(p) |> bracket)
        return (...items) => {
          target.stream.push(items.map(totx).join(', ') |> parenthesis)
          return receiver
        }
      },
    })
  }

  [Symbol.toPrimitive] (h) {
    switch (h) {
      case 'string':
      case 'default':
        return render(null, this)
      case 'number':
        return this.indent
      default:
        throw new Error('ink Symbol.toPrimitive error')
    }
  }

  cr (label, ...items) {
    const { indent, stream } = preset(label, ...items)
    this.indent = indent
    this.stream = stream
    return this
  }

  asc () {
    this.indent++
    return this
  }

  desc () {
    this.indent--
    return this
  }

  tag (key, ...items) {
    this.stream.push(key |> totx |> tabify)
    if (items.length) this.stream.push(items.map(totx).join(',') |> parenthesis)
    return this
  }

  br (...items) {
    this.stream.push(items.map(parenthesis).join(','))
    return this
  }

  p (...items) {
    this.stream.push(...items)
    return this
  }

  get tx () {
    return render(null, this)
  }

  get say () {
    return render(null, this)
  }

  toString () {
    return render(null, this)
  }
}






