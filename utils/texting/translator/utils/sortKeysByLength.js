export const sortKeysByLength =
  dict => dict.sort(([a], [b]) => String(b).length - String(a).length)
