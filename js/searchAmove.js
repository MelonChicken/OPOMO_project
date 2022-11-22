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
  {
    //2x2 테스트용으로 추가했어.
    id: 3,
    name: "콩순이",
    tag: ["#1명", "#귀엽게"],
    url: "./images/콩순이.png",
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
                  <img class="pic" onclick="saving(this)" id='${pose.id}' src='${pose.url}' alt='${pose.tag}' />
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

//enter키 눌렀을때 반응
function enterkey() {
  if (window.event.keyCode == 13) {
    // 엔터키가 눌렸을 때 실행할 내용
    showList();
  }
}

//
function saving(element) {
  console.dir(element);
  console.log(element.id);
  console.log(element.src);

  localStorage.setItem(element.id, element.src);
  setTimeout(moveExport(), 3000);

  const lastData = localStorage.getItem(element.id);
  const LnL = document.querySelector(".exportPage__picContainer");
  LnL.innerHTML = `
    <img class="finalStep" src='${lastData}' />
  `;
}

//이미지 누르면 다운로드pg로 이동
function moveExport() {
  location.href = "/basicExport";
}
