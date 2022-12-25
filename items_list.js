let itemsData = [
  {
    id: "guitar-1",
    title: "Бас гитара Ibanez BTB845-CBL",
    description: "Модель расцветки Cerulean Blue Burst, 24 лада. Корпус — окуме, ясень, тополь; гриф — клен, орех; накладка — ятоба. HH, 3-полосный EQ, громкость, баланс.",
    price: 104000,
    img: "guitar-ibanez.jpg",
  },
  {
    id: "drums-1",
    title: "Ударная установка Pearl PSD923XP/ C767",
    description: "Ударная установка из 3-х барабанов, цвет Ocean Ripple, без стоек.",
    price: 179000,
    img: "drums-pearl.jpg",
  },
  {
    id: "guitar-2",
    title: "Электрогитара Solar Guitars A1.7AC",
    description: "7-струнная электрогитара, корпус - ольха, гриф - клен, накладка - черное дерево, звукосниматели Fishman Fluence, бридж Evertune, цвет черный матовый",
    price: 145990,
    img: "guitar-solar.jpg",
  },
  {
    id: "mic-1",
    title: "Микрофон Fluid Audio Axis",
    description: "Модель расцветки Cerulean Blue Burst, 24 лада. Корпус — окуме, ясень, тополь; гриф — клен, орех; накладка — ятоба. HH, 3-полосный EQ, громкость, баланс.",
    price: 104000,
    img: "mic-fluid.jpg",
  },
  {
    id: "amplif-1",
    title: "Комбоусилитель гитарный Boss KATANA-AIR",
    description: "Гитарный усилитель",
    price: 104000,
    img: "amplifier-boss.jpg",
  },
];

window.onload = function () {
  let cartFrame = parent.frames[1];

  let itemsContainerEl = document.querySelector(".items-container");
  let statusBarEl = document.querySelector(".status-bar");
  let itemsCollection = new Map();

  itemsData.forEach((item) => {
    let itemObj = new Item(item.id, item.title, item.description, item.price, item.img, moveToCart, showDescription);
    itemsCollection.set(itemObj.id, itemObj);
    itemsContainerEl.appendChild(itemObj.htmlEl);
  });

  window.addEventListener("message", (event) => {
    if (event.data.event == "remove_from_cart") {
      removeFromCart(event.data.itemId);
    }
  });

  function moveToCart() {
    let itemToPass = { id: this.id, title: this.title, description: this.description, price: this.price, img: this.img };
    cartFrame.window.postMessage({ event: "add_to_cart", item: itemToPass }, "*");
    itemsContainerEl.removeChild(this.htmlEl);
    statusBarEl.innerHTML = "";
  }

  function removeFromCart(id) {
    itemsContainerEl.appendChild(itemsCollection.get(id).htmlEl);
  }

  function showDescription() {
    statusBarEl.innerHTML = this.description;
  }
};
