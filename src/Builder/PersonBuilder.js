class PersonBuilder {
  constructor(name) {
    this.name = name;
  }

  makeEmployee() {
    this.isEmployee = true;
    return this;
  }

  makeManager(hours=40) {
    this.isManager = true;
    this.hours = hours;
    return this;
  }

  makePartTime(hours=20) {
    this.hours = hours;
    return this;
  }

  withMoney(money) {
    this.money = money;
    return this;
  }

  withShoppingList(list=[]) {
    this.shoppingList = list;
    return this;
  }
  
}

module.exports = PersonBuilder;