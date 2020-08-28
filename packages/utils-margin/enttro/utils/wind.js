const windMapper = (keyMapper, valueMapper) => keyMapper
  ? valueMapper
    ? ([k, v]) => [keyMapper(k), valueMapper(v)]
    : ([k, v]) => [keyMapper(k), v]
  : valueMapper
    ? ([k, v]) => [k, valueMapper(v)]
    : ([k, v]) => [k, v]

const windMutate = (keyMapper, valueMapper) =>
  keyMapper
    ? valueMapper
    ? entry => { return entry[0] = keyMapper(entry[0]), entry[1] = valueMapper(entry[1]), entry }
    : entry => { return entry[0] = keyMapper(entry[0]) , entry}
    : valueMapper
    ? entry => { return entry[1] = valueMapper(entry[1]) , entry}
    : entry => entry
