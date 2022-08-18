import { BESQUE, OCEAN, SUBTLE } from '@palett/presets'
import { Deco }                  from '../target/Deco.js'

const NESTED = {
  EMPTY: {},
  LVMH: {
    Wines_spirit: {
      Moët_Chandon: { founded: 1743, origin: { France: 'Épernay' }, founder: [ 'Claude Moët' ] },
      Veuve_Clicquot: { founded: 1772, origin: { France: 'Reims' }, founder: [ 'Philippe Clicquot' ] },
      Dom_Pérignon: { founded: 1921, origin: { France: 'Hautvillers' }, founder: [ 'Dom Pérignon' ] }
    },
    Fashion_leather_goods: {
      Louis_Vuitton: { founded: 1854, origin: { France: 'Paris' }, founder: 'Louis Vuitton', creative: [ 'Nicolas Ghesquière' ] },
      Christian_Dior: { founded: 1946, origin: { France: 'Paris' }, founder: 'Christian Dior', creative: [ 'Maria Grazia Chiuri', 'Kim Jones' ] },
      Givenchy: { founded: 1952, origin: { France: 'Paris' }, founder: 'Hubert de Givenchy', creative: [ 'Matthew M. Williams' ] },
    },
    Perfumes_cosmetics: {
      Acqua_di_Parma: { founded: 1916, origin: { Italy: 'Parma' }, founder: '', creative: [] },
      Guerlain: { founded: 1828, origin: { France: 'Paris' }, founder: 'Monsieur Pierre-François-Pascal Guerlain', creative: [ 'Olivier Echaudemaison' ] }
    },
    // Watches_jewelry: {},
    // Selective_retailing: {},
    // Other_activities: {},
  }
}

const WD = 72
const LINE = '+'.repeat(WD) + WD
const deco = new Deco({ fill: ' ', ansi: true, pres: { pos: BESQUE, neg: OCEAN, str: SUBTLE }, vt: 16, dp: 16, th: WD })

LINE |> console.log
deco.node(NESTED, 0) |> console.log
LINE |> console.log
