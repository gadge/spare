import { presetFlopper }      from '@palett/flopper'
import { deco as decoString } from '@spare/deco-string'
import { hasAnsi }            from '@texting/charset-ansi'

export class Roster {
  /** @type {Object<string,string>} */ #roll = {}
  /** @type {Generator<Preset>}     */ #pool = presetFlopper({ exhausted: false })
  /** @type {?string[]}             */ effects = null

  constructor(effects) {
    if (effects) this.effects = effects
  }

  static build(...effects) { return new Roster(effects) }

  list() { return this.#roll }

  /**
   * @param {Preset} [presets]
   * @returns {{[presets]: Preset|Preset[], [effects]: ?string[]}}
   */
  config(presets) { return { presets: presets ?? this.#pool.next().value, effects: this.effects } }

  aboard(name, presets) { return this.#roll[name] = decoString(name, this.config(presets)) }

  get(name) {
    if (!name?.length) return null
    if (hasAnsi(name)) return name
    return this.#roll[name] ?? this.aboard(name)
  }
}
