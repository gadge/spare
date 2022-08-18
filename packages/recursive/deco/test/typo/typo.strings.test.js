import { BESQUE, OCEAN, PAGODA } from '@palett/presets'
import { RTSP }                  from '@texting/enum-chars'
import { indexed }               from '@vect/object-mapper'
import { Typo }                  from '../../target/Typo.js'

export const STRINGS = {
  "empty": '',
  "War and Peace(1865–1869) Bk. I, Ch. III": "Anna Pávlovna's reception was in full swing. The spindles hummed steadily and ceaselessly on all sides. With the exception of the aunt, beside whom sat only one elderly lady, who with her thin careworn face was rather out of place in this brilliant society, the whole company had settled into three groups. One, chiefly masculine, had formed round the abbé.",
  "Pygmalion (1912) Act II": "What is life but a series of inspired follies? The difficulty is to find them to do. Never lose a chance: it doesn't come every day.",
  "Othello AVS2L383":
    "Speak of me as I am; nothing extenuate\n" +
    "Nor set down aught in malice: then must you speak \n" +
    "Of one that loved not wisely, but too well;\n" +
    "Of one not easily jealous, but, being wrought,\n" +
    "Perplexed in the extreme: of one, whose hand\n" +
    "Like the base Indian, threw a pearl away,\n" +
    "Richer than all his tribe: of one, whose subdued eyes,\n" +
    "Albeit unused to the melting mood,\n" +
    "Drop tears as fast as the Arabian trees\n" +
    "Their medicinal gum. ",
  "some": "1-2-3-4-5-6-7-8-9",
}

const typo = new Typo({
  fill: ' ',
  ansi: true,
  pres: { pos: BESQUE, neg: OCEAN, str: PAGODA },
})

const WD = 36
const LINE = '+'.repeat(WD) + WD
LINE |> console.log
for (let [ key, text ] of indexed(STRINGS)) {
  key + RTSP + typo.string(text, WD, 4, key.length + 2,) |> console.log
  LINE |> console.log
}