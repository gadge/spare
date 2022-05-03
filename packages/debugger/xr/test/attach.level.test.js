import { ERROR, WARN } from '@spare/enum-loggers'
import { dateTime }    from '@valjoux/timestamp-pretty'
import { says }        from '../index'

says.attach(dateTime)
// Singletons.camel.info |> decoFunc |> logger

'warned' |> says[WARN].br('001').asc()
'errored' |> says[ERROR].br(2).asc().asc().asc()
// 'logged' |> says[LOG].br(LOG)
// 'informed' |> says[INFO].br(INFO).asc()
// 'informed again' |> says[INFO].br(INFO).asc()