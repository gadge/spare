import { AEU, lpad, npad } from '@spare/util'
import { lange } from '@spare/lange'
import { enttro } from '@spare/enttro'
import { FRESH, OCEAN } from '@palett/presets'
import { fluoEntries } from '@palett/fluo-entries'
import { Duozipper, Trizipper } from '@vect/entries-zipper'
import { Max as EntriesMax } from '@vect/entries-indicator'
import { HR_ENTRY } from '../utils/HR_ENTRY'

const len = ansi => ansi ? x => x ? lange(x) : 0 : x => x?.length ?? 0

/***
 *
 * @param {[*,*][]} entries
 * @param {string} [dash=' => ']
 * @param {string} [delimiter='\n']
 * @param {function(*):string} [keyAbstract]
 * @param {function(*):string} [abstract]
 * @param {number} [head]
 * @param {number} [tail]
 * @param {{ [max]:string|number[],
 *           [min]:string|number[],
 *           [na]: string|number[] }} [visual]
 * @param {boolean} [ansi=false]
 * @returns {string}
 */
export const brief = (entries, {
  dash = ' > ',
  delimiter = ',\n',
  keyAbstract,
  abstract,
  head,
  tail,
  preset = FRESH,
  stringPreset = OCEAN,
  ansi = false
} = {}) => {
  const { raw, text } = enttro(entries, { head, tail, keyAbstract, abstract, hr: HR_ENTRY })
  const [kpad, vpad] = EntriesMax(len(preset || ansi), len(preset || ansi))(text)
  const dye = preset && fluoEntries(raw, { preset, stringPreset, colorant: true })
  let zipper
  let formattedEntries = (delimiter = delimiter ?? '\n').includes('\n')
    ? preset
      ? (zipper = Trizipper((t, r, d) => lpad(t, kpad, ansi) |> d, (t, r, d) => npad(t, r, vpad, ansi) |> d),
        zipper(text, raw, dye))
      : (zipper = Duozipper(t => lpad(t, kpad, ansi), (t, r) => npad(t, r, vpad, ansi)),
        zipper(text, raw))
    : preset
      ? (zipper = Duozipper((t, d) => t |> d, (t, d) => t |> d),
        zipper(text, dye))
      : text
  return formattedEntries.length ? formattedEntries.map(([k, v]) => k + dash + v).join(delimiter) : AEU
}
