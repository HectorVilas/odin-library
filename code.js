const
  main = document.querySelector("main"),
  card = document.querySelector(".card");

for(let i = 0; i < 15; i++){
  const clone = card.cloneNode(true);
  main.appendChild(clone);
}

const cards = document. querySelectorAll(".card");
[cards[2],cards[4],cards[5],cards[8],cards[9],cards[12],cards[14]]
  .forEach(crd => crd.classList.add("read"));