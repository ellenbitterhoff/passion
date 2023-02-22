function kontinentLinks() {
  fetch("kontinenter.json")
    .then((response) => response.json())
    .then(linkContinent);
}

const menuTemplate = document.querySelector("#continent-links").content;
const menuContainer = document.querySelector("#MenuItems");

function linkContinent(kontinentLink) {
  const aTags = menuTemplate.querySelectorAll("a");
  for (let i = 0; i < aTags.length; i++) {
    const kontinentName = aTags[i].textContent;
    aTags[i].href = "kontinent.html?Kontinent=" + encodeURIComponent(kontinentName);
  }
  menuContainer.appendChild(menuTemplate);
}

kontinentLinks();
