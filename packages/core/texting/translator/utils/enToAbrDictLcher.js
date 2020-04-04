import { enAbrFin } from '../src/assets/enAbr.fin'

export const enToAbrDictLcher = (option) => (
  enAbrFin[option]
    ? [...enAbrFin.general, ...enAbrFin[option]]
    : Object.values(enAbrFin).reduce((a, b) => a.concat(b))
).sort(([a], [b]) => String(b).length - String(a).length)
