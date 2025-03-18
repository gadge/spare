import { deco, says }                                from '@spare/logger'
import { listFileInfos }                             from '../src/listFileInfos.js'
import { listFileAndExts, listFileNames, listFiles } from '../src/listFiles.js'
import { listFolders }                               from '../src/listFolders.js'

const test = async () => {
  const SRC = 'G:\\advertisement asset\\imagery'
  says['listFolders'](deco(await listFolders(SRC)))
  says['listFiles'](deco(await listFiles(SRC)))
  says['listBaseNames'](deco(await listFileNames(SRC)))
  says['listBaseExtNames'](deco(await listFileAndExts(SRC)))
  says['listFileInfos'](deco(await listFileInfos(SRC)))
}

await test()