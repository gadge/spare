import { Palett }       from 'palett'
import { deca, logNeL } from 'xbrief'
import { says }         from '../../index.js'
import { alpha }        from './alpha.js'
import { beta }         from './beta.js'
import { gamma }        from './gamma.js'
import { test }         from 'node:test'

const logger = { alpha, beta, gamma }

'Mount Kilimanjaro' |> logger.alpha
'Batian on Mount Kenya' |> logger.beta
'Margherita Peak on Mount Stanley' |> logger.gamma

logger.theta = says.aboard('theta', Palett.red.base)
'another' |> logger.theta

says.roster |> deca({ uv: 1 }) |> logNeL




