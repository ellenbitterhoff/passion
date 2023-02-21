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

const shoppingTemplate = document.querySelector("#shopping-template").content;
const shoppingContainer = document.querySelector("#shopping-container");

function visShopping(shoppingSted) {
  shoppingSted.forEach((shoppingSted) => {
    const clone = shoppingTemplate.cloneNode(true);
    clone.querySelector(".category-item-header").textContent = shoppingSted.Navn;
    clone.querySelector(".category-item-address").textContent = shoppingSted.Adresse;
    clone.querySelector(".category-item-description").textContent = shoppingSted.Beskrivelse;
    shoppingContainer.appendChild(clone);
  });
}
hentShopping();

// Hente restaurant data fra restdb

function hentSpisesteder() {
  fetch("restauranter.json")
    .then((response) => response.json())
    .then(visSpisesteder);
}

const restaurantTemplate = document.querySelector("#shopping-template").content;
const restaurantContainer = document.querySelector("#restaurant-container");

function visSpisesteder(spiseSted) {
  spiseSted.forEach((spiseSted) => {
    const clone = restaurantTemplate.cloneNode(true);
    clone.querySelector(".category-item-header").textContent = spiseSted.Navn;
    clone.querySelector(".category-item-address").textContent = spiseSted.Adresse;
    clone.querySelector(".category-item-description").textContent = spiseSted.Beskrivelse;
    restaurantContainer.appendChild(clone);
  });
}
hentSpisesteder();

// Hente sightseeing data fra restdb

function hentSightseeing() {
  fetch("sightseeing.json")
    .then((response) => response.json())
    .then(visSightseeing);
}

const sightseeingTemplate = document.querySelector("#sightseeing-template").content;
const sightseeingContainer = document.querySelector("#sightseeing-container");

function visSightseeing(sightSeeing) {
  sightSeeing.forEach((sightSeeing) => {
    console.log(sightSeeing);
    const clone = sightseeingTemplate.cloneNode(true);
    clone.querySelector(".category-item-header").textContent = sightSeeing.Navn;
    clone.querySelector(".category-item-address").textContent = sightSeeing.Adresse;
    clone.querySelector(".category-item-description").textContent = sightSeeing.Beskrivelse;
    sightseeingContainer.appendChild(clone);
  });
}
hentSightseeing();
