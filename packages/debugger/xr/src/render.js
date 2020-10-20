import { SP } from '@spare/enum-chars'


/**
 *
 * @param {*} [text]
 * @return {string}
 */
export function render(text) {
  const queue = this, { indent } = queue
  if (text?.length) queue.push(text)
  return SP.repeat(indent << 1) + queue.join(SP)
}
