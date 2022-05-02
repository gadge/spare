import { deco, logger, says } from '@spare/logger'
import { $, xr }              from '../index'


xr('william shakespeare').tragedies('Macbeth', 'King Lear', 'Hamlet', 'Romeo and Juliet').comedies(null) |> says['historian']

xr().timestamp(new Date()).todo(deco([ 1, 2, 3 ])) |> says['el primero']

xr('>> leo').br('tolstoy').p(1, 2, 3) |> logger

$['>> LeoTolstoy']('Well, Prince, so Genoa and Lucca are now just family estates of the Buonapartes') |> logger

$.earth(90).saturn(90).neptune(90) |> logger
