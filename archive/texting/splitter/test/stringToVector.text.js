import { decoFlat }       from '@spare/deco-flat'
import { LF }             from '@spare/enum-chars'
import { logger }         from '@spare/logger'
import { stringToVector } from 'utils/texting/phrasing/src/vectorize'

const text = 'Now is the winter of our discontent' + LF + 'Made glorious summer by this sun of York.'
logger(decoFlat(stringToVector(text, /\w+('\w+)?/g)))
