import { xrSingleton } from './singleton/xrSingleton'
import { clearQueue }  from './XrStream/XrStream'

export const xr = word => clearQueue.call(xrSingleton, word)
