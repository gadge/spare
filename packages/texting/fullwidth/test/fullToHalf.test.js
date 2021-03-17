import { logger, xr } from '@spare/logger'
import { fullToHalf } from '../src/fullToHalf'

const candidates = [
  '（赛博朋克２０７７）',
  '［Ｎｉｇｈｔ　Ｃｉｔｙ］',
  '＂亚当·＇碎骨＇＂',
  '“强尼·‘银手’”',
  '"Adam \'Smasher\'"',
  '【ＬＥＡＨ】ＲＵＮ！',
  '万事皆允。',
]


for (let full of candidates) {
  xr()[full](full |> fullToHalf) |> logger
}