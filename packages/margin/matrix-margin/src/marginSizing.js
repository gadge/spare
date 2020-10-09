import { size } from '@vect/matrix-size'

export const marginSizing = (rows, top, bottom, left, right, height, width) => {
  let dashX = true, dashY = true
  if (!height || !width) [height, width] = size(rows)
  if (!height || !width) [top, bottom, dashX, dashY] = [0, 0, false, false]
  if (!top && !bottom || top >= height) [top, bottom, dashX] = [height, 0, false]
  if (!left && !right || left >= width) [left, right, dashY] = [width, 0, false]
  return { top, bottom, left, right, height, width, dashX, dashY }
}
