class Item {
  constructor(id, title, description, price, img, dblClickCallback) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.price = price;
    this.img = img;
    this.dblClickCallback = dblClickCallback;
    this.htmlEl = this.buildHtmlEl();
    this.htmlEl.addEventListener("dblclick", (e) => this.dblClickCallback());
  }

  buildHtmlEl() {
    let itemHtmlEl = document.createElement("li");
    itemHtmlEl.classList.add("list-item");
    itemHtmlEl.innerHTML = `<img class="list-item__image" src="img/${this.img}">
    <div class="list-item__info">
        <h3 class="list-item__title">${this.title}</h3>
        <p class="list-item__price">Цена: ${this.price}₽</p>
    </div>`;
    return itemHtmlEl;
  }
}
