// import { Node }         from '../src/Node.js'
// import { FRESH }        from '@palett/presets'
// import { describe, it } from 'node:test'
//
// describe('Node', () => {
//   it('should format vector with default settings', () => {
//     const typo = new Node()
//     const input = [ 'hello', 123, 'world' ]
//     const result = typo.flatVector(input)
//
//     expect(result).toHaveLength(3)
//     expect(result[0]).toBe('hello')
//     expect(result[1]).toBe('123')
//     expect(result[2]).toBe('world')
//   })
//
//   it('should format entries with padding', () => {
//     const typo = new Node()
//     const input = [ [ 'key1', 'value1' ], [ 'k2', 'v2' ] ]
//     const result = typo.flatEntries(input, true)
//
//     expect(result).toHaveLength(4)
//     expect(result[0].length).toBe(result[2].length) // Keys should be padded to same length
//   })
//
//   it('should format object', () => {
//     const typo = new Node()
//     const input = { key1: 'value1', key2: 123 }
//     const result = typo.flatObject(input)
//
//     expect(result).toHaveLength(4)
//     expect(typeof result[1]).toBe('string') // Value should be converted to string
//   })
//
//   it('should apply color presets', () => {
//     const typo = new Node({
//       pres: {
//         str: FRESH,
//         num: FRESH
//       }
//     })
//     const input = [ 'test', 42 ]
//     const result = typo.flatVector(input)
//
//     expect(result[0]).toMatch(/\u001b\[\d+m/) // Should contain ANSI color codes
//     expect(result[1]).toMatch(/\u001b\[\d+m/)
//   })
//
//   it('should handle ANSI strings correctly', () => {
//     const typo = new Node({ ansi: true })
//     const input = [ '\u001b[32mcolored\u001b[0m', 'nein' ]
//     const result = typo.flatVector(input)
//
//     expect(result[0]).toContain('\u001b[32m')
//     expect(result[1]).not.toContain('\u001b[')
//   })
// })