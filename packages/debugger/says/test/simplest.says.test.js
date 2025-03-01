import { decoString } from '@spare/logger'
import { says }       from '../index.js'
import { test }       from 'node:test'

test('simple says', () => {
  says['Richard II'](decoString('now is the winter of our discontent, made glorious by the sun of York'))
  says[2077](decoString('released soon'))
  says[decoString('cyberPunk2077')]('dyed')
})