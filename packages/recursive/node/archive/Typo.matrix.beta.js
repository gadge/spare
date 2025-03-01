// matrix2(mat, id = 0, sr = 0) {
//   const ts = this.flatMatrix(mat), cn = ts.length, wd = width(mat)
//   return cn <= wd
//     ? '[' + Re.chain(ts, COSP) + ']'
//     : '[' + Re.matrix(ts, COSP, wd, id, sr) + ']'
// }