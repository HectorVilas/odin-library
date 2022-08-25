let myLibrary = [];

//store globally the index for editing/deleting existing card
let idx;

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

//book constructor
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
};



// - - - functions - - -

//adds a new book to myLibrary, then shows all books on page
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

//edit or delete existing book in myLibrary
function edditBookOnLibrary() {
  //TODO: get value from data-index
  if(this.className.includes("save")){
    console.log("must save");
  } else if(this.className.includes("delete")){
    console.log("must delete");
  };
}

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

    edit.addEventListener("click", toggleModal);

    const image = document.createElement("img");
    image.src = "./media/icons/edit.png";
    edit.appendChild(image);
    card.appendChild(edit);

    main.appendChild(card);
  });
};

//show/hide modal and it's button depending context
function toggleModal() {
  //add book
  if(this.className.includes("btn-add-book")) { 
    modalBook.showModal();
    modalBtnsAdding.classList.remove("hidden");
    modalTitle.value = "";
    modalAuthor.value = "";
    modalPages.value = "";
    modalRead.checked = false;
    //close modal, no changes
  } else if(this.className.includes("close")) { 
    modalBook.close();
    //edit book
  } else {
    idx = this.parentNode.getAttribute("data-index");
    modalBook.showModal();
    modalBtnsEditing.classList.remove("hidden");
    modalTitle.value = myLibrary[idx].title;
    modalAuthor.value = myLibrary[idx].author;
    modalPages.value = myLibrary[idx].pages;
    modalRead.checked = myLibrary[idx].read;
  };
};

//hide buttons so only relevants can be shown when open
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
[btnModalSave,btnModalDelete].forEach(btn => {
  btn.addEventListener("click", edditBookOnLibrary);
});

