const submitButton = document.querySelector('.submit-button');
const titleInput = document.querySelector('#title');
const authorInput = document.querySelector('#author');
const pagesInput = document.querySelector('#pages');
const checkboxInput = document.querySelector('#read');

const myLibrary = [];
let numberOfBooks = 0;

function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
}

function addBookToLibrary(title, author, pages, isRead) {
  myLibrary[numberOfBooks] = new Book(title, author, pages, isRead);

  numberOfBooks++;
  console.log(myLibrary);
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

function displayBooks() {

}
