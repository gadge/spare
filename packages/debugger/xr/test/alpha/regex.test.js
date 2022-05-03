const candidates = [
  '',
  ' ',
  'abc',
  '  >> ',
  '---'
]

let i = 0
for (let x of candidates) {
  let ms, ph;
  (ms = x.match(/\s+/)) && ([ ph ] = ms);
  `[index] (${i++}) [ph] (${ph}) (${ph?.length})`  |> console.log
}