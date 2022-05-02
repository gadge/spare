import { says }       from '@palett/says'
import { candidates } from 'utils/texting/phrasing/test/candidates'
import { splitCamel } from '../src/splitCamel'

candidates.hrequest = 'sendHTTPRequestAsyncCLIENT'
for (const [key, text] of Object.entries(candidates)) {
  splitCamel(text) |> says[key].br(text)
}
