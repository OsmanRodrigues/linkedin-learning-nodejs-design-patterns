class Store {
  
  constructor(name) {
    this.name = name;
    this.subscribers = {};
  }

  subscribe(observer) {
    this.subscribers[observer.name] = observer;
  }

  sale(discount) {
    Object.keys(this.subscribers).forEach(
      name => this.subscribers[name].notify(this.name, discount)
    );
  }
  
}

module.exports = Store;