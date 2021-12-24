import {existsSync, readFileSync, unlink, writeFile} from 'fs'

class LocalStorage {
  storageFilaName = 'localStorage.json'

  constructor() {
    if (existsSync(this.storageFilaName)) {
      console.log(`Loading items from ${this.storageFilaName}`);
      const txtStorageContent = readFileSync(this.storageFilaName);
      this.items = JSON.parse(txtStorageContent);
    } else {
      this.items = {};
    }
  }

  get length() {
    return Object.keys(this.items).length;
  }

  getItem(key) {
    return this.items[key];
  }

  setItem(key, value) {
    this.items[key] = value;
    writeFile(this.storageFilaName, JSON.stringify(this.items), err => {
      if (err) {
        console.log(err);
      }
    })
  }

  clear() {
    this.items = {};
    unlink(this.storageFilaName, () => {
      console.log(`${this.storageFilaName} file removed.`);
    })
  }
}

module.exports = LocalStorage;