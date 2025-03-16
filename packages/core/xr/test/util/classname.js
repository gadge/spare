/**
 * Gets all method names from a class
 * @param {Function} constructor - The class constructor function
 * @param {boolean} [inherited=false] - Whether to include inherited methods
 * @returns {string[]} Array of method names
 */
export function getClassMethods(constructor, inherited = false) {
  if (!constructor || typeof constructor !== 'function') {
    throw new Error('Input must be a class constructor function')
  }

  // Get methods from the prototype
  const prototype = constructor.prototype
  const methodNames = Object.getOwnPropertyNames(prototype)
    .filter(name => {
      // Filter out the constructor and non-function properties
      return name !== 'constructor' && typeof prototype[name] === 'function'
    })

  // Include static methods
  const staticMethods = Object.getOwnPropertyNames(constructor)
    .filter(name => {
      // Filter out built-in properties and non-function properties
      return ![ 'length', 'prototype', 'name' ].includes(name) &&
        typeof constructor[name] === 'function'
    })

  // If we want inherited methods too
  if (inherited) {
    let proto = Object.getPrototypeOf(prototype)

    while (proto && proto !== Object.prototype) {
      Object.getOwnPropertyNames(proto)
        .filter(name => {
          return name !== 'constructor' &&
            typeof proto[name] === 'function' &&
            !methodNames.includes(name)
        })
        .forEach(name => methodNames.push(name))

      proto = Object.getPrototypeOf(proto)
    }
  }

  return [ ...methodNames, ...staticMethods ]
}