import { test } from 'node:test'
import { says } from '../index.js'

test('says', () => {
  says.chef('what to do')
  says.worker('how would i know')
  says.worker('i\'ll be there tmr')
  says.tournant('anything i can do for you')
  says.aboyeur('no,\n just stand by, \nand wait for order')
  says.tournant('yes')
  says['>> david adjaye']('designing')
  says['  >> client']('waiting')
  // says['  >> client'].br('tiktok-ing')('waiting, too')
})
