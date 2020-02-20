import { xr } from '../src/xr'
import { logger } from '@spare/logger'

xr('william', 'shakespeare')
  .works('Macbeth', 'King Lear', 'Hamlet', 'Romeo and Juliet') |> logger

xr().timestamp(new Date()) |> logger

xr('leo', 'tolstoy') |> logger
