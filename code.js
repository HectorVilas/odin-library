let myLibrary = [
  // {title: "book 1", author: "author 1", pages: 100, read: false},
  // {title: "book 2", author: "author 2", pages: 200, read: true},
  // {title: "book 3", author: "author 3", pages: 300, read: false},
  // {title: "book 4", author: "author 4", pages: 400, read: false},
  // {title: "book 5", author: "author 5", pages: 500, read: false}
];

const
  main = document.querySelector("main"),
  card = document.querySelector(".card"),
  btnAddBook = document.querySelector(".btn-add-book"),
  modalBook = document.querySelector(".modal-add-edit"),
  //inputs
  modalTitle = modalBook.querySelector("#title"),
  modalAuthor = modalBook.querySelector("#author"),
  modalPages = modalBook.querySelector("#pages"),
  modalRead = modalBook.querySelector("#read"),
  //buttons sets
  modalBtnsAdding = modalBook.querySelector(".buttons.adding"),
  modalBtnsEditing = modalBook.querySelector(".buttons.editing"),
  //buttons
  btnModalAllClose = modalBook.querySelectorAll(".close"),
  btnModalAdd = modalBook.querySelector(".add"),
  btnModalSave = modalBook.querySelector(".save"),
  btnModalDelete = modalBook.querySelector(".delete");


// - - - constructors - - -

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
};




// - - - functions - - -

//
function addBookToLibrary() {
  let newBook = new Book(
    modalTitle.value,
    modalAuthor.value,
    modalPages.value,
    modalRead.checked
  );
  myLibrary.push(newBook);
  //redraw
  placeBooks();
  //close modal menu
  modalBook.close();
};

//place cards for each book in myLibrary, deleting the existing ones first
function placeBooks() {
  main.innerHTML = "";

  myLibrary.forEach((book, i) => {
    const card = document.createElement("div");
    card.classList.add("card");
    
    if(book.read) card.classList.add("read");
    
    card.setAttribute("data-index", i);

    const title = document.createElement("p");
    title.classList.add("title");
    title.innerText = book.title;
    card.appendChild(title);
    
    const author = document.createElement("p");
    author.classList.add("author");
    author.innerText = `by ${book.author}`;
    card.appendChild(author);

    const pages = document.createElement("p");
    pages.classList.add("pages");
    pages.innerText = `${book.pages} pages`;
    card.appendChild(pages);
    const edit = document.createElement("button");
    edit.classList.add("edit");
    const image = document.createElement("img");
    image.src = "./media/icons/edit.png";
    edit.appendChild(image);
    card.appendChild(edit);

    main.appendChild(card);
  });
};

function toggleModal() {
  if(this.className.includes("btn-add-book")) {
    modalBook.showModal();
    modalBtnsAdding.classList.remove("hidden");
    modalTitle.value = "";
    modalAuthor.value = "";
    modalPages.value = "";
    modalRead.checked = false;
  } else {
    modalBook.close();
  };
};

function hideModalButtons() {
  [modalBtnsAdding, modalBtnsEditing].forEach(sets => {
    sets.classList.add("hidden");
  });
};


// - - - listeners - - -
btnAddBook.addEventListener("click", toggleModal);
btnModalAllClose.forEach(btn => {
  btn.addEventListener("click", toggleModal);
}) 
btnModalAdd.addEventListener("click", addBookToLibrary);
modalBook.addEventListener("close", hideModalButtons);

// - - - run on load - - -
placeBooks();