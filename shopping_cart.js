window.onload = function () {
  let itemsFrame = parent.frames[0];
  let cartContainerEl = document.querySelector(".cart-container");
  let cartSumNumberEl = document.querySelector(".cart-sum__number");

  let cartItemsCollection = new Map();
  let cartSum = 0;
  redrawCartSum();

  window.addEventListener("message", (event) => {
    if (event.data.event == "add_to_cart") {
      addToCart(event.data.item);
    }
  });

  function addToCart(item) {
    let itemObj = new Item(item.id, item.title, item.description, item.price, item.img, deleteFromCart);
    cartItemsCollection.set(itemObj.id, itemObj);
    cartContainerEl.appendChild(itemObj.htmlEl);
    cartSum += item.price;
    redrawCartSum();
  }

  function deleteFromCart() {
    itemsFrame.window.postMessage({ event: "remove_from_cart", itemId: this.id }, "*");
    cartContainerEl.removeChild(this.htmlEl);
    cartSum -= cartItemsCollection.get(this.id).price;
    cartItemsCollection.delete(this.id);
    redrawCartSum();
  }

  function redrawCartSum() {
    cartSumNumberEl.innerHTML = `${cartSum}₽`;
  }
};
