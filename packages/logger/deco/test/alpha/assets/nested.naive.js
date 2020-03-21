export const body = `
function nested () {
  const alpha = function () { Object.assign({}, this) }
  function beta () { return this |> deco }
  function gamma () { 
    const g1 = function () { true }
    const g2 = function () { false } 
  }
}`
