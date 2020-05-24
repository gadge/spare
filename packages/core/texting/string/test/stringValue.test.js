import { logger }      from '@spare/logger'
import { stringValue } from '../src/stringValue'

export const test=()=>{
  const candidates=[
    'Warren',
    'WSJ',
    'GlobalTimes'
  ]
  for (let candidate of candidates) {
    candidate |> stringValue |> logger
  }
}

test()


