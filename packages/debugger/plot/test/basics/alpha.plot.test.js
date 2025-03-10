import { Deco, logger }  from '@spare/logger'
import { SYM }           from '@typen/enum-data-types'
import { test }          from 'node:test'
import { PlotSet, says } from '../../index.js'
import { Plot }          from '../../src/Plot.js'

const deco = Deco({ width: 192 })
test('steno', () => {
  const x = PlotSet.capture.init('>> what')

  says['Object']('keys')['Plot            '](deco(Object.keys(Plot)))
  says['Object']('keys')['Plot.prototype  '](deco(Object.keys(Plot.prototype)))
  says['Object']('keys')['Plot.constructor'](deco(Object.keys(Plot.constructor)))
  says['Object']('keys')['Plot instance   '](deco(Object.keys(x)))
  says['Reflect']('ownKeys')['Plot            '](deco(Reflect.ownKeys(Plot)))
  says['Reflect']('ownKeys')['Plot.prototype  '](deco(Reflect.ownKeys(Plot.prototype).map(x => typeof x === SYM ? x.description : x)))
  says['Reflect']('ownKeys')['Plot.constructor'](deco(Reflect.ownKeys(Plot.constructor)))
  says['Reflect']('ownKeys')['Plot instance   '](deco(Reflect.ownKeys(x)))
  says['Object']('getOwnPropertyNames')['Plot            '](deco(Object.getOwnPropertyNames(Plot)))
  says['Object']('getOwnPropertyNames')['Plot.prototype  '](deco(Object.getOwnPropertyNames(Plot.prototype)))
  says['Object']('getOwnPropertyNames')['Plot.constructor'](deco(Object.getOwnPropertyNames(Plot.constructor)))
  says['Object']('getOwnPropertyNames')['Plot instance   '](deco(Object.getOwnPropertyNames(x)))
  says['Object']('getOwnPropertyDescriptors')['Plot            '](deco(Object.getOwnPropertyDescriptors(Plot)))
  says['Object']('getOwnPropertyDescriptors')['Plot.prototype  '](deco(Object.getOwnPropertyDescriptors(Plot.prototype)))
  says['Object']('getOwnPropertyDescriptors')['Plot.constructor'](deco(Object.getOwnPropertyDescriptors(Plot.constructor)))
  says['Object']('getOwnPropertyDescriptors')['Plot instance   '](deco(Object.getOwnPropertyDescriptors(x)))
  says['Object']('getOwnPropertySymbols')['Plot            '](deco(Object.getOwnPropertySymbols(Plot).map(t => t.description)))
  says['Object']('getOwnPropertySymbols')['Plot.prototype  '](deco(Object.getOwnPropertySymbols(Plot.prototype).map(t => t.description)))
  says['Object']('getOwnPropertySymbols')['Plot.constructor'](deco(Object.getOwnPropertySymbols(Plot.constructor).map(t => t.description)))
  says['Object']('getOwnPropertySymbols')['Plot instance   '](deco(Object.getOwnPropertySymbols(x).map(t => t.description)))

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
