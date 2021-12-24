class Storage {

  constructor(name, inventory=[], deliveryTime=0) {
    this.name = name;
    this.inventory = inventory;
    this.deliveryTime = deliveryTime;
    this.next = null;
  }

  lookInLocalInventory(itemName) {
    return this.inventory.find(item => item.name === itemName);
  }

  setNext(storage) {
    this.next = storage;
  }

  find(itemName) {
    const item = this.lookInLocalInventory(itemName);

    if (item) {
      return {
        name: item.name,
        qty: item.qty,
        location: this.name,
        deliveryTime:
            this.deliveryTime === 0 ? 'now' : `${this.deliveryTime} day(s)`
      };
    } else if (this.next) {
      return this.next.find(itemName);
    } else {
      return `We do not carry ${itemName}`;
    }
  }

}

module.exports = Storage;