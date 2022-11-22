if (localStorage.getItem(element.id)) {
  const lastData = localStorage.getItem(element.id);
}

// const savedPicture = localStorage.getItem("1");
const container = document.querySelector(".exportPage__picContainer");

container.innerHTML = `
    <img class="pic" src='${savedPicture}' />
  `;
