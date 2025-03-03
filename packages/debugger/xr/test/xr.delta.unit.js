import { deco, logger } from '@spare/logger'
import { $, says, xr }  from '../index.js'

const test = () => {
  console.log($['Ridley Scott'].p('->')('films').p('->')['Alien'](1979)['Blade Runner'](1982)['Thelma & Louise'](1991) + '')
  console.log($['Stephen King']('books')['Carrie'](1974)['The Shining'](1977)['The Stand'](1978) + '')
  says['Lamborghini']('supercars')['Filippo Perini']('Aventador', 'Huracán')['Luc Donckerwolke']('Murciélago')['Marcello Gandini']('Diablo', 'Countach')
  says['historian'](xr('william shakespeare')['tragedies']('Macbeth', 'King Lear', 'Hamlet', 'Romeo and Juliet')['comedies'](null))
  says['el primero'](xr().timestamp(new Date()).todo(deco([ 1, 2, 3 ])))
  logger(xr('>> leo').br('tolstoy').p(1, 2, 3))
  logger($[' >> LeoTolstoy']('Well, Prince, so Genoa and Lucca are now just family estates of the Buonapartes'))
  logger($.earth(90).saturn(90).neptune(90).br('a').br('b'))
  logger($['foo']('bar').br('a').pr('b').log('what if'))
// ('what if 2') |> $['foo']('bar').br('a').br('b')
// cr('key')('what if')
}

test()

