import { AEU} from '@spare/util'
import { enttro } from '@spare/enttro'
import { padEntries } from '@spare/pad-entries'
import { FRESH, OCEAN } from '@palett/presets'
import { fluoEntries } from '@palett/fluo-entries'
import { Duozipper} from '@vect/entries-zipper'
import { HR_ENTRY } from '../utils/HR_ENTRY'

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
export const deco = (entries, {
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
  const dye = preset && fluoEntries(raw, { preset, stringPreset, colorant: true })
  entries = (delimiter = delimiter ?? '\n').includes('\n')
    ? padEntries(text, { raw, dye, ansi: preset || ansi })
    : preset
      ? Duozipper((t, d) => t |> d, (t, d) => t |> d)(text, dye)
      : text
  return entries.length ? entries.map(([k, v]) => k + dash + v).join(delimiter) : AEU
}
