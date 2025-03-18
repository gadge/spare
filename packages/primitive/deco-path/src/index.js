import { basename, dirname, extname } from 'node:path'

export const pathToName = filePath => basename(filePath, extname(filePath))

export { extname as pathToExt }

export const pathToFileExt = filename => {
  const ext = extname(filename), name = basename(filename, ext)
  return [ name, ext ]
}

export const pathToInfo = filename => {
  const ext = extname(filename), dir = dirname(filename), doc = basename(filename, ext)
  return { dir, doc, ext }
}

export { asyncCollect, asyncDistinct, asyncReduce } from './utils/iter-utils.js'

export { pad, Fades, decoPath } from './decoPath.js'