import { Deco }           from '@spare/deco'
import { logger, logNeL } from '@spare/logger'
import { LF }             from '@texting/enum-chars'
import { test }           from 'node:test'
import { says }           from '../index.js'

// const says = Says.build({ effects: [BOLD] })

test('conversation says', () => {
  says.chef.to(says.aboyeur).to(says.worker)('what to do')
  says.worker.asc.to(says.chef)('how would i know')
  says.worker('i\'ll be there tmr')
  says.tournant.asc.asc('anything i can do for you')
  says.aboyeur('no,\n but you just stand by, \nand wait for order')
  says.tournant('yes')

  logger(LF + 'registered roster')
  logNeL(Deco({ vo: 1 })(says.roster()))
})
