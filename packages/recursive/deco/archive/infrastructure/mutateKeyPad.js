import { max }        from '@aryth/comparer'
import { lange }      from '@texting/lange'
import { mutateKeys } from '@vect/entries-mapper'

export const mutateKeyPad = entries => {
  let pad = 0
  mutateKeys(entries, k => {
    k = String(k)
    pad = max(lange(k), pad)
    return k
  })
  return pad
}