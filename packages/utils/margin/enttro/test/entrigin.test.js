import { simpleEntries } from '@foba/foo'
import { Entrigin } from '../src/Entrigin'
import { xr } from '@spare/xr'
import { logNeL } from '@spare/logger'
import { deca } from '@spare/deco'

const Entries = simpleEntries({ h: 8 })
const Params = {
  h0t0: { head: 0, tail: 0 },
  h0t1: { head: 0, tail: 1 },
  h1t0: { head: 1, tail: 0 },
  h1t1: { head: 1, tail: 1 },
  h3t2: { head: 3, tail: 2 },
  h10t10: { head: 10, tail: 10 }
}
const marginConfig = Params.h3t2 |> (({ head, tail }) => [head, tail])

for (const [key, entries] of Object.entries(Entries)) {
  xr(key).entrigin(Entrigin
    .build(entries, ...marginConfig)
    .map(k => `'${k}'`, v => `(${v})`)
    |> deca({ vo: 1 })
  ) |> logNeL
}



