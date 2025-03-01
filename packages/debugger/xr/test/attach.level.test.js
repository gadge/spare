import { ERROR, WARN } from '@spare/enum-loggers'
import { dateTime }    from '@valjoux/timestamp-pretty'
import { says }        from '../index.js'
import { test }        from 'node:test'

test('attach level test', () => {
  says.attach(dateTime)
// Stenos.camel.info |> decoFunc |> logger

  says[WARN].br('001').asc()('warned')
  says[ERROR].br(2).asc().asc().asc()('errored')
// 'logged' |> says[LOG].br(LOG)
// 'informed' |> says[INFO].br(INFO).asc()
// 'informed again' |> says[INFO].br(INFO).asc()
})
