import { max }                       from '@aryth/comparer'
import { makeEmbedded }              from '@foba/util'
import { StringVectorCollection }    from '@foba/vector'
import { Lange }                     from '@spare/lange'
import { decoCrostab, logger, says } from '@spare/logger'
import { Pad }                       from '@spare/padder'
import { strategies }                from '@valjoux/strategies'
import { dateTime }                  from '@valjoux/timestamp-pretty'
import { maxBy }                     from '@vect/vector-indicator'
import { mapper }                    from '@vect/vector-mapper'
import { Stat }                      from '@vect/vector-stat'
import { Duozipper, Trizipper }      from '@vect/vector-zipper'

const width = Stat({ init: () => 0, acc: (a, b) => max(a, String(b).length) })

const PadVectorCollection = {
  dev(vec, { raw, dye, ansi, fill } = {}) {
    raw = raw ?? vec
    const pad = Pad({ ansi, fill })
    const wd = maxBy(vec, Lange(ansi))
    let zipper
    return dye
      ? (zipper = Trizipper((tx, va, dy) => pad(tx, wd, va) |> dy),
        zipper(vec, raw, dye))
      : (zipper = Duozipper((tx, va) => pad(tx, wd, va)),
        zipper(vec, raw))
  },
  edge(vec, { raw, dye, ansi, fill } = {}) {
    const pad = Pad({ ansi, fill })
    const wd = maxBy(vec, Lange(ansi))
    let zipper
    return raw
      ? dye
        ? (zipper = Trizipper((tx, va, dy) => pad(tx, wd, va) |> dy),
          zipper(vec, raw, dye))
        : (zipper = Duozipper((tx, va) => pad(tx, wd, va)),
          zipper(vec, raw))
      : dye
        ? (zipper = Duozipper((tx, dy) => pad(tx, wd, tx) |> dy),
          zipper(vec, dye))
        : mapper(vec, tx => pad(tx, wd, tx))
  },
  fut(vec, { ansi, fill } = {}) {
    const pad = Pad({ ansi, fill })
    const wd = width(vec)
    return mapper(vec, tx => pad(tx, wd, tx))
  },
}

const test = () => {
  const { lapse, result } = strategies({
    repeat: 1E+4,
    candidates: {
      alpha: StringVectorCollection.megaCities,
    } |> makeEmbedded,
    methods: PadVectorCollection
  })
  lapse |> decoCrostab |> says['lapse'].p(dateTime())
  '' |> logger
  result |> decoCrostab |> says['result'].p(dateTime())
  const BANNER = 'cla'
  for (let side of result.side) {
    result.cell(side, BANNER) |> logger
  }
}
test()


