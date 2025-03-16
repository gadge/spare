import { DEBUG, ERROR, TRACE, WARN } from '@spare/enum-loggers'
import { dateTime }                  from '@valjoux/timestamp-pretty'
import { test }                      from 'node:test'
import { says }                      from '../index.js'

test('att level test', () => {
  says.attach(dateTime)
// Plots.loom.#badge |> decoFunc |> logger
  says[WARN]('warned')
  says[' ' + TRACE]('logged')
  says[DEBUG]('informed')
  says[ERROR]('errored')
  says[ERROR]('errored again')
// 'informed again' |> says[INFO].broad(INFO)
})
