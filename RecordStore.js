
const RecordStore = function(name, city, inventory) {
  this.name = name;
  this.city = city;
  this.inventory = inventory;
  this.balance = 0;
};

RecordStore.prototype.listInventory = function () {
  let arrayOfAlbumInfo = [];
  this.inventory.forEach(function (record) {
    arrayOfAlbumInfo.push(record.printInfo());
  });
  return arrayOfAlbumInfo.toString();
};

RecordStore.prototype.sell = function (record) {
  this.balance += record.price;
  this.inventory.splice(this.inventory.indexOf(record), 1);
}
RecordStore.prototype.finHealth = function() {
  let finHealth = [];
  finHealth.push(this.balance);
  const value = this.inventory.reduce(function (sum, record) {
    return sum + record.price;
  }, 0);
  finHealth.push(value)
  return finHealth;
}
RecordStore.prototype.seeRecordInventoriesByGenre = function(genre) {
  let RecordsOfAGenre = this.inventory.filter(function(record){
    return record.genre === genre;
  })
  return RecordsOfAGenre;
}

module.exports = RecordStore;
