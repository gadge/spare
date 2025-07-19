import { test }    from 'node:test'
import { $, says } from '../src/index.js'

test('console', () => {
  console.log($['Great Expectations'](1861))
  console.log($['War and Peace'](1869))
  console.log($['Pride and Prejudice'](1813))
})

test('says', () => {
  says['Dickens']($['Great Expectations'](1861))
  says['Tolstoy']($['War and Peace'](1869))
  says['Austen']($['Pride and Prejudice'](1813))
})
