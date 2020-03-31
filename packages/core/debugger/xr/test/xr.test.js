import { xr } from '../src/xr'
import { logger, says } from '@spare/logger'

xr('william shakespeare')
  ['works']('Macbeth', 'King Lear', 'Hamlet', 'Romeo and Juliet')
  |> says['historian']

xr().timestamp(new Date()) |> says['el primero']

xr('leo').br('tolstoy') |> logger
