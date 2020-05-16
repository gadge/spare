export const REG = /[A-Z]+(?=([A-Z][a-z]))/g
export const WORDREG = /\W+|_+|[a-z]+|[A-Z][a-z]+|[A-Z]+(?=[A-Z][a-z])|[\d]+[a-z]*/g
export const WORDREG3 = /\W+|_+|\w+(?=[A-Z][a-z])/g
export const CAMELCASEREG = /(?<!(^|[A-Z]))(?=[A-Z])|(?<!^)(?=[A-Z][a-z])/g