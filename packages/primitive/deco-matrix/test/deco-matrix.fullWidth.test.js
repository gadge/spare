import { says }       from '@spare/says'
import { COLUMNWISE } from '@vect/matrix'
import { Deco }       from '../index.js'
import { test } from 'node:test'

const matrix = [
  [ 'De sterrennacht', '１８９０', '文森特·梵高', ],
  [ 'Sunday Afternoon on the Island of la Grande Jatte', '１８８６', '乔治·修拉' ],
  [ 'Garçon à la pipe', '1905', 'Pablo Picasso' ],
  [ 'Les Joueurs de cartes', '１８９０', '保罗·塞尚' ],
]
matrix |> Deco({ direct: COLUMNWISE, full: true }) |> says['impressionism']
