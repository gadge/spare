import { Vectogin } from '../src/vectogin'
import { decoLog } from '@spare/deco'

export const superlativeTrees = {
  coastRedwood: 'Sequoia sempervirens',
  mountainAsh: 'Eucalyptus regnans',
  coastDouglasFir: 'Pseudotsuga menziesii var. menziesii',
  yellowMeranti: 'Shorea faguetiana',
  sitkaSpruce: 'Picea sitchensis',
  giantSequoia: 'Sequoiadendron giganteum',
  mannaGum: 'Eucalyptus viminalis',
  southernBlueGum: 'Eucalyptus globulus',
  nobleFir: 'Abies procera',
  alpineAsh: 'Eucalyptus delegatensis',
  brownTopStringbark: 'Eucalyptus obliqua',
  mengaris: 'Koompassia excelsa',
}

export class PreciTest {
  static test () {
    const arr = [...Object.keys(superlativeTrees)]
    const params = [
      { head: 0, tail: 0 },
      { head: 0, tail: 1 },
      { head: 1, tail: 0 },
      { head: 1, tail: 1 },
      { head: 10, tail: 10 }
    ]
    params.forEach(param => {
      param |> decoLog
      Vectogin.build(arr, param.head, param.tail) |> console.log
      // Preci.build(arr, param.head, param.tail) |> deca({ vu: 2 }) |> logNeL
    })
  }
}

PreciTest.test()
