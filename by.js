const urlParams = new URLSearchParams(window.location.search);
const byNavn = urlParams.get("By");

var MenuItems = document.getElementById("MenuItems");
MenuItems.style.maxHeight = "0px";
function menutoggle() {
  if (MenuItems.style.maxHeight == "0px") {
    MenuItems.style.maxHeight = "200px";
  } else {
    MenuItems.style.maxHeight = "0px";
  }
}

const shoppingTemplate = document.querySelector("#shopping-template").content;
const shoppingContainer = document.querySelector("#shopping-container");

// Hente shopping data
fetch("shopping.json")
  .then((response) => response.json())
  .then((visShopping) => {
    const filteredShoppingData = visShopping.filter((shoppingSted) => shoppingSted.By === byNavn);

    filteredShoppingData.forEach((shoppingSted) => {
      const shoppingClone = shoppingTemplate.cloneNode(true);
      shoppingClone.querySelector(".category-item-header").textContent = shoppingSted.Navn;
      shoppingClone.querySelector(".category-item-address").textContent = shoppingSted.Adresse;
      shoppingClone.querySelector(".category-item-description").textContent = shoppingSted.Beskrivelse;
      shoppingContainer.appendChild(shoppingClone);
    });
  });

const restaurantTemplate = document.querySelector("#restaurant-template").content;
const restaurantContainer = document.querySelector("#restaurant-container");

// Hente restaurant data

fetch("restauranter.json")
  .then((respons) => respons.json())
  .then((visSpisesteder) => {
    const filteredRestaurantData = visSpisesteder.filter((spiseSted) => spiseSted.By === byNavn);

    filteredRestaurantData.forEach((spiseSted) => {
      const restaurantClone = restaurantTemplate.cloneNode(true);
      restaurantClone.querySelector(".category-item-header").textContent = spiseSted.Navn;
      restaurantClone.querySelector(".category-item-address").textContent = spiseSted.Adresse;
      restaurantClone.querySelector(".category-item-description").textContent = spiseSted.Beskrivelse;
      restaurantContainer.appendChild(restaurantClone);
    });
  });

const sightseeingTemplate = document.querySelector("#sightseeing-template").content;
const sightseeingContainer = document.querySelector("#sightseeing-container");

// Hente sightseeing data

fetch("sightseeing.json")
  .then((respons) => respons.json())
  .then((visSightseeing) => {
    const filteredSightseeingData = visSightseeing.filter((sightSeeing) => sightSeeing.By === byNavn);

    filteredSightseeingData.forEach((sightSeeing) => {
      const sightseeingClone = sightseeingTemplate.cloneNode(true);
      sightseeingClone.querySelector(".category-item-header").textContent = sightSeeing.Navn;
      sightseeingClone.querySelector(".category-item-address").textContent = sightSeeing.Adresse;
      sightseeingClone.querySelector(".category-item-description").textContent = sightSeeing.Beskrivelse;
      sightseeingContainer.appendChild(sightseeingClone);
    });
  });

const heroTemplate = document.querySelector("#hero-template").content;
const heroContainer = document.querySelector("#hero-container");

fetch("billeder.json")
  .then((response) => response.json())
  .then((heroes) => {
    const filteredHero = heroes.filter((hero) => hero.By === byNavn);

    filteredHero.forEach((hero) => {
      const heroClone = heroTemplate.cloneNode(true);
      heroClone.querySelector("h1").textContent = hero.By;
      heroClone.querySelector("img").src = "img/" + hero.billede;
      heroContainer.appendChild(heroClone);
    });
  });
