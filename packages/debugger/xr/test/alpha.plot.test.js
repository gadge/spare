import { Deco, logger }      from '@spare/logger'
import { SYM }               from '@typen/enum-data-types'
import { test }              from 'node:test'
import { ros, says, Stenos } from '../index.js'
import { Plot }              from '../src/Plot.js'

const deco = Deco({ width: 192 })
test('steno', () => {
  const x = Stenos.plain.init('>> what')

  says['steno']['Object.keys'](ros('Plot            '))(deco(Object.keys(Plot)))
  says['steno']['Object.keys'](ros('Plot.prototype  '))(deco(Object.keys(Plot.prototype)))
  says['steno']['Object.keys'](ros('Plot.constructor'))(deco(Object.keys(Plot.constructor)))
  says['steno']['Object.keys'](ros('Plot instance   '))(deco(Object.keys(x)))
  says['steno']['Reflect.ownKeys'](ros('Plot            '))(deco(Reflect.ownKeys(Plot)))
  says['steno']['Reflect.ownKeys'](ros('Plot.prototype  '))(deco(Reflect.ownKeys(Plot.prototype).map(x => typeof x === SYM ? x.description : x)))
  says['steno']['Reflect.ownKeys'](ros('Plot.constructor'))(deco(Reflect.ownKeys(Plot.constructor)))
  says['steno']['Reflect.ownKeys'](ros('Plot instance   '))(deco(Reflect.ownKeys(x)))
  says['steno']['Object.getOwnPropertyNames'](ros('Plot            '))(deco(Object.getOwnPropertyNames(Plot)))
  says['steno']['Object.getOwnPropertyNames'](ros('Plot.prototype  '))(deco(Object.getOwnPropertyNames(Plot.prototype)))
  says['steno']['Object.getOwnPropertyNames'](ros('Plot.constructor'))(deco(Object.getOwnPropertyNames(Plot.constructor)))
  says['steno']['Object.getOwnPropertyNames'](ros('Plot instance   '))(deco(Object.getOwnPropertyNames(x)))
  says['steno']['Object.getOwnPropertyDescriptors'](ros('Plot            '))(deco(Object.getOwnPropertyDescriptors(Plot)))
  says['steno']['Object.getOwnPropertyDescriptors'](ros('Plot.prototype  '))(deco(Object.getOwnPropertyDescriptors(Plot.prototype)))
  says['steno']['Object.getOwnPropertyDescriptors'](ros('Plot.constructor'))(deco(Object.getOwnPropertyDescriptors(Plot.constructor)))
  says['steno']['Object.getOwnPropertyDescriptors'](ros('Plot instance   '))(deco(Object.getOwnPropertyDescriptors(x)))
  says['steno']['Object.getOwnPropertySymbols'](ros('Plot            '))(deco(Object.getOwnPropertySymbols(Plot).map(t => t.description)))
  says['steno']['Object.getOwnPropertySymbols'](ros('Plot.prototype  '))(deco(Object.getOwnPropertySymbols(Plot.prototype).map(t => t.description)))
  says['steno']['Object.getOwnPropertySymbols'](ros('Plot.constructor'))(deco(Object.getOwnPropertySymbols(Plot.constructor).map(t => t.description)))
  says['steno']['Object.getOwnPropertySymbols'](ros('Plot instance   '))(deco(Object.getOwnPropertySymbols(x).map(t => t.description)))

  console.log('proxy' in x)
  console.log('#queue' in x)

  console.log('constructor', 'constructor' in x)
  console.log('init', 'init' in x)
  console.log('flush', 'flush' in x)
  console.log('attach', 'attach' in x)
  console.log('detach', 'detach' in x)
  console.log('rec', 'rec' in x)
  console.log('br', 'br' in x)
  console.log('pr', 'pr' in x)
  console.log('p', 'p' in x)
  console.log('render', 'render' in x)
  console.log('toString', 'toString' in x)

  logger(x.foo('yeal').bar('bus').br('anything').zen('3'))
})
