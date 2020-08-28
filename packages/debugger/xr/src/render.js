import { SP } from '@spare/enum-chars'

/**
 *
 * @param {*} [text]
 * @param {number} indent
 * @param {string[]} queue
 * @return {string}
 */
export const render = (text, { indent, queue }) => {
  if (text?.length) queue.push(text)
  return SP.repeat(indent << 1) + queue.join(SP)
}
