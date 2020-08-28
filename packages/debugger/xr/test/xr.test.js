import { deco, logger, says } from '@spare/logger'
import { xr }                 from '../src/xr'

xr('william shakespeare')
  .tragedies('Macbeth', 'King Lear', 'Hamlet', 'Romeo and Juliet')
  .comedies()
  |> says['historian']

xr().timestamp(new Date()).todo([1, 2, 3] |> deco) |> says['el primero']

xr('leo').br('tolstoy') |> logger
