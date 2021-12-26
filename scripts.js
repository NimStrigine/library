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

const book1 = new Book("test1", "author1", 10, false);
const book2 = new Book("test2", "author2", 20, false);
myLibrary.push(book1);
myLibrary.push(book2);

// refreshLibrary();
// console.log(library.children);
// removeChildren();

// const book3 = new Book("test3", "author3", 30, true);
// myLibrary.push(book3);
// refreshLibrary();
// // console.log(library.children);

function removeChildren() {
  let booklist = document.querySelectorAll(".card");
  // console.log(booklist);
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
    divBook.dataset.indexNumber = myLibrary.indexOf(book);
    console.log(myLibrary.indexOf(book));
    console.log(divBook);
    divBook.innerText = book.info();
    divBook.appendChild(removeBtn);
    library.appendChild(divBook);
    removeBtn.addEventListener("click", () => removeBook(removeBtn.parentNode));
    // console.log(removeBtn.parentNode);
  }
};

function removeBook(node) {
  myLibrary.splice(node.dataset.indexNumber, 1);
  node.parentNode.removeChild(node);
  // console.log(myLibrary);
  // console.log(library.children);
}

// bring up form for new book
addBook.addEventListener("click", () => {
  popup.style.visibility = "visible";
});

//save book info
save.addEventListener("click", (e) => {
  e.preventDefault();
  let title = document.getElementByName("#title").value;
  const author = document.querySelector("#author").value;
  const pages = document.querySelector("#pages").value;
  const read = document.querySelector("#read").value;

  const newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
  refreshLibrary();
  title.value = "";
  author = "";
  pages.value = "";
  read.value = false;
});