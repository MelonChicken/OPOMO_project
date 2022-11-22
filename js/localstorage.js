const savedPicture = localStorage.getItem("1");
const container = document.querySelector(".exportPage__picContainer");

container.innerHTML = `
    <img class="finalStep" src='${savedPicture}' />
  `;
