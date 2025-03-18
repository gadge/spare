import { basename, extname, dirname } from 'node:path';
export { extname as pathToExt } from 'node:path';
import { fadeFlopper, shiftFlopper } from '@palett/flopper';
import { Munsell } from '@palett/munsell';
import { MIDTONE } from '@palett/nuance-midtone';
import { parsePresm } from '@spare/node';
import { serialVector } from '@spare/serial';
import { splitter } from '@texting/splitter';

async function asyncDistinct(iter, by, to) {
  const cache = {};
  for await (const x of iter)
    if (by?.(x) ?? true) cache[to?.(x) ?? x] = null;
  return Object.keys(cache)
}

async function asyncCollect(iter, by, to) {
  const target = [];
  for await (const x of iter)
    if (by?.(x) ?? true) target.push(to?.(x) ?? x);
  return target.length ? target : null
}

async function asyncReduce(vec, accum, init) {
  const hi = vec.length;
  if (hi === 0) return Promise.resolve(init)
  let i = 0;
  for await (const item of vec) {
    init = await accum(init, item, i++);
  }
  return init
}

/** @type {function(string,number,string?):string} */
const pad = Function.prototype.call.bind(String.prototype.padStart);


class Cache {
  static #midtone
  static #flopper
  static get midtone() { return this.#midtone ?? (this.#midtone = Munsell.build(MIDTONE)) }
  static get flopper() { return this.#flopper ?? (this.#flopper = shiftFlopper.call(Cache.midtone)) }
}

class Fades {
  flopper
  constructor(munsell, count) {
    this.flopper = fadeFlopper.call(munsell, count);
  }
  static build(count) { return new Fades(Cache.midtone, count) }
  deco(path) { return decoPath.call(this.flopper.next().value, path) }
}

function decoPath(path) {
  const pres = this ?? Cache.flopper.next().value;
  const series = splitter.call(/[\\\/]+/g, path);
  const vector = serialVector.call(parsePresm(pres), series);
  return vector.join('')
}

const pathToName = filePath => basename(filePath, extname(filePath));

const pathToFileExt = filename => {
  const ext = extname(filename), name = basename(filename, ext);
  return [ name, ext ]
};

const pathToInfo = filename => {
  const ext = extname(filename), dir = dirname(filename), doc = basename(filename, ext);
  return { dir, doc, ext }
};

export { Fades, asyncCollect, asyncDistinct, asyncReduce, decoPath, pad, pathToFileExt, pathToInfo, pathToName };
