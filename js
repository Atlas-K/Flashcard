const form = document.getElementById("add-card-form");
const categoryInput = document.getElementById("category");
const frontInput = document.getElementById("front");
const backInput = document.getElementById("back");
const cardsContainer = document.getElementById("cards-container");

let cards = [];

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const card = {
    category: categoryInput.value.trim(),
    front: frontInput.value.trim(),
    back: backInput.value.trim(),
    flipped: false
  };

  cards.push(card);
  renderCards();
  form.reset();
});

function renderCards() {
  cardsContainer.innerHTML = "";

  cards.forEach((card, index) => {
    const cardDiv = document.createElement("div");
    cardDiv.className = "card";
    cardDiv.innerHTML = `
      <div class="category">${card.category}</div>
      <p>${card.flipped ? card.back : card.front}</p>
    `;

    cardDiv.addEventListener("click", () => {
      card.flipped = !card.flipped;
      renderCards();
    });

    cardsContainer.appendChild(cardDiv);
  });
}
