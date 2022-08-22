let myLibrary = [
  {title: "book 1", author: "author 1", pages: 100, read: false},
  {title: "book 2", author: "author 2", pages: 200, read: true},
  {title: "book 3", author: "author 3", pages: 300, read: false},
  {title: "book 4", author: "author 4", pages: 400, read: false},
  {title: "book 5", author: "author 5", pages: 500, read: false}
];

const
  main = document.querySelector("main"),
  card = document.querySelector(".card");


function Book() {
    // the constructor...
};

function addBookToLibrary() {
  // do stuff here
};

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



//run on load
placeBooks();