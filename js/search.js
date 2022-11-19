//이미지
const sibal = [
  {
    id: 1,
    name: "베어스",
    tag: ["#3명", "#신나게", "#친구와"],
    url: "./images/베어스.png",
  },
  {
    id: 2,
    name: "세서미",
    tag: ["#2명", "#친구와"],
    url: "./images/세서미.png",
  },
];

const list = document.getElementById("list");

function showList(val = "") {
  list.innerHTML = "";
  const res = sibal.forEach((pose) => {
    if (pose.tag.includes(val)) {
      const li = document.createElement("li");
      li.classList.add("publicPictureBox");
      li.innerHTML = `
                <div class="publicPicture__container">
                  <img  class="pic" src='${pose.url}' alt='${pose.tag}'>
                </div>
                <p class="tag">이름: ${pose.name}</p>
                <p class="tag"> ${pose.tag}</p>
            `;
      list.appendChild(li);
    }
  }); //end showList
}

showList();

//검색기능
const searchInput = document.getElementById("search");
const searchBtn = document.getElementById("searchBtn");

searchBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const val = searchInput.value;
  console.log(val);
  showList(val);
});
