import { Says }     from '../index.js'
import { castList } from './assets/Bistro.js'
import { test }     from 'node:test'

export const ooTest = () => {
  const says = Says.build(castList)

  says.says('chef', '\'Shakespeare\'')
  says.says('aboyeur', '\'Dickens\'')
}
