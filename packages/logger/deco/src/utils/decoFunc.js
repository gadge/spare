import { SP } from '@spare/enum-chars'
import { parenth } from '@spare/bracket'
import { Blue, BlueGrey, Brown, DeepPurple, Grey, LightBlue, Lime, Purple } from '@palett/cards'
import { Dye } from '@palett/dye'
import { makeReplaceable } from '@glossa/translator'
import { hexToRgb } from '@palett/convert'

export const LAMB_REG = /function\s*(\w*)\s*\(([\w\s,]+)\)\s*\{\s*return(.+);?\s*\}/gs
export const THIS_REG = /\bthis\b/
export const FUNC_INI = /^function/
export const MULTI_LF = /\n\s*(\n\s*)/g

const nameDye = Dye(Blue.lighten_2 |> hexToRgb)
const argsDye = Dye(LightBlue.accent_2 |> hexToRgb)
const bodyDye = Dye(LightBlue.lighten_3 |> hexToRgb)
const arrowDye = Dye(Lime.lighten_1 |> hexToRgb)
const Preset = [
  [/function/gi, 'function'|> Dye(Grey.base |> hexToRgb)],
  [/return/gi, 'return'|> Dye(Brown.lighten_3 |> hexToRgb)],
  [/\bthis\b/gi, x => x|> Dye(BlueGrey.accent_2 |> hexToRgb)],
  [/\b(if|else|while|do|switch|for)\b/gi, x => x|> Dye(Purple.lighten_3 |> hexToRgb)],
  [/\b(var|let|const)\b/gi, x => x|> Dye(DeepPurple.lighten_3 |> hexToRgb)],
] |> makeReplaceable

export const decoFunc = function (func) {
  const { pr } = this
  let text = func
    .toString()
    .replace(MULTI_LF, (_, p1) => p1)
  const temp = text.replace(/\s+/g, ' ')
  if (temp.length <= 160) text = temp.replace(/;\s*}/g, ' }')
  if (!THIS_REG.test(text))
    text = pr ? text
      .replace(LAMB_REG, (_, name, args, body) =>
        nameDye(name) + SP + parenth(argsDye(args)) + SP + arrowDye('=>') + bodyDye(body),) : text
      .replace(LAMB_REG, (_, name, args, body) =>
        name + SP + parenth(args) + SP + '=>' + body)
  text = text.replace(FUNC_INI, '').trim()
  if (pr) { text = text.replace(Preset) }
  return text
}
