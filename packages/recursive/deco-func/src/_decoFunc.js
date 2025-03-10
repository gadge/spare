import { parenth }                                        from '@texting/bracket'
import { SP }                                             from '@texting/enum-chars'
import { lange }                                          from '@texting/lange'
import { argsDye, arrowDye, bodyDye, nameDye, PresetDye } from '../resources/dyes.js'
import { funcName }                                       from './funcName.js'

export const FUNCTION_BODY = /function\s*(\w*)\s*\(([\w\s,]+)\)\s*\{\s*return(.+);?\s*\}/gs
export const THIS_REG = /\bthis\b/
export const FUNCTION_INITIAL = /^function/
export const LINE_FEEDS = /\n\s*(\n\s*)/g

export const funcToLined = func => {
  return func.toString().replace(LINE_FEEDS, (_, p1) => p1)
}

export const flatten = (text, flatWd) => {
  const temp = text.replace(/\s+/g, ' ')
  if (temp.length <= flatWd) text = temp.replace(/;\s*}/g, ' }')
  return text
}

export const toLambda = (text, pretty, defaultName = 'anonym') => {
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

export const abbrev = (text, abbrWd, func) => {
  if (lange(text) > abbrWd) return funcName(func)
  return text
}

export const prettify = (text, pretty) => {
  if (pretty) return text.replace(PresetDye)
  return text
}
