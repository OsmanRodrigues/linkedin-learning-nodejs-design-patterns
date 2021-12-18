class Store {
  
  constructor(name) {
    this.name = name;
  }

  sale(discount) {
    console.log(`Annouce sale at ${this.name}, ${discount}% off everything!`);
  }
}

module.exports = Store;