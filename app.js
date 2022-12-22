const submitButton = document.querySelector('.submit-button');
const addBookButton = document.querySelector('.add > button');
const titleInput = document.querySelector('#title');
const authorInput = document.querySelector('#author');
const pagesInput = document.querySelector('#pages');
const checkboxInput = document.querySelector('#read');
const booksContainer = document.querySelector('.grid-container');
const divBook = document.querySelector('.input');

const myLibrary = [];
let numberOfBooks = 0;

function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
}

Book.prototype.changeReadStatus = function () {
  if (this.isRead === false) {
    this.isRead = true;
  } else {
    this.isRead = false;
  }
};

function displayBooks() {
  const outputBookDiv = document.createElement('div');
  outputBookDiv.classList.add('output');
  outputBookDiv.dataset.index = numberOfBooks;

  const titleH2 = document.createElement('h2');
  titleH2.innerText = myLibrary[numberOfBooks].title;
  outputBookDiv.appendChild(titleH2);

  const divAuthor = document.createElement('div');
  divAuthor.innerText = `Author: ${myLibrary[numberOfBooks].author}`;
  outputBookDiv.appendChild(divAuthor);

  const divPages = document.createElement('div');
  divPages.innerText = `No. of Pages: ${myLibrary[numberOfBooks].pages}`;
  outputBookDiv.appendChild(divPages);

  const divRead = document.createElement('div');
  divRead.innerText = `Finshed Reading: ${myLibrary[numberOfBooks].isRead}`;
  outputBookDiv.appendChild(divRead);

  const buttonDiv = document.createElement('div');
  const deleteButton = document.createElement('button');
  deleteButton.classList.add('deleteButton');
  deleteButton.innerText = 'Remove';

  const readButton = document.createElement('button');
  readButton.classList.add('readButton');
  if (myLibrary[numberOfBooks].isRead) {
    readButton.innerText = 'Read';
  } else {
    readButton.innerText = 'Not Read';
  }

  buttonDiv.appendChild(readButton);
  buttonDiv.appendChild(deleteButton);
  outputBookDiv.appendChild(buttonDiv);
  booksContainer.appendChild(outputBookDiv);

  numberOfBooks += 1;
}

addBookButton.addEventListener('click', () => {
  divBook.style.display = 'block';
});

function addBookToLibrary(title, author, pages, isRead) {
  myLibrary[numberOfBooks] = new Book(title, author, pages, isRead);

  displayBooks();
  divBook.style.display = 'none';
}

submitButton.addEventListener('click', () => {
  addBookToLibrary(
    titleInput.value,
    authorInput.value,
    pagesInput.value,
    checkboxInput.checked,
  );

  titleInput.value = '';
  authorInput.value = '';
  pagesInput.value = '';
  checkboxInput.checked = false;
});

booksContainer.addEventListener('click', (e) => {
  if (e.target.classList.value === 'deleteButton') {
    const indexToDelete = e.target.parentNode.parentNode.dataset.index;
    myLibrary.splice(indexToDelete, 1);
    e.target.parentNode.parentNode.remove();

    numberOfBooks -= 1;
  } else if (e.target.classList.value === 'readButton') {
    const indexToChange = e.target.parentNode.parentNode.dataset.index;
    myLibrary[indexToChange].changeReadStatus();

    if (myLibrary[indexToChange].isRead) {
      e.target.innerText = 'Read';
    } else {
      e.target.innerText = 'Not Read';
    }

    e.target.parentNode.previousSibling.innerText = `Finshed Reading: ${myLibrary[indexToChange].isRead}`;
  }
});
