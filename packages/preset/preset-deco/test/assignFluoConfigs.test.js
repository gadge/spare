import { assignFluoConfigs } from '../dist/index.esm'

const p = {}

assignFluoConfigs(p) |> JSON.stringify |> console.log