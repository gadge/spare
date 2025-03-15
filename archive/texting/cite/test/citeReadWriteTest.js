import { esvar }              from '@flua/utils'
import { Vinylize }           from '@flua/vinylize'
import { decoString, logger } from '@spare/logger'
import { timeout }            from '@valjoux/timeout'
import gulp                   from 'gulp'
import { cite }               from '../src/cite'

const candidates = {
  alpha: '\'------\'foo\'------\n++++++\'bar\'++++++\'',
  beta: '\"------\'foo\'------\r++++++\'bar\'++++++\"',
  gamma: '\"------\'foo\'------\r\n++++++\'bar\'++++++\"'
}
const DEST = 'packages/core/texting/cite/test/output'
const VARNAME = 'text'

export const citeReadWriteTest = async (filename, text) => {
  await Vinylize(filename + '.js')
    .p(esvar(VARNAME))
    .p(cite(text))
    .pipe(gulp.dest(DEST))
  await timeout(1000)
}

export const verseStringReadTest = async (filename) => {
  const { text } = await import( process.cwd() + '/' + DEST + '/' + filename + '.js')
  decoString(text) |> logger
}


for (let [key, text] of Object.entries(candidates)) {
  citeReadWriteTest(key, text)
    .then(async () =>
      await verseStringReadTest(key)
    )
}
