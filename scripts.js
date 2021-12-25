let myLibrary = [];
const library = document.querySelector("#library");

// book constructor
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

// Info function, display props of book
Book.prototype.info = function() {
  let readString = "not read";
  if (this.read === true) {
    readString = "read";
  }
  return (this.title + "\r\n" + this.author + "\r\n" + this.pages + "\r\n" + readString);
}

const book1 = new Book("test1", "author1", 10, false);
const book2 = new Book("test2", "author2", 20, false);
myLibrary.push(book1);
myLibrary.push(book2);

for (let book of myLibrary) {
  const divBook = document.createElement("div");
  divBook.className = "card";
  divBook.innerText = book.info();
  library.appendChild(divBook);
};