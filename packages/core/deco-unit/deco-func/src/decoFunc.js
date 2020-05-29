import { parenth }                                        from '@spare/bracket'
import { SP }                                             from '@spare/enum-chars'
import { lange }                                          from '@spare/lange'
import { argsDye, arrowDye, bodyDye, nameDye, PresetDye } from '../resources/dyes'
import { funcName }                                       from './funcName'

export const LAMB_REG = /function\s*(\w*)\s*\(([\w\s,]+)\)\s*\{\s*return(.+);?\s*\}/gs
export const THIS_REG = /\bthis\b/
export const FUNC_INI = /^function/
export const MULTI_LF = /\n\s*(\n\s*)/g

const funcToLined = func => {
  return func.toString().replace(MULTI_LF, (_, p1) => p1)
}

const flatten = (text, flatMark) => {
  const temp = text.replace(/\s+/g, ' ')
  if (temp.length <= flatMark) text = temp.replace(/;\s*}/g, ' }')
  return text
}

const lambdafy = (text, pretty) => {
  if (!THIS_REG.test(text))
    text = pretty ? text
      .replace(LAMB_REG, (_, name, args, body) =>
        nameDye(name) + SP + parenth(argsDye(args)) + SP + arrowDye('=>') + bodyDye(body)) : text
      .replace(LAMB_REG, (_, name, args, body) =>
        name + SP + parenth(args) + SP + '=>' + body)
  return text.replace(FUNC_INI, '').trim()
}

const abbrev = (text, abbrMark, func) => {
  if (lange(text) > abbrMark) return funcName(func)
  return text
}

const prettify = (text, pretty) => {
  if (pretty) return text.replace(PresetDye)
  return text
}

export const decofun = function (func) {
  let text
  const { pr, fw, aw } = this
  text = funcToLined(func)
  text = flatten(text, fw)
  text = lambdafy(text, pr)
  text = abbrev(text, aw, func)
  return prettify(text, pr)
}
