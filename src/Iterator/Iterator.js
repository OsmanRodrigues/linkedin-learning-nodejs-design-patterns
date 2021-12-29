class Iterator {
  
  constructor(items=[]) {
    this.currentIndex = 0;
    this.items = items;
  }

  first() {
    const first = this.items[0];
    return first;
  }
  
  last() {
    const lastItemIndex = this.items[this.items.length - 1];
    const last = this.items[lastItemIndex];
    return last;
  }
  
  hasNext() {
    return this.currentIndex < this.items.length - 1;
  }
  
  current() {
    return this.items[this.currentIndex];
  }
  
  next() {
    if (this.hasNext()) {
      this.currentIndex += 1;
    }
    return this.current();
  }
  
  prev() {
    if (this.currentIndex !== 0) {
      this.currentIndex -= 1; 
    }
    return this.current();
  }
  
}

modules.exports = Iterator; 