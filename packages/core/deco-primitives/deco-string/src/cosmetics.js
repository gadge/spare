import { fluoVector } from '@palett/fluo-vector'
import { zipper } from '@vect/vector-zipper'
import { JUNGLE, SUBTLE } from '@palett/presets'
import { camelToVector, snakeToVector } from '@spare/phrasing'
import { DA, SP } from '@spare/enum-chars'

export const decoCamel = (phrase, { delim = '', preset = JUNGLE, stringPreset = SUBTLE }) => {
  const words = phrase |> camelToVector
  const dyes = fluoVector(words, { preset, stringPreset, colorant: true })
  return zipper(words, dyes, (word, dye) => word |> dye).join(delim)
}

export const decoSnake = (phrase, { delim = DA, preset = JUNGLE, stringPreset = SUBTLE }) => {
  const words = phrase |> snakeToVector
  const dyes = fluoVector(words, { preset, stringPreset, colorant: true })
  return zipper(words, dyes, (word, dye) => word |> dye).join(delim)
}

export const decoPhrase = (phrase, { delim = SP, preset = JUNGLE, stringPreset = SUBTLE }) => {
  const words = phrase.split(delim)
  const dyes = fluoVector(words, { preset, stringPreset, colorant: true })
  return zipper(words, dyes, (word, dye) => word |> dye).join(delim)
}

// export const deco
