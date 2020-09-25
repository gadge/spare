import { parenth }                                        from '@spare/bracket'
import { SP }                                             from '@spare/enum-chars'
import { lange }                                          from '@spare/lange'
import { argsDye, arrowDye, bodyDye, nameDye, PresetDye } from '../resources/dyes'
import { funcName }                                       from './funcName'

export const FUNCTION_BODY = /function\s*(\w*)\s*\(([\w\s,]+)\)\s*\{\s*return(.+);?\s*\}/gs
export const THIS_REG = /\bthis\b/
export const FUNCTION_INITIAL = /^function/
export const LINEFEEDS = /\n\s*(\n\s*)/g

const funcToLined = func => {
  return func.toString().replace(LINEFEEDS, (_, p1) => p1)
}

const flatten = (text, flatMark) => {
  const temp = text.replace(/\s+/g, ' ')
  if (temp.length <= flatMark) text = temp.replace(/;\s*}/g, ' }')
  return text
}

const lambdafy = (text, pretty, defaultName = 'anonym') => {
  if (!THIS_REG.test(text))
    text = pretty
      ? text.replace(FUNCTION_BODY, (_, name, args, body) =>
        nameDye(name === 'anonymous' ? defaultName : name) + SP + parenth(argsDye(args.trim())) + SP +
        arrowDye('=>') + bodyDye(body)
      )
      : text.replace(FUNCTION_BODY, (_, name, args, body) =>
        name + SP + parenth(args) + SP +
        '=>' + body
      )
  return text.replace(FUNCTION_INITIAL, '').trim()
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
  text = lambdafy(text, pr, func?.name)
  text = abbrev(text, aw, func)
  return prettify(text, pr)
}
