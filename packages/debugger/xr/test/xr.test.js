import { logger, says } from '@spare/logger'
import { xr }           from '../src/xr'

xr('william shakespeare')
  ['works']('Macbeth', 'King Lear', 'Hamlet', 'Romeo and Juliet')
  |> says['historian']

xr().timestamp(new Date()) |> says['el primero']

xr('leo').br('tolstoy') |> logger
