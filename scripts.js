let myLibrary = [];

function Book(title, author, pages, hasRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.hasRead = hasRead;
}

Book.prototype.info = function() {
  let readString = "not read";
  if (this.hasRead === true) {
    readString = "read";
  }
  return (this.title + " by " + this.author + ", " + this.pages + " pages, " + this.readString);
}

