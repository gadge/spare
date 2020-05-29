import { delogger } from '@spare/deco'
import { logger }   from '@spare/logger'

export const WORD = /[A-Za-z\d]+/gi
export const CAMEL = /[A-Z]+|[0-9]+/g

const candidates = {
  onlyDash: '-._',
  wsjSnake: 'THE_WALLSTREET_JOURNAL_2ND_BETA',
  nytCamel: 'NewYorkTimesFW',
  jdwKebab: 'janes-defense-weekly',
  forFans: '2020.FOR.THE.FANS',
  dior: 'ChristianDiorSS21'
}

for (const [key, word] of Object.entries(candidates)) {
  key |> logger
  WORD.exec(word) |> delogger
  word.match(WORD) |> delogger
}
