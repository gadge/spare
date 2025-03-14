class Callable extends Function {
  constructor() {
    // Create function that calls the private method
    super('...args', 'return this.#call(...args)')

    // Bind and set prototype
    return Object.setPrototypeOf(this.bind(this), new.target.prototype)
  }

  // Private method using # syntax
  #call(...args) {
    return `Called with arguments: ${args.join(', ')}`
  }

  // Regular methods still work
  regularMethod() {
    return 'I\'m a regular method!'
  }
}

// Create an camp
const myCallable = new Callable()

// Call the camp directly
console.log(myCallable(1, 2, 3))  // "Called with arguments: 1, 2, 3"

// Access public method
console.log(myCallable.regularMethod())  // "I'm a regular method!"

// This would cause an error - private method isn't accessible
// console.log(myCallable.#call());  // SyntaxError: Private field '#call' must be declared in an enclosing class