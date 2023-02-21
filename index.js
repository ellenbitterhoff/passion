var MenuItems = document.getElementById("MenuItems");
MenuItems.style.maxHeight = "0px";
function menutoggle() {
  if (MenuItems.style.maxHeight == "0px") {
    MenuItems.style.maxHeight = "200px";
  } else {
    MenuItems.style.maxHeight = "0px";
  }
}

function hentKontinenter() {
  fetch("kontinenter.json")
    .then((response) => response.json())
    .then(visKontinent);
}

const kontinentTemplate = document.querySelector("#card-template").content;
const kontinentContainer = document.querySelector(".card_layout");

function visKontinent(kontinent) {
  kontinent.forEach((kontinent) => {
    const clone = kontinentTemplate.cloneNode(true);
    clone.querySelector("img").src = "img/" + kontinent.Billede;
    clone.querySelector("h3").textContent = kontinent.Navn;
    clone.querySelector("p").textContent = kontinent.Beskrivelse;
    clone.querySelector("a").href = "kontinent.html?Kontinent=" + kontinent.Navn;
    kontinentContainer.appendChild(clone);
  });
}

hentKontinenter();
