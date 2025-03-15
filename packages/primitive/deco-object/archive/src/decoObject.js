import { deco as decoEntries } from '@spare/deco-entries'
import { liner }               from '@texting/liner'

const LOCAL_OPTION = { discrete: true, bracket: undefined }

export function decoObject(o = {}) {
  const config = Object.assign({}, this, LOCAL_OPTION)
  const lines = decoEntries.call(config, Object.entries(o))
  return liner(lines, this)
}
