import { test } from 'node:test'
import { $ }    from '../index.js'

test('xr beta', () => {
  // ($['Ridley Scott']('films')['Alien'](1979)['Blade Runner'](1982)['Thelma & Louise'](1991))()
  console.log($['Stephen King']('books')['Carrie'](1974)['The Shining'](1977)['The Stand'](1978))
  // $['Lamborghini']('supercars')['Filippo Perini']('Aventador', 'Huracán')['Luc Donckerwolke']('Murciélago')['Marcello Gandini']('Diablo', 'Countach')()
})
