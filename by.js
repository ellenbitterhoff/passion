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

const shoppingUrl = "https://storbyer-7059.restdb.io/rest/shopping";

const shoppingOptions = {
  headers: {
    "x-apikey": "63f33d07478852088da6849f",
  },
};

function hentShopping() {
  fetch(shoppingUrl, shoppingOptions)
    .then((response) => response.json())
    .then(visShopping);
}

function visShopping(shoppingSteder) {
  console.log(shoppingSteder);
}

hentShopping();

// Hente restaurant data fra restdb

const restaurantUrl = "https://storbyer-7059.restdb.io/rest/spisesteder";

const restaurantOptions = {
  headers: {
    "x-apikey": "63f33d07478852088da6849f",
  },
};

function hentSpisesteder() {
  fetch(restaurantUrl, restaurantOptions)
    .then((response) => response.json())
    .then(visShopping);
}

function visSpisesteder(spiseSteder) {
  console.log(spiseSteder);
}

hentSpisesteder();

// Hente sightseeing data fra restdb

const sightseeingUrl = "https://storbyer-7059.restdb.io/rest/sightseeing";

const sightseeingOptions = {
  headers: {
    "x-apikey": "63f33d07478852088da6849f",
  },
};

function hentSightseeing() {
  fetch(sightseeingUrl, sightseeingOptions)
    .then((response) => response.json())
    .then(visShopping);
}

function visSightseeing(sightSeeing) {
  console.log(sightSeeing);
}

hentSightseeing();
