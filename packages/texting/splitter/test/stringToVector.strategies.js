import { flop }              from '@aryth/rand'
import { EntriesCollection } from '@foba/entries'
import { makeEmbedded }      from '@foba/util'
import { INSTA }             from '@palett/presets'
import { says }              from '@spare/logger'
import { parenth }           from '@spare/bracket'
import { delogger }          from '@spare/deco'
import { DecoFlat }          from '@spare/deco-flat'
import { decoCrostab }       from '@spare/logger'
import { strategies } from '@valjoux/strategies'
import { splitter }   from '../src/splitter'

const [, movieQuote] = EntriesCollection.MovieQuotes |> flop
const [, shakesQuote] = EntriesCollection.ShakesQuote |> flop

const candidates = {
  naive: ' a b\' c, ..',
  movieQuote,
  shakesQuote, //: 'Now is the winter of our discontent' + LF + 'Made glorious summer by this sun of York.'
}

const DEV = 'dev', EDGE = 'edge', FUT = 'fut', BENCH = 'bench',
  NAIVE = 'naive', MOVIE_QUOTE = 'movieQuote', SHAKES_QUOTE = 'shakesQuote'

const { lapse, result } = strategies({
  repeat: 2E+5,
  candidates: candidates |> makeEmbedded,
  methods: {
    bench: x => parenth(x),
    dev: tx => tx.split(' '), //.map(x => parenth(x)),
    edge: tx => splitter(tx, /\w+('\w+)?/g), //.map(x => parenth(x)),
    fut: tx => splitter(tx, /(\W+)?\s+/g), //.map(x => parenth(x)),
  }
})
const decoFlat = DecoFlat({ stringPreset: INSTA })
lapse |> decoCrostab |> says['lapse']
// result |> decoCrostab |> says['result']

result.cell(NAIVE, BENCH) |> decoFlat |> says[BENCH].p(says.roster(NAIVE))
result.cell(MOVIE_QUOTE, BENCH) |> decoFlat |> says[BENCH].p(says.roster(MOVIE_QUOTE))
result.cell(SHAKES_QUOTE, BENCH) |> decoFlat |> says[BENCH].p(says.roster(SHAKES_QUOTE))
'' |> delogger

result.cell(MOVIE_QUOTE, DEV) |> decoFlat |> says[DEV].p(says.roster(MOVIE_QUOTE))
result.cell(MOVIE_QUOTE, EDGE) |> decoFlat |> says[EDGE].p(says.roster(MOVIE_QUOTE))
result.cell(MOVIE_QUOTE, FUT) |> decoFlat |> says[FUT].p(says.roster(MOVIE_QUOTE))
'' |> delogger

result.cell(SHAKES_QUOTE, DEV) |> decoFlat |> says[DEV].p(says.roster(SHAKES_QUOTE))
result.cell(SHAKES_QUOTE, EDGE) |> decoFlat |> says[EDGE].p(says.roster(SHAKES_QUOTE))
result.cell(SHAKES_QUOTE, FUT) |> decoFlat |> says[FUT].p(says.roster(MOVIE_QUOTE))



