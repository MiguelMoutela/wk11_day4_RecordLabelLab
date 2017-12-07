const Record = function (artist, title, genre, price) {
  this.artist = artist;
  this.title = title;
  this.genre = genre;
  this.price = price;
};

Record.prototype.printInfo = function () {
  const string = `${this.artist}, ${this.title}, ${this.genre}, ${this.price}`;
  console.log(string);
  return string;
};

module.exports = Record;
