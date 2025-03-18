import { decoString }      from '@spare/logger'
import { says }            from '@spare/says'
import { lpad }            from '@texting/padder'
import { test }            from 'node:test'
import { foldersIntoIter } from '../src/foldersIntoIter.js'

const SOURCE = '../../resources'

test('foldersIntoIter shallow', async () => {
  const config = {
    dir: name => ![ 'test', 'archive' ].includes(name),
  }
  let i = 0
  says['searching'](SOURCE)
  for await (let path of foldersIntoIter.call(config, SOURCE)) {
    says['folder'].br(lpad(i++, 2))(decoString(path))
  }
  says['searching'](`found (${i}) folders`)
})

