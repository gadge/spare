import { demo, OCEAN, PRETTY } from '@palett/presets'
import { $, deco, says }       from '@spare/logger'
import { SYM }                 from '@typen/enum-data-types'
import { test }                from 'node:test'
import { Node }                from '../../index.js'

test('node properties', () => {
  const node = new Node({}, { num: OCEAN, str: PRETTY })

  says['Object']('keys')['Node            '](deco(Object.keys(Node)))
  says['Object']('keys')['Node.prototype  '](deco(Object.keys(Node.prototype)))
  says['Object']('keys')['Node.constructor'](deco(Object.keys(Node.constructor)))
  says['Object']('keys')['Node camp   '](deco(Object.keys(node)))
  says['Reflect']('ownKeys')['Node            '](deco(Reflect.ownKeys(Node)))
  says['Reflect']('ownKeys')['Node.prototype  '](deco(Reflect.ownKeys(Node.prototype).map(node => typeof node === SYM ? node.description : node)))
  says['Reflect']('ownKeys')['Node.constructor'](deco(Reflect.ownKeys(Node.constructor)))
  says['Reflect']('ownKeys')['Node camp   '](deco(Reflect.ownKeys(node)))
  says['Object']('getOwnPropertyNames')['Node            '](deco(Object.getOwnPropertyNames(Node)))
  says['Object']('getOwnPropertyNames')['Node.prototype  '](deco(Object.getOwnPropertyNames(Node.prototype)))
  says['Object']('getOwnPropertyNames')['Node.constructor'](deco(Object.getOwnPropertyNames(Node.constructor)))
  says['Object']('getOwnPropertyNames')['Node camp   '](deco(Object.getOwnPropertyNames(node)))
  says['Object']('getOwnPropertyDescriptors')['Node            '](deco(Object.getOwnPropertyDescriptors(Node)))
  says['Object']('getOwnPropertyDescriptors')['Node.prototype  '](deco(Object.getOwnPropertyDescriptors(Node.prototype)))
  says['Object']('getOwnPropertyDescriptors')['Node.constructor'](deco(Object.getOwnPropertyDescriptors(Node.constructor)))
  says['Object']('getOwnPropertyDescriptors')['Node camp   '](deco(Object.getOwnPropertyDescriptors(node)))
  says['Object']('getOwnPropertySymbols')['Node            '](deco(Object.getOwnPropertySymbols(Node).map(t => t.description)))
  says['Object']('getOwnPropertySymbols')['Node.prototype  '](deco(Object.getOwnPropertySymbols(Node.prototype).map(t => t.description)))
  says['Object']('getOwnPropertySymbols')['Node.constructor'](deco(Object.getOwnPropertySymbols(Node.constructor).map(t => t.description)))
  says['Object']('getOwnPropertySymbols')['Node camp   '](deco(Object.getOwnPropertySymbols(node).map(t => t.description)))

  console.log($['pres tbd'](node.tbd).p('->')['demo'](node.tbd ? demo(node.tbd, 5) : ''))
  console.log($['pres nbd'](node.nbd).p('->')['demo'](node.nbd ? demo(node.nbd, 5) : ''))
  console.log($['pres pbd'](node.pbd).p('->')['demo'](node.pbd ? demo(node.pbd, 5) : ''))
})