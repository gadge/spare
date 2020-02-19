import { padVector, formatVector } from './formatVector'

/**
 *
 * @param {string[][]} text
 * @param {*[][]} raw
 * @param {function[][]} dye
 * @param {number[]} pad
 * @param {boolean} ansi
 * @returns {string[][]}
 */
export const formatMatrix = ({ text, raw, dye, pad, ansi }) => {
  return dye
    ? text.map((row, i) => formatVector({ text: row, raw: raw[i], dye: dye[i], pad, ansi }))
    : text.map((row, i) => padVector({ text: row, raw: raw[i], pad, ansi }))
}

