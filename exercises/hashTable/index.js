// 

function HashTable () {
  this.size = 0;
  this.dataStore = {}
}

HashTable.prototype.toString = function () {
  return this.dataStore.toString();
}

HashTable.prototype.remove = function(key) {
  if(this.dataStore[key]) {
    delete this.dataStore[key];
    this.size -= 1;
    return this.dataStore;
  }
}

HashTable.prototype.put = function(key, value) {
  if(this.dataStore.hasOwnProperty(key)) {
    throw new Error("Hash table can not contain duplicates")
  } else {
    this.dataStore[key] = value;
    this.size += 1;
    return this.dataStore;
  }
}

HashTable.prototype.enumerate = function () {
  for (var el in this.dataStore) {
    console.log(el + " " + this.dataStore[el])
  }
}

HashTable.prototype.isEmpty = function() {
  return this.size > 0 ? false : true;
}

HashTable.prototype.clear = function() {
  this.dataStore = {};
  this.size = 0;
  return this.dataStore;
}

HashTable.prototype.contains = function(key) {
  if (this.dataStore.hasOwnProperty(key)) {
    return true
  } else {
    return false;
  }
}

var ht = new HashTable();
console.log(ht.put('color', 'red'))
console.log(ht.put('bike', 'yes'))
console.log(ht.remove('bike'))
console.log(ht.contains('color'))
console.log(ht.toString('color'))