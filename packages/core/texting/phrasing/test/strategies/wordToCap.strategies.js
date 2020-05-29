import { makeEmbedded }      from '@foba/util'
import { decoCrostab, says } from '@spare/logger'
import { strategies }        from '@valjoux/strategies'

const CAPREST = /([a-zA-Z\d])([a-zA-Z\d]*)/g

const { lapse, result } = strategies({
  repeat: 1E+6,
  candidates: {
    onlyDash: '-._',
    wsjSnake: 'wallStreet',
    nytCamel: 'newYork',
    initials: 'a-b-c',
    jdwKebab: 'janes',
    forFans: '2020',
    dior: 'ssfw'
  } |> makeEmbedded,
  methods: {
    bench: x => '',
    bySlice: word => word[0].toUpperCase() + word.slice(1).toLowerCase(),
    bySubstring: word => word[0].toUpperCase() + word.substring(1).toLowerCase(),
    byReplace: word => word.replace(CAPREST, (_, p1, p2) => p1.toUpperCase() + p2.toLowerCase()),
    edge: x => '',
  },
  showParams: false
})
lapse |> decoCrostab |> says['lapse']
result |> decoCrostab |> says['result']
