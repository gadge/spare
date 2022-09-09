import { decoFlat } from '../index.js'

decoFlat({ foo: 1, date: new Date(), vec: [ 1, 2, 3 ], symbol: Symbol.for('shake') }) |> console.log
decoFlat('shake') |> console.log
decoFlat(123) |> console.log
