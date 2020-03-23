import { candidates } from './candidates'
import { xr } from '@spare/xr'
import { says } from '@spare/logger'
import { deco, delogger } from '@spare/deco'
import { camelToVector } from '../src/vectorize'

const snakeToVector = (phrase) => phrase.split(/\W/g)

for (const [key, phrase] of Object.entries(candidates)) {
  xr().phrase(phrase).vectorized(phrase |> snakeToVector |> deco) |> says[key]
}

'' |> delogger
// const camelToVector = (phrase) => phrase.split(/(?=[A-Z])/)

for (const [key, phrase] of Object.entries(candidates)) {
  xr().phrase(phrase).vectorized(phrase |> camelToVector |> deco) |> says[key]
}
