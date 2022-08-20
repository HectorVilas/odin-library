# odin-library

## Live: 
## https://hectorvilas.github.io/odin-library/

---

## About the project:

This time I'm making a library. This will be a single page, where the user can make a list with books, indicating name, author, number of pages and if it was read or not.

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
- - a disabled checked/unchecked checkbox showing the "read" status
- - an "edit" button
- an edit/add book modal with:
- - an input text for book title
- - an input text for author
- - an input number for pages
- - a checkbox for "read"
- - a "save"/"add" button (context sensitive)
- - a "cancel"/"delete" button (context sensitive)

### the code:
- an array to store all the books as objects
- a function constructor that will have:
- - an array for the book's title
- - an array for the book's author name
- - a num primitive for number of pages
- - a boolean for "read" status
- a prototype for a shared function to toggle the "read" status
- as sugested by the course, the index may be stored in the DOM as a data-attribute

I think this is enough to start. As always, I'll update this README.md with my progress.

## update 1
I started with the project, nothing special, just a `<header>` and a `<main>`. I've been browsing for color palletes, but I think I need more than those two things before deciding for this, so I made everything grayscale for now.

I downloaded the Coffee Tin font from [here](https://www.1001freefonts.com/coffee-tin.font) to use in the project. This font looks amazing, but I'm not sure how I should handle it, having a very black top half and mostly transparent bottom half. For now I'm using it in the title.

After this, I started writing the `CSS`, preparing the terrain for the cards. I went for the `grid` display, with `auto-fit` for colums, so it can adjust itself dynamically depending on the viewport width.

Then I started with the card design. It looked so bland, so I changed it's borders and added a linear-gradient to make it like a book. It was going to have a disabled checkbox to indicate the read status, but I went for something a little different: a ribbon with a "read" message wrapped in the corner of the book (the card).

![](READMEmd/progress01.png)

The ribbon is a `::before` and `::after`. The text is isolated in one of those so I can rotate it 45° without rotating the full object. The other one is the ribbon itself, it's shape was made with `clip-path`, then moved to the bottom left of the card. A `box-shadow` has been applied with `inset` to give it a 3D feeling, like going around the book.

For now those cards are placeholders. `JavaScript` has only been used to clone the card so I can see how it behaves with thy dynamic `grid`. Then I added the "read" class to some of the cards to check how the ribbon looks.

The card got a little edit:

![](READMEmd/progress02.gif)

First the `:hover` had a transition, but felt weird having a button, so I change id to a glow effect. I'm still not sure if I'm going to keep it, everything in the page now looks... blurry.

I also spent some time drawing a new icon for the edit button. I think now I get how InkScape works. I was especting to draw with vectors freely, mergin nodes and especting to still be a single object (like I did in the old Macromedia Flash 5 in my teen years). So I drew the pencil with individual lines, then re-drew each part as an individual object.

### next steps
I want to play a little more with `CSS`, maybe add something else in the header (I'm even thinking on making it into a footer), try some palletes and fonts, then I should start working with the code.