function narrow (tx, lb, rb) {
  const [li, ri] = [tx.indexOf(lb), tx.lastIndexOf(rb)]
  return li > 0 && ri > 0 ? tx.slice(li, ri + rb.length) : tx
}

function narrowExclude (tx, lb, rb) {
  const [li, ri] = [tx.indexOf(lb), tx.lastIndexOf(rb)]
  return li && ri ? tx.slice(li + lb.length, ri) : tx
}

export {
  narrow,
  narrowExclude
}
