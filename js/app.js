// Place heroes in correct section
heroes.forEach(hero => {
  const card = document.createElement("div");
  card.classList.add("hero-card");
  card.innerHTML = `
    <img src="${hero.image || "assets/heroes/placeholder.png"}" alt="${hero.name}">
    <p>${hero.name}</p>
    <button class="rate-btn">Rate</button>
  `;

  // Add rating functionality
  card.querySelector(".rate-btn").addEventListener("click", () => {
    rateHero(hero.name);
  });

  if (hero.position === "Commander") {
    commanderList.appendChild(card);
  } else if (hero.position === "Admiral") {
    admiralList.appendChild(card);
  } else if (generalSlots[hero.position]) {
    generalSlots[hero.position].appendChild(card);
  }
});

// Simple rating function
function rateHero(name) {
  alert(`You rated ${name}!`);
}
