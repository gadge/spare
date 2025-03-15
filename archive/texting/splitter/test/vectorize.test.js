import { deco, delogger } from '@spare/deco'
import { says }           from '@spare/logger'
import { camelToVector }  from 'utils/texting/phrasing/src/vectorize'
import { candidates }     from 'utils/texting/phrasing/test/candidates'
import { xr }             from '@spare/xr'

const snakeToVector = (phrase) => phrase.split(/\W/g)

for (const [key, phrase] of Object.entries(candidates)) {
  xr().phrase(phrase).vectorized(phrase |> snakeToVector |> deco) |> says[key]
}

'' |> delogger
// const camelToVector = (phrase) => phrase.split(/(?=[A-Z])/)

for (const [key, phrase] of Object.entries(candidates)) {
  xr().phrase(phrase).vectorized(phrase |> camelToVector |> deco) |> says[key]
}
