/**
 *
 * @param {*} [text]
 * @param {number} indent
 * @param {string[]} queue
 * @return {string}
 */
export const render = (text, { indent, queue }) => {
  if (text?.length) queue.push(text)
  return ' '.repeat(indent << 1) + queue.join(' ')
}
