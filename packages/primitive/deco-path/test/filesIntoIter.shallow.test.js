import { decoString }    from '@spare/logger'
import { says }          from '@spare/says'
import { lpad }          from '@texting/padder'
import { test }          from 'node:test'
import { filesIntoIter } from '../src/shallowFiles.js'

const SOURCE = '../../resources'

test('shallowFiles shallow', async () => {
  const config = {
    dir: name => ![ 'test', 'archive' ].includes(name),
    // doc: (name) => /\.txt$/.test(name)
  }
  let i = 0
  says['searching'](SOURCE)
  for await (let path of filesIntoIter.call(config, SOURCE)) {
    says['file'].br(lpad(i++, 2))(decoString(path))
  }
  says['searching'](`found (${i}) files`)
})

