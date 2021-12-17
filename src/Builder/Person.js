class Person {

  constructor(builder) {
    for (const prop in builder) {
      this[prop] = builder[prop];
    }
  }

  toString() {
    return JSON.stringify(this);
  }

}

module.exports = Person;