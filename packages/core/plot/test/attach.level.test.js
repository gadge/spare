import { DEBUG, ERROR, INFO, TRACE, WARN } from '@spare/enum-loggers'
import { dateTime }                        from '@valjoux/timestamp-pretty'
import { test }                            from 'node:test'
import { ros, says }                       from '../src/index.js'

test('att level test', () => {
  says.attach(dateTime)
// Plots.loom.#badge |> decoFunc |> logger
  says[WARN]('warned')
  says[' ' + TRACE]('logged')
  says[ERROR]('errored')
  // says[ERROR]('errored again')
  says[DEBUG]('informed')
  says[INFO]('informed again')
  console.log(ros('informed again'))
})
