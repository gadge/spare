import { deco } from '@spare/deco'

export const brief = (samples) => {
  return samples.map(it => deco(it))
}
