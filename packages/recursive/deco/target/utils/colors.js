import { round, roundD2 }            from '@aryth/math'
import { hexAt, hexToInt, hexToRgb } from '@palett/convert'

const { max, min } = Math


export const hue = (r, g, b, hi, df) => {
  if (df === 0) return 0
  if (hi === r) return r6((g - b) / df)
  if (hi === g) return ((b - r) / df + 2)
  if (hi === b) return ((r - g) / df + 4)
  return 0
}

export const r6 = (v) => {
  if (v < 0) v += 6
  return v
}

/**
 *
 * @param {number} n r: 0 or 12, g: -4 or 8, b: -8 or 4
 * @param {number} h from 0 to 12 (0 to 360)
 * @param {number} a (s * l) or (s * (1 - l))
 * @param {number} l from 0 to 1
 * @returns {number}
 */
export const hf = (n, h, a, l) => {
  const k = (n + h) % 12
  return l - a * max(min(k - 3, 9 - k, 1), -1)
}


export function rgbToHsl(r, g, b) {
  let hi, lo
  {
    g > r ? (hi = g, lo = r) : (hi = r, lo = g)
    b > hi ? hi = b : b < lo ? lo = b : void 0
  }
  const t = hi + lo, d = hi - lo
  const h = hue(r, g, b, hi, d),
        s = (!d ? 0 : t > 255 ? d / (510 - t) : d / t),
        l = t / 2
  return [ (h * 40) & 0xFF, roundD2(s * 255), roundD2(l) ]
}

export function hslToInt(h, s, l) {
  h /= 20
  const a = l <= 127 ? (s * l / 255) : (s - s * l / 255),
        r = hf(0, h, a, l),
        g = hf(8, h, a, l),
        b = hf(4, h, a, l)
  return ((r & 0xFF) << 16) + ((g & 0xFF) << 8) + (b & 0xFF)
}

export function presToUCA(p) {
  const uca = new Uint8ClampedArray(9)
  // if (p.effects) style.call(uca, p.effects)
  hexOntoHsl(p.min, uca, 0)
  hexOntoHsl(p.max, uca, 3)
  hexOntoRgb(p.na, uca, 6)
  return uca
}

export function ucaToPres(uca) {
  const [ ha, sa, la, hb, sb, lb, rc, gc, bc ] = uca
  return {
    min: hslToInt(ha, sa, la),
    max: hslToInt(hb, sb, lb),
    nan: rc << 16 | gc << 8 | bc
  }
}

export function hexOntoHsl(hex, uca, pos = 0) {
  let hi, lo, i = 0
  const r = hexAt(hex, ++i) << 4 | hexAt(hex, ++i),
        g = hexAt(hex, ++i) << 4 | hexAt(hex, ++i),
        b = hexAt(hex, ++i) << 4 | hexAt(hex, ++i)
  {
    g > r ? (hi = g, lo = r) : (hi = r, lo = g)
    b > hi ? hi = b : b < lo ? lo = b : void 0
  }
  const t = hi + lo, d = hi - lo
  uca[pos++] = (hue(r, g, b, hi, d) * 40)
  uca[pos++] = (!d ? 0 : t > 255 ? d / (510 - t) : d / t) * 255
  uca[pos++] = t / 2
  return uca
}

export function hexOntoRgb(hex, uca, pos = 0) {
  let i = 0
  uca[pos++] = hexAt(hex, ++i) << 4 | hexAt(hex, ++i)
  uca[pos++] = hexAt(hex, ++i) << 4 | hexAt(hex, ++i)
  uca[pos++] = hexAt(hex, ++i) << 4 | hexAt(hex, ++i)
  return uca
}



