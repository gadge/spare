import { deco } from './deco'

export const delogger = (x) => void console.log(x |> deco)

export const delogNeL = (x) => void console.log(x |> deco, '\n')
