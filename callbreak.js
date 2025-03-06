// script.js
const suits = ['♠', '♥', '♦', '♣'];
const ranks = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
const cardContainer = document.getElementById("cardContainer");

function createCards() {
    cardContainer.innerHTML = "";
    suits.forEach(suit => {
        let suitColumn = document.createElement("div");
        suitColumn.classList.add("suit-column");
        ranks.forEach(rank => {
            let card = document.createElement("div");
            card.classList.add("card");
            card.textContent = `${rank}${suit}`;
            card.addEventListener("click", () => card.classList.toggle("played"));
            suitColumn.appendChild(card);
        });
        cardContainer.appendChild(suitColumn);
    });
}

function resetCards() {
    document.querySelectorAll(".card").forEach(card => card.classList.remove("played"));
}

createCards();
