class Shopper {
  constructor(name = 'unnamed') {
    this._name = name;
    this._shoppingList = [];
  }

  set name(value) {
    this._name = value;
  }

  get name() {
    return this._name;
  } 

  get shoppingList() {
    return this._shoppingList.join(', ');
  }

  addItemToList(item) {
    this._shoppingList.push(item);
  }

  clone() {
    const proto = Object.getPrototypeOf(this);
    const clone = Object.create(proto);
    
    clone._name = this.name;
    clone._shoppingList = [...this._shoppingList];

    return clone;
  }
  
}

module.exports = Shopper;