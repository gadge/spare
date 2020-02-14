// export const isVisual = visual =>
//   visual !== false && visual?.on !== false
import { OBJ } from 'typen'

export const defaultPreset = {
  max: '#74FF03',
  min: '#FF5252',
  na: '#A27767'
}
export const isVisual = visual => {
  if (!visual) return undefined
  if (typeof visual !== OBJ) return defaultPreset
  for (let k in defaultPreset)
    if (!(k in visual)) visual[k] = defaultPreset[k]
  return visual
}

