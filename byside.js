function hentByer() {
  fetch("byer.json")
    .then((response) => response.json())
    .then(visBy);
}

const byTemplate = document.querySelector("#by-template").content;
const byContainer = document.querySelector(".byer");

function visBy(by) {
  by.forEach((by) => {
    const clone = byTemplate.cloneNode(true);
    clone.querySelector("img").src = "img/" + by.Billede;
    clone.querySelector("a").textContent = by.Navn;
    byContainer.appendChild(clone);
  });
}

hentByer();
