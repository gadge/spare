import { DEBUG, ERROR, TRACE, WARN } from '@spare/enum-loggers'
import { dateTime }                  from '@valjoux/timestamp-pretty'
import { test }                      from 'node:test'
import { says }                      from '../index.js'

test('att level test', () => {
  says.attach(dateTime)
// Plots.loom.#badge |> decoFunc |> logger
  says[WARN].br('001')('warned')
  says[' ' + TRACE].br(TRACE)('logged')
  says[DEBUG].br(DEBUG)('informed')
  says[ERROR].br(2)('errored')
  says[ERROR].pr(2)('errored again')
// 'informed again' |> says[INFO].broad(INFO)
})
