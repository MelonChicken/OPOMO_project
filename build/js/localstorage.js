const savedPicture = localStorage.getItem("1");
const LnL = document.querySelector(".exportPage__picContainer");
//락앤락 반찬통이라는 뜻
LnL.innerHTML = `
    <img class="finalStep" src='${savedPicture}' />
  `;
