const assert = require('assert');
const RecordStore = require('../RecordStore.js');
const Record = require('../Record.js');

describe ('RecordStore', function (){
  let record;
  let recordStore;
  beforeEach (function() {
    record = new Record('artist', 'title', 'genre', 'price')
    recordStore = new RecordStore('name', 'city', [record]);
  });

  it('should have a name', function() {
    assert.strictEqual(recordStore.name, 'name')
  });

  it('should have a city', function() {
    assert.strictEqual(recordStore.city, 'city')
  });

  it('should have an inventory', function() {
    assert.deepEqual(recordStore.inventory, [record])
  });

});
