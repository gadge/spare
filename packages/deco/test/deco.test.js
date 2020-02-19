import { deca } from '..'
import { Basics, Matrices, Misc, Objects, Vectors } from './candidates'

const candidates = { ...Basics, ...Vectors, ...Matrices, ...Objects, ...Misc }
for (let [key, something] of Object.entries(candidates)) {
  `${key}: ${something|> deca({})}`  |> console.log
}
