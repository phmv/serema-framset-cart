let items = [];

window.onload = function () {
  let cartFrame = parent.frames[1];
  cartFrame.window.postMessage({ event_id: "add_to_cart", item: { id: "item_1", name: "item1-name" } }, "*");
};
