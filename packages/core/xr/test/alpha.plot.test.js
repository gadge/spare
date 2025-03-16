import { Deco, logger }        from '@spare/logger'
import { SP }                  from '@texting/enum-chars'
import { SYM }                 from '@typen/enum-data-types'
import { test }                from 'node:test'
import { $, Plots, ros, says } from '../index.js'
import { Plot }                from '../src/Plot.js'

const deco = Deco({ width: 192 })
test('steno', () => {
  Plots.nein.ini('>> what')
  const x = Plots.nein
  says['Object.keys' + SP + ros('Plot            ')](deco(Object.keys(Plot)))
  says['Object.keys' + SP + ros('Plot.prototype  ')](deco(Object.keys(Plot.prototype)))
  says['Object.keys' + SP + ros('Plot.constructor')](deco(Object.keys(Plot.constructor)))
  says['Object.keys' + SP + ros('Plot camp   ')](deco(Object.keys(x)))
  says['Reflect.ownKeys' + SP + ros('Plot            ')](deco(Reflect.ownKeys(Plot)))
  says['Reflect.ownKeys' + SP + ros('Plot.prototype  ')](deco(Reflect.ownKeys(Plot.prototype).map(x => typeof x === SYM ? x.description : x)))
  says['Reflect.ownKeys' + SP + ros('Plot.constructor')](deco(Reflect.ownKeys(Plot.constructor)))
  says['Reflect.ownKeys' + SP + ros('Plot camp   ')](deco(Reflect.ownKeys(x)))
  says['Object.getOwnPropertyNames' + SP + ros('Plot            ')](deco(Object.getOwnPropertyNames(Plot)))
  says['Object.getOwnPropertyNames' + SP + ros('Plot.prototype  ')](deco(Object.getOwnPropertyNames(Plot.prototype)))
  says['Object.getOwnPropertyNames' + SP + ros('Plot.constructor')](deco(Object.getOwnPropertyNames(Plot.constructor)))
  says['Object.getOwnPropertyNames' + SP + ros('Plot camp   ')](deco(Object.getOwnPropertyNames(x)))
  says['Object.getOwnPropertyDescriptors' + SP + ros('Plot            ')](deco(Object.getOwnPropertyDescriptors(Plot)))
  says['Object.getOwnPropertyDescriptors' + SP + ros('Plot.prototype  ')](deco(Object.getOwnPropertyDescriptors(Plot.prototype)))
  says['Object.getOwnPropertyDescriptors' + SP + ros('Plot.constructor')](deco(Object.getOwnPropertyDescriptors(Plot.constructor)))
  says['Object.getOwnPropertyDescriptors' + SP + ros('Plot camp   ')](deco(Object.getOwnPropertyDescriptors(x)))
  says['Object.getOwnPropertySymbols' + SP + ros('Plot            ')](deco(Object.getOwnPropertySymbols(Plot).map(t => t.description)))
  says['Object.getOwnPropertySymbols' + SP + ros('Plot.prototype  ')](deco(Object.getOwnPropertySymbols(Plot.prototype).map(t => t.description)))
  says['Object.getOwnPropertySymbols' + SP + ros('Plot.constructor')](deco(Object.getOwnPropertySymbols(Plot.constructor).map(t => t.description)))
  says['Object.getOwnPropertySymbols' + SP + ros('Plot camp   ')](deco(Object.getOwnPropertySymbols(x).map(t => t.description)))

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

  logger($.foo('yeal').bar('bus').br('anything').zen('3'))
})
