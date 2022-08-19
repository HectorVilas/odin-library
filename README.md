# odin-library

## Live: 
## https://hectorvilas.github.io/odin-library/

---

## About the project:

This time I'm making a library. This will be a single page, where the user can make a list with books, indicating name, author, number of pages and if it was readed or not.

This is just another practice. This time it's about object constructors, first with the "old" way (`function` constructors and `prototype`s), then the modern way (`class`, `constructor`, etc), the "syntactical sugar" way, as introduced in ECMAScript 6 in 2015.

I took a peek to the next lessons because I wanted to use classes, but the code needs to be written the "old" way, then be refactored with `class`, so I'm going to start with function constructors.

This is how it should start:

```javascript
let myLibrary = [];

function Book() {
  // the constructor...
}

function addBookToLibrary() {
  // do stuff here
}
```

## what I plan to do:

I was thinking on making something more visual, like a bookshelf with physical books representing each one, but I may get carried away from the objective, so I'll start with something basic, then go nuts with the design. As a little roadmap, here is what I need:

### the page:
- a header
- an "add book" button
- an image for the empty state and some sugestion
- the main content with `display: grid` to show the books list in cards, with:
- - the book title
- - the author
- - number of pages
- - a disabled checked/unchecked checkbox showing the "readed" status
- - an "edit" button
- an edit/add book modal with:
- - an input text for book title
- - an input text for author
- - an input number for pages
- - a checkbox for "readed"
- - a "save"/"add" button (context sensitive)
- - a "cancel"/"delete" button (context sensitive)

### the code:
- an array to store all the books as objects
- a function constructor that will have:
- - an array for the book's title
- - an array for the book's author name
- - a num primitive for number of pages
- - a boolean for "readed" status
- a prototype for a shared function to toggle the "readed" status
- as sugested by the course, the index may be stored in the DOM as a data-attribute

I think this is enough to start. As always, I'll update this README.md with my progress.