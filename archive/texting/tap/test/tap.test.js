import { delogger } from '@spare/deco'
import { COSP }     from '@spare/enum-chars'
import { tap }      from '../src/tap'

const test = () => {
  const title = ''
  const subtitle = 'some'
  const kvp = `[so] (good)`
  const another = ''
  tap(title, subtitle, kvp, another).join(COSP) |> delogger
}

test()
