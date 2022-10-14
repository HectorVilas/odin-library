let myLibrary = [
];

const placeholderBooks = [
  //this is a placeholder with top sellers, for testing
  {title:"Harry Potter and the Sorcerer's Stone",author:"J.K. Rowling",pages:"",read:false},
  {title:"The Hunger Games",author:"Suzanne Collins",pages:"",read:false},
  {title:"Twilight",author:"Stephenie Meyer",pages:"",read:false},
  {title:"To Kill A Mockingbird",author:"Harper Lee",pages:"",read:false},
  {title:"The Great Gatsby",author:"F. Scott Fitzgerald",pages:"",read:false},
  {title:"The Fault in Our Stars",author:"John Green",pages:"",read:false},
  {title:"1984",author:"George Orwell",pages:"",read:false},
  {title:"Pride and Prejudice",author:"Jane Austen",pages:"",read:false},
  {title:"Divergent",author:"Veronica Roth",pages:"",read:false},
  {title:"Harry Potter and the Prisoner of Azkaban",author:"J.K. Rowling",pages:"",read:false},
  {title:"The Hobbit",author:"J.R.R. Tolkien",pages:"",read:false},
  {title:"Harry Potter and the Deathly Hallows",author:"J.K. Rowling",pages:"",read:false},
  {title:"Animal Farm",author:"George Orwell",pages:"",read:false},
  {title:"The Diary of a Young Girl",author:"Anne Frank",pages:"",read:false},
  {title:"Harry Potter and the Chamber of Secrets",author:"J.K. Rowling",pages:"",read:false},
  {title:"The Catcher in the Rye",author:"J.D. Salinger",pages:"",read:false},
  {title:"Harry Potter and the Goblet of Fire",author:"J.K. Rowling",pages:"",read:false},
  {title:"Angels & Demons",author:"Dan Brown",pages:"",read:false},
  {title:"The Girl with the Dragon Tattoo",author:"Stieg Larsson",pages:"",read:false},
  {title:"Catching Fire",author:"Suzanne Collins",pages:"",read:false},
  // {title:"",author:"",pages:"",read:false},
];

//store globally the index for editing/deleting existing card
let idx;

const
  main = document.querySelector("main"),
  card = document.querySelector(".card"),
  btnAddBook = document.querySelector(".btn-add-book"),
  modalBook = document.querySelector(".modal-add-edit"),
  //inputs
  search = document.querySelector("#search"),
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


// - - - classes - - -

//refactor constructor as class
class Book {
  constructor(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
  
  toggleRead() {
    this.read = !this.read;
  }
}

// - - - functions - - -

//adds a new book to myLibrary, then shows all books on page
function addBookToLibrary() {
  if(modalTitle.value.length === 0) {
    modalTitle.classList.add("no-title");
    setTimeout(() => {
      modalTitle.classList.remove("no-title");
    }, 1000); 
    return;
  }
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
  //add image on empty state if no cards
  emptyState();
};

//edit or delete existing book in myLibrary
function edditBookOnLibrary() {
  if(modalTitle.value.length === 0) {
    modalTitle.classList.add("no-title");
    return;
  };
  if(this.className.includes("save")){
    myLibrary[idx].title = modalTitle.value;
    myLibrary[idx].author = modalAuthor.value;
    myLibrary[idx].pages = modalPages.value;
    if(myLibrary[idx].read != modalRead.checked) {
      myLibrary[idx].toggleRead();
    }

  } else if(this.className.includes("delete")){
    myLibrary = myLibrary.filter((item, i) => i != idx);
  };
  //place cards again and close modal
  placeBooks();
  modalBook.close();
  emptyState();
  filter();
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

    title.addEventListener("transitionend", title.classList.remove("no-title"))
    
    const author = document.createElement("p");
    author.classList.add("author");
    book.author.length > 0 ? author.innerText = `by ${book.author}` : author.innerText = "";
    card.appendChild(author);

    const pages = document.createElement("p");
    pages.classList.add("pages");
    book.pages.length > 0 ? pages.innerText = `${book.pages} pages` : pages.innerText = "";
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

//show image on empty state
function emptyState() {
  main.childElementCount === 0 ?
    main.classList.add("no-cards") :
    main.classList.remove("no-cards");
}

//filter list on each keypress in the search bar
function filter() {
  const userSearch = search.value.toLowerCase();
  const domTitles = document.querySelectorAll(".card .title");
  const domAuthors = document.querySelectorAll(".card .author");

  if(search.value.length > 0){

    for(let i = 0; i < domTitles.length; i++) {
      if(domTitles[i].innerText.toLowerCase().includes(userSearch)
      || domAuthors[i].innerText.toLowerCase().includes(userSearch)){
        domTitles[i].parentNode.classList.remove("hidden");
      } else {
        domTitles[i].parentNode.classList.add("hidden");
      }
    }
  } else {
    domTitles.forEach(title => title.parentNode.classList.remove("hidden"))
  };
  
  if(search.value === "bang!"){
    placeholderBooks.forEach(book => {
      let toBookClass = new Book(book.title, book.author, book.pages, book.read)
      myLibrary.push(toBookClass);
    })
    search.value = "";
    placeBooks();
    emptyState();
  }
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
search.addEventListener("input", filter);



//for testing
placeBooks();
emptyState();
search.value = "";