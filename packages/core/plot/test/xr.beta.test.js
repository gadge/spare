import { test }    from 'node:test'
import { $, says } from '../index.js'

test('xr beta', () => {
  console.log($['Ridley Scott'].p('->')['']('films')['Alien'](1979)['Blade Runner'](1982)['Thelma & Louise'](1991))
  console.log($['Stephen King']('books')['Carrie'](1974)['The Shining'](1977)['The Stand'](1978))
  console.log($['Lamborghini']('supercars')['Filippo Perini']('Aventador', 'Huracán')['Luc Donckerwolke']('Murciélago')['Marcello Gandini']('Diablo', 'Countach'))

  console.log($['pilot']('flight').p('+')['groud crew']('maintenance'))
  $['surgeon'].p('+').p('+')['a']('perform operation')['nurses']('assist and handle care').log()
  says['ridley scott']($['directors']('behind the scene')['actor']('performs'))
  says['david adjaye']('creates skycrapers') // ['david adjaye']('creates skycrapers')
  says['virgil abloh']('creates off-white')

  console.log($['Ridley Scott'].p('->')['files']('release').p('->')['Alien'](1979)['Blade Runner'](1982)['Thelma & Louise'](1991) + '')
  console.log($['Stephen King']('books')['Carrie'](1974)['The Shining'](1977)['The Stand'](1978) + '')
  says['Lamborghini']('supercars')['Filippo Perini']('Aventador', 'Huracán')['Luc Donckerwolke']('Murciélago')['Marcello Gandini']('Diablo', 'Countach')
  says['william shakespeare']($['tragedies']('Macbeth', 'King Lear', 'Hamlet', 'Romeo and Juliet')['comedies'](null))
})
