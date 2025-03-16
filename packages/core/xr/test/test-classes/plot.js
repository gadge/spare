class PlotFab {
  static indexerHandler = {
    get(tar, key, proxy) {
      // console.log('>> [trap].index', '[key]', `(${key.padStart(12)})`, '[tar]', tar, '[proxy]', proxy)
      if (key in tar) { return tar[key].bind(tar) }
      tar.recKey(key)
      return tar.recVal.bind(tar)
    }
  }
  static loggerHandler = {
    get(tar, key, proxy) {
      // console.log('>> log [trap].index', '[key]', `(${key.padStart(12)})`, '[tar]', tar, '[proxy]', proxy)
      if (key in tar) {return tar[key].bind(tar)}
      tar.recKey(key)
      return tar.log.bind(tar)
    }
  }
}

class Plot {
  #indexer
  #logger
  #queue = []
  constructor() { }

  flush() { this.#queue.length = 0 }

  get trailer() { return this.#indexer ||= new Proxy(this, PlotFab.indexerHandler) }
  get logger() { return this.#logger ||= new Proxy(this, PlotFab.loggerHandler)}

  p(...xs) {
    this.#queue.push(...xs)
    return this.#indexer
  }
  log(message) {
    if (message) this.#queue.push(message)
    console.log(this.toString())
    this.flush()
    return this.#logger
  }
  recKey(key) {
    this.#queue.push('[' + key + ']')
    return this.#indexer
  }
  recVal(val) {
    this.#queue.push('(', val, ')')
    return this.#indexer
  }
  toString() { return this.#queue.join(' ') }
  [Symbol.toPrimitive](type) {
    switch (type) {
      case STR:
      case DEF:
        return this.toString()
      case NUM:
        return this.#queue.length
      default:
        throw new Error('Plot Symbol.toPrimitive error')
    }
  }
}

// test('test proxy', () => {
const test = () => {
  const plot = new Plot()
  const $ = plot.trailer
  const some = $['pilot']('flight').p('+')['groud crew']('maintenance')
  console.log(some.toString())
  $['surgeon']('perform operation')['nurses']('assist and handle care').log()

  const says = plot.logger
  says['david adjaye']('creates skycrapers')
  says['virgil abloh']('creates off-white')
}
test()