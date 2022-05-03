import { deco, logger } from '@spare/logger'
import { $, says, xr }  from '../index'


xr('william shakespeare')['tragedies']('Macbeth', 'King Lear', 'Hamlet', 'Romeo and Juliet')['comedies'](null) |> says['historian']

xr().timestamp(new Date()).todo(deco([ 1, 2, 3 ])) |> says['el primero']

xr('>> leo').br('tolstoy').p(1, 2, 3) |> logger

$['>> LeoTolstoy']('Well, Prince, so Genoa and Lucca are now just family estates of the Buonapartes') |> logger

$.earth(90).saturn(90).neptune(90).br('a').br('b') |> logger

$['foo']('bar').br('a').br('b').log('what if')

// ('what if 2') |> $['foo']('bar').br('a').br('b')
// cr('key')('what if')
