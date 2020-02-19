import { randMatrix } from '@foba/foo'
import { brief } from '../src/brief'
import { logger } from '@spare/logger'

const mx = randMatrix({ h: 8, w: 12 })

brief(mx, { top: 3, bottom: 2, left: 3, right: 2 }) |> logger
