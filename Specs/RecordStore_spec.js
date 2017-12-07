const assert = require('assert');
const RecordStore = require('../RecordStore.js');
const Record = require('../Record.js');

describe ('RecordStore', function (){
  let record;
  let record2;
  let recordStore;
  beforeEach (function() {
    record = new Record('artist', 'title', 'genre', 20)
    record2 = new Record('artist2', 'title', 'genre', 30)
    recordStore = new RecordStore('name', 'city', [record, record2]);
  });

  it('should have a name', function() {
    assert.strictEqual(recordStore.name, 'name')
  });

  it('should have a city', function() {
    assert.strictEqual(recordStore.city, 'city')
  });

  it('should have an inventory', function() {
    assert.deepEqual(recordStore.inventory, [record, record2])
  });

  it('should have a balance', function() {
    assert.strictEqual(recordStore.balance, 0)
  });

  it('should print out all inventory info', function() {
    assert.strictEqual(recordStore.listInventory(), 'artist, title, genre, 20,artist2, title, genre, 30')
  });

  it('should sell records', function() {
    recordStore.sell(record2);
    assert.deepEqual(recordStore.inventory, [record]);
    assert.strictEqual(recordStore.balance, 30);
  })
  it('should show finHealth', function() {
    assert.deepEqual(recordStore.finHealth(), [0,50])
  })

});
