import { ClicheFin } from '../src/ClicheFin'
import { logger } from '@spare/logger'

class ClicheMagTest {
  static test () {
    const candidates = [
      0, 64, 256, 1024, 4096, 16384, 65536, 262144, 1048576
    ]
    const fin = new ClicheFin('zh-CN')
    for (let candidate of candidates) {
      `[${candidate}] (${fin.format(candidate)})` |> logger
    }
  }
}

ClicheMagTest.test()
