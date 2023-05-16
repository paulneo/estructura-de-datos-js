class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  hashMethod(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  set(key, value) {
    const address = this.hashMethod(key);
    console.log(address);
    if (!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key, value]);
    return this.data;
  }

  get(key) {
    const address = this.hashMethod(key);
    console.log(address);

    const currentBucket = this.data[address];

    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          return currentBucket[i][1];
        }
      }
    }
    return undefined;
  }

  delete(key) {
    const address = this.hashMethod(key);
    const currentBucket = this.data[address];
    let deleteCurrent = undefined;
    if (currentBucket.length > 0) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          deleteCurrent = [key, currentBucket[i][1]];
          this.data[address].splice(i, 1);
        }
      }
    }
    return deleteCurrent;
  }

  getAllKeys() {
    return this.data.flat().map((el) => el[0]);
  }
}

const myHashTable = new HashTable(50);
