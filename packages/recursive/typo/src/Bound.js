export class Bound {
  thi
  tlo
  nhi
  nlo
  phi
  plo

  sg
  constructor(signed) {
    this.sg = signed
  }
  clear() {
    this.thi = void 0
    this.tlo = void 0
    this.nhi = void 0
    this.nlo = void 0
    this.phi = void 0
    this.plo = void 0
  }
  noteStr(x) {
    if (this.thi === void 0) return this.thi = x, this.tlo = x
    return x > this.thi ? (this.thi = x) : x < this.tlo ? (this.tlo = x) : x
  }
  noteNum(n) {
    if (this.sg) {
      if (n > 0) return this.phi === void 0
        ? (this.phi = n, this.plo = n)
        : n > this.phi ? (this.phi = n) : n < this.plo ? (this.plo = n) : n
      if (n < 0) return this.nhi === void 0
        ? (this.nhi = n, this.nlo = n)
        : n > this.nhi ? (this.nhi = n) : n < this.nlo ? (this.nlo = n) : n
      return n
    }
    else {
      return this.nhi === void 0
        ? (this.nhi = n, this.nlo = n)
        : n > this.nhi ? (this.nhi = n) : n < this.nlo ? (this.nlo = n) : n
    }
  }
}