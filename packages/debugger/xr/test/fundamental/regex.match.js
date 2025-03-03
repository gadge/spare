import { sepPreBody } from '../../util/text-utils.js'

const testStrings = [
  '  >> client',
  'david adjaye',
  '',
  ' >> \x1B[31mHello, World!\x1B[0m',
  '\x1B[32mThis is green text.\x1B[0m \x1B[33mThis is yellow text.\x1B[0m',
  'This is a normal string.',
  '\x1B[34mBlue text\x1B[0m \x1B[35mPurple text\x1B[0m'
]

testStrings.forEach((str) => {
  const result = sepPreBody(str)
  console.log(`sepPreBody( ${str} ) = `, result)
})


const regex = //
const ansiString1 = '\x1B[31mHello, World!\x1B[0m'
console.log(regex.test(ansiString1)) // true

// Example 2: String with multiple ANSI escape codes
const ansiString2 = 'to see: \x1B[32mThis is green text.\x1B[0m \x1B[33mThis is yellow text.\x1B[0m'
console.log(regex.exec(ansiString2)) // true

// Example 3: String without ANSI escape code
const normalString = 'This is a normal string.'
console.log(regex.test(normalString)) // false

// Example 4: Using match method to find all occurrences
const ansiString3 = '\x1B[34mBlue text\x1B[0m \x1B[35mPurple text\x1B[0m'
const matches = ansiString3.match(regex)
console.log(matches) // [ '\x1B', index: 0, input: '\x1B[34mBlue text\x1B[0m \x1B[35mPurple text\x1B[0m', groups: undefined ]

// Example 5: Using global flag to find all occurrences
const regexGlobal = //g
const allMatches = ansiString3.match(regexGlobal)
console.log(allMatches) // [ '\x1B', '\x1B', '\x1B' ]