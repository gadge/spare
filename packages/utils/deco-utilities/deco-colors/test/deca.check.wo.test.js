import { randLongStr } from '@aryth/rand'
import { logger }      from '@spare/logger'
import { deca }        from '../index'

const candidates = {
  d10: randLongStr(10),
  d20: randLongStr(20),
  d30: randLongStr(30),
  d40: randLongStr(40),
  d50: randLongStr(50),
  d60: randLongStr(60),
}

candidates |> deca({ vo: 0, wo: 32 }) |> logger
