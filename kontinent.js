var MenuItems = document.getElementById("MenuItems");
MenuItems.style.maxHeight = "0px";
function menutoggle() {
  if (MenuItems.style.maxHeight == "0px") {
    MenuItems.style.maxHeight = "200px";
  } else {
    MenuItems.style.maxHeight = "0px";
  }
}

const kontinentUrl = "https://storbyer-7059.restdb.io/rest/kontinenter";

const kontinentOptions = {
  headers: {
    "x-apikey": "63f33d07478852088da6849f",
  },
};

function hentKontinenter() {
  fetch(kontinentUrl, kontinentOptions)
    .then((response) => response.json())
    .then(visKontinent);
}

function visKontinent(kontinent) {
  console.log(kontinent);
}

hentKontinenter();
