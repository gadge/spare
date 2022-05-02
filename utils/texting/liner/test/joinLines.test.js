import { StringVectorCollection } from '@foba/vector'
import { delogger }               from '@spare/deco'
import { COSP }                   from '@spare/enum-chars'
import { logger }                 from '@spare/logger'
import { joinLines }              from '../src/liner'


const lines = StringVectorCollection.flopShuffle()

lines |> delogger

'result: ' + '[' + joinLines(lines, COSP, 0, true) + ']'|> logger
