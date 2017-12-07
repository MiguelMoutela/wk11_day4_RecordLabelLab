const assert = require('assert');
const Record = require('../Record.js');

describe ('Record', function (){
  let record;
  beforeEach (function() {
    record = new Record('artist','title','genre','price');
  });

  it('should have an artist', function() {
    assert.strictEqual(record.artist, 'artist')
  });
  it('should have an title', function() {
    assert.strictEqual(record.title, 'title')
  });
  it('should have an genre', function() {
    assert.strictEqual(record.genre, 'genre')
  });
  it('should have an price', function() {
    assert.strictEqual(record.price, 'price')
  });
  it('should print out info', function() {
    assert.strictEqual(record.printInfo(), 'artist, title, genre, price')
  });
});
