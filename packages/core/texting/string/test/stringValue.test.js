import { says }        from '@spare/logger'
import { stringValue } from '../src/stringValue'

export const test = () => {
  const candidates = [
    'Warren',
    'WSJ',
    'GlobalTimes',
    'ZZZZ',
    'zzzz',
    'MetalGear 1',
    'MetalGear 2'
  ]
  for (let candidate of candidates) {
    candidate |> stringValue |> says[candidate]
  }
}

test()


