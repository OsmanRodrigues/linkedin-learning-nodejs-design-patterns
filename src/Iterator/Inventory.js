class Inventory{

  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  writeLine() {
    process.stdout.write(`${this.name}: $${this.price}`);
  }

}

module.exports = Inventory;