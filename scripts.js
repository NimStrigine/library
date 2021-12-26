let myLibrary = [];
const library = document.querySelector("#library");
const addBook = document.querySelector("#add");
const popup = document.querySelector(".popup");
const save = document.querySelector("#save");

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
// Change read status function
Book.prototype.hasRead = function() {
  this.read = !this.read;
}

// clear DOM of books
function removeChildren() {
  let booklist = document.querySelectorAll(".card");
  for (let i = 0; i < booklist.length; i++) {
    booklist[i].remove();
  }
}

function refreshLibrary() {
  removeChildren();
  for (let book of myLibrary) {
    const divBook = document.createElement("div");
    const removeBtn = document.createElement("button");
    removeBtn.innerText = "Remove";
    divBook.className = "card";
    divBook.setAttribute("id", myLibrary.indexOf(book));
    divBook.innerText = book.info();
    divBook.appendChild(removeBtn);
    library.appendChild(divBook);
    removeBtn.addEventListener("click", () => removeBook(removeBtn.parentNode));
  }
};

// remove single book
function removeBook(node) {
  myLibrary.splice(node.dataset.indexNumber, 1);
  node.parentNode.removeChild(node);
}

// bring up form for new book
addBook.addEventListener("click", () => {
  popup.style.visibility = "visible";
});

// save book info
save.addEventListener("click", (e) => {
  e.preventDefault();
  let title = document.querySelector("#title");
  let author = document.querySelector("#author");
  let pages = document.querySelector("#pages");
  let read = document.querySelector("#read");

  const newBook = new Book(title.value, author.value, pages.value, read.checked);
  myLibrary.push(newBook);
  refreshLibrary();
  clearForm();
});

// clear and rehide form
function clearForm() {
  let title = document.querySelector("#title");
  let author = document.querySelector("#author");
  let pages = document.querySelector("#pages");
  let read = document.querySelector("#read");

  title.value = "";
  author.value = "";
  pages.value = "";
  read.checked = false;
  popup.style.visibility = "hidden";
}


// TEST STUFF
// const book1 = new Book("test1", "author1", 10, false);
// const book2 = new Book("test2", "author2", 20, false);
// myLibrary.push(book1);
// myLibrary.push(book2);

// refreshLibrary();
// console.log(library.children);
// removeChildren();

// const book3 = new Book("test3", "author3", 30, true);
// myLibrary.push(book3);
// refreshLibrary();
// // console.log(library.children);
