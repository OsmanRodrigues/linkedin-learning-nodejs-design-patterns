//Observer
class Mall {

  constructor(name) {
    this.name = name;
    this.stores = [];
  }

  notify(storeName, discount) {
    this.stores.push({ storeName, discount });
  }

}

module.exports = Mall;