window.onload = function () {
  let itemsFrame = parent.frames[0];
  window.addEventListener("message", (event) => {
    console.log(`Event data received: ${JSON.stringify(event.data.item)}`);
  });
};
