export const REG = /[A-Z]+(?=([A-Z][a-z]))/g
export const NAIVEREG = /[a-z]+|[A-Z][a-z]+|(?<=[a-z]|\W|_)[A-Z]+(?=[A-Z][a-z]|\W|_|$)|[\d]+[a-z]*/g
export const WORDREG = /\W+|_+|[a-z]+|[A-Z][a-z]+|[A-Z]+(?=[A-Z][a-z])|[\d]+[a-z]*/g
export const WORDREG3 = /\W+|_+|\w+(?=[A-Z][a-z])/g
export const CAMELCASEREG = /(?<!(^|[A-Z]))(?=[A-Z])|(?<!^)(?=[A-Z][a-z])/g