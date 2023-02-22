var MenuItems = document.getElementById("MenuItems");
MenuItems.style.maxHeight = "0px";
function menutoggle() {
  if (MenuItems.style.maxHeight == "0px") {
    MenuItems.style.maxHeight = "200px";
  } else {
    MenuItems.style.maxHeight = "0px";
  }
}

// Get the value of the parameter from the URL
const urlParams = new URLSearchParams(window.location.search);
const kontinentNavn = urlParams.get("Kontinent");
const byNavn = urlParams.get("By");

const byTemplate = document.querySelector("#by-template").content;
const byContainer = document.querySelector(".byer");

// Fetch the data
fetch("byer.json")
  .then((response) => response.json())
  .then((visBy) => {
    // Filter the data based on the value of kontinent.Navn
    const filteredData = visBy.filter((by) => by.Kontinent === kontinentNavn);

    // Display the filtered records
    filteredData.forEach((by) => {
      // Add code here to display each record
      const clone = byTemplate.cloneNode(true);
      clone.querySelector("img").src = "img/" + by.Billede;
      clone.querySelector("a").textContent = by.Navn;
      clone.querySelector("a").href = "by.html?By=" + by.Navn;
      byContainer.appendChild(clone);
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
