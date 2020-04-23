/**
 * snake or kebab phrase -> split vector
 * @param {string} phrase - dashed phrase
 * @returns {string[]}
 */
export const splitSnake = (phrase) => phrase.split(/\W/g)
