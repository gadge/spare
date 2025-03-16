import { SimpleMatrixCollection } from '@foba/foo'
import { decoMatrix, logger }     from '@spare/logger'
import { xr }                     from '@spare/xr'
import { ros, says }              from '../index.js'
import { test }                   from 'node:test'


test('matrix says', () => {
  for (const [ key, matrix ] of Object.entries(SimpleMatrixCollection))
    says[key](decoMatrix(matrix))

  const stb = function (y) {
    says[y].br('calculation')(
      xr()
        ['y % 4'](y % 4)['y % 100'](y % 4)['y % 400'](y % 400)
        ['result'](!(y % 4) && (y % 100) || !(y % 400))
    )
    return !(y % 4) && (y % 100) || !(y % 400)
  }

  says[1024].p('pure result:')(stb(1024))
  logger(says.roster(1024))
  logger(ros('shake'))
  logger(ros('shack'))
  logger(ros('shake.shack'))
  says['shake.shack'](says['shake.shack'].render('tastes better than wallace'))
  for (const key of Object.keys(SimpleMatrixCollection))
    logger(ros(key))
})