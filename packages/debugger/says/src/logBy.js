import { LF, SP } from '@spare/enum-chars'
import { STR }    from '@typen/enum-data-types'


export const tab = ind => SP.repeat(ind << 1)


export const logBy = (text, config) => {
  let { name, des, ind, log, att } = config
  let signature = `${tab(ind)}[${name}]`
  if (att) signature += SP + att()
  if (des?.length) signature += des, config.des = ''
  if (typeof text !== STR) text += ''
  return void log(
    signature,
    text.includes(LF)
      ? (LF + text).replace(/\n/g, LF + tab(++ind))
      : text
  )
}

