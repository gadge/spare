import { LF }        from '@spare/enum-chars'
import { logger }    from '@spare/logger'
import { ros, says } from '../index'


'what to do' |> says.chef
'how would i know' |> says.worker.asc()
'i\'ll be there tmr' |> says.worker
'anything i can do for you' |> says.tournant.asc().asc()
'no,\n but you just stand by, \nand wait for order' |> says.aboyeur
'yes' |> says.tournant
'waiting' |> says['  >> client']
'waiting, too' |> says['  >> client'].br('tiktok-ing')
LF + 'registered roster' |> logger
// says.roster() |> Deco({ vo: 1 }) |> logNeL

const candidates = [
  'chef',
  'aboyeur',
  'tournant',
  'worker',
]

for (let name of candidates) {
  ros(name) |> logger
}