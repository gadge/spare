import { ClicheMag } from '@cliche/mag'
import { CrosTabX, } from '../index'

export class TableXTest {

  static testSimpleCrosTab () {
    let { side, banner, matrix } = {
      side: ['foo', 'bar', 'baz'],
      banner: ['Shake', 'Shack', '院线', 'Drack'],
      matrix: [[1, '二', 3, 4], [2, 3, 4, 5], [3, 4, 5, 6]]
    }
    'CrosTab' |> console.log
    const mag = new ClicheMag(2, 3)
    CrosTabX.brief(
      { side, banner, matrix },
      {
        abstract: x => mag.form(x),
        side: { head: 2, tail: 1 },
        banner: { head: 3, tail: 1 },
        ansi: true,
        chinese: true
      }) |> console.log
    '' |> console.log
  }
}

TableXTest.testSimpleCrosTab()
