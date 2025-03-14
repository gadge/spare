import { bracket, parenth } from '@texting/bracket'
import { test }             from 'node:test'
import { inspect }          from 'node:util'

class Ro {
  #indexer
  #queue = []
  constructor() {

  }
  get indexer() { return this.#indexer }
  load(indexer) { return this.#indexer = indexer, this }
  note(k) { this.#queue.push(bracket(k)) }
  rec(...val) { return this.#queue.push(...val.map(parenth)), this.#indexer }
  p(...xs) { return this.#queue.push(...xs), this.#indexer}
  flush() { this.#queue.length = 0 }
  toString() { return this.#queue.join(' ') }
  [inspect.custom]() {
    const output = this.toString()
    this.flush()
    return output
  }
}

const ro = new Ro()

const $ = new Proxy(ro, {
  get(tar, key, proxy) {
    if (!tar.indexer) tar.load(proxy)
    // console.log('>> [trap].index', '[key]', `(${typeof key === 'symbol' ? key.description : key})`, '[tar]', tar)
    if (key in tar) { return tar[key].bind(tar) }
    return tar.note(key), tar.rec.bind(tar)
  },
})

test('xr beta', () => {
  console.log($['Ridley Scott']('films')['Alien'](1979)['Blade Runner'](1982)['Thelma & Louise'](1991))
  console.log($['Stephen King']('books').p('→')['Carrie'](1974)['The Shining'](1977)['The Stand'](1978))
  // $['Lamborghini']('supercars')['Filippo Perini']('Aventador', 'Huracán')['Luc Donckerwolke']('Murciélago')['Marcello Gandini']('Diablo', 'Countach')()
})
