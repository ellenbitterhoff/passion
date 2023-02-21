var MenuItems = document.getElementById("MenuItems");
MenuItems.style.maxHeight = "0px";
function menutoggle() {
  if (MenuItems.style.maxHeight == "0px") {
    MenuItems.style.maxHeight = "200px";
  } else {
    MenuItems.style.maxHeight = "0px";
  }
}

// Hente shopping data fra restdb

function hentShopping() {
  fetch("shopping.json")
    .then((response) => response.json())
    .then(visShopping);
}

const template = document.querySelector("#item-template").content;
const container = document.querySelector(".category-content-container");

function visShopping(shoppingSted) {
  shoppingSted.forEach((shoppingSted) => {
    if (!shoppingSted.billede) {
      const clone = template.cloneNode(true);
      clone.querySelector(".category-item-header").textContent = shoppingSted.Navn;
      clone.querySelector(".category-item-address").textContent = shoppingSted.Adresse;
      clone.querySelector(".category-item-description").textContent = shoppingSted.Beskrivelse;
      container.appendChild(clone);
    }
  });
}
hentShopping();

// Hente restaurant data fra restdb

function hentSpisesteder() {
  fetch("restauranter.json")
    .then((response) => response.json())
    .then(visSpisesteder);
}

function visSpisesteder(spiseSteder) {
  console.log(spiseSteder);
}

hentSpisesteder();

// Hente sightseeing data fra restdb

function hentSightseeing() {
  fetch("sightseeing.json")
    .then((response) => response.json())
    .then(visSightseeing);
}

function visSightseeing(sightSeeing) {
  console.log(sightSeeing);
}

hentSightseeing();
