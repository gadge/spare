import { ERROR, INFO, LOG, WARN } from '@spare/enum-loggers'
import { dateTime }               from '@valjoux/timestamp-pretty'
import { test }                   from 'node:test'
import { says }                   from '../index.js'

const warned = says[WARN].attach(dateTime).level(WARN).asc
const errored = says[ERROR].attach(dateTime).level(ERROR).asc.asc.asc
const logged = says[LOG].attach(dateTime).level(LOG)
const informed = says[INFO].attach(dateTime).level(INFO).asc

test('pav level test', () => {
  warned('warned')
  errored('errored')
  logged('logged')
  informed('informed')
  informed('informed again')
})

