import { StringVectorCollection } from '@foba/vector'
import { delogger }               from '@spare/deco'
import { BRACKET }                from '@spare/enum-brackets'
import { COSP }                   from '@spare/enum-chars'
import { logger }                 from '@spare/logger'
import { liner }                  from '../src/liner'


const lines = StringVectorCollection.flopShuffle()

lines |> delogger

liner(lines, { bracket: BRACKET, delim: COSP }) |> logger
