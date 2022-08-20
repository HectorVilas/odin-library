const
  main = document.querySelector("main"),
  card = document.querySelector(".card");

for(let i = 0; i < 15; i++){
  const clone = card.cloneNode(true);
  main.appendChild(clone);
}

