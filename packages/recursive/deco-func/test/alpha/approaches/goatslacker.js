import { delogger } from '@spare/deco'

const COMMENTS = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg
const DEFAULT_PARAMS = /=[^,]+/mg
const FAT_ARROWS = /=>.*$/mg

export const getParameterNames = (fn) => {
  const code = fn.toString()
    .replace(COMMENTS, '')
    .replace(FAT_ARROWS, '')
    .replace(DEFAULT_PARAMS, '')

  const result = code
    .slice(code.indexOf('(') + 1, code.indexOf(')'))
    .match(/([^\s,]+)/g)

  return result === null
    ? []
    : result
}

getParameterNames(func) |> delogger
