import { GLACIAL } from 'palett-presets'
import { defaultPreset, isVisual } from '../src/isVisual'
import { decoLog } from '@spare/deco'

defaultPreset |> decoLog
GLACIAL |> isVisual |> decoLog
