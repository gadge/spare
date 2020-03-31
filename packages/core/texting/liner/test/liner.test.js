import { StringVectorCollection } from '@foba/vector'
import { delogger } from '@spare/deco'
import { BRACKET } from '@spare/enum-brackets'
import { logger } from '@spare/logger'
import { liner } from '../src/liner'
import { COSP } from '@spare/enum-chars'

const lines = StringVectorCollection.flopShuffle()

lines |> delogger

liner(lines, { bracket: BRACKET, delim: COSP }) |> logger
