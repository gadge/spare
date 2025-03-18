import { says }     from '@spare/says'
import { test }     from 'node:test'
import { listExts } from '../src/listFiles.js'

const SOURCE = '../../resources'

test('collectExts shallow', async () => {
  says['searching'](SOURCE)
  const exts = await listExts(SOURCE)
  says['searching'](`found (${exts.length}) files`)
})