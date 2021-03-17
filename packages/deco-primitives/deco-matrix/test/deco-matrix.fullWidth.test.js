import { says }       from '@spare/logger'
import { COLUMNWISE } from '@vect/matrix'
import { Deco }       from '../index'

const matrix = [
  ['De sterrennacht', 1890, '文森特·梵高',],
  ['Sunday Afternoon on the Island of la Grande Jatte', 1886, '乔治·修拉'],
  ['Garçon à la pipe', '1905年', 'Pablo Picasso'],
  ['Les Joueurs de cartes', 1890, '保罗·塞尚'],

]
matrix |> Deco({ direct: COLUMNWISE, full: true }) |> says['impressionism']



