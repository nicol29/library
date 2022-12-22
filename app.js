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

function displayBooks() {
  const outputBookDiv = document.createElement('div');
  outputBookDiv.classList.add('output');

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
  deleteButton.dataset.index = numberOfBooks;

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
    myLibrary.splice(e.target.dataset.index, 1);
    e.target.parentNode.parentNode.remove();

    numberOfBooks -= 1;
  }
});
