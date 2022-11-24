//이미지
const sibal = [
  {
    id: 1,
    name: "베어스",
    tag: ["#3명", "#신나게", "#친구와"],
    src: "./images/베어스.png",
  },
  {
    id: 2,
    name: "세서미",
    tag: ["#2명", "#친구와"],
    src: "./images/세서미.png",
  },
  {
    //2x2 테스트용으로 추가했어.
    id: 3,
    name: "콩순이",
    tag: ["#1명", "#귀엽게"],
    src: "./images/콩순이.png",
  },
  {
    id: 4, //다중 태그 입력 되는지 테스트 용
    name: "쿠로미",
    tag: ["#2명", "#친구와", "#귀엽게"],
    src: "./images/쿠로미.png",
  },
  {
    id: 5,
    name: "스폰지밥1",
    tag: ["#2명", "#신나게"],
    src: "./images/스폰지밥1.png",
  },
  {
    id: 6,
    name: "스폰지밥2",
    tag: ["#2명", "#웃기게", "#친구와"],
    src: "./images/스폰지밥2.png",
  },
];

const list = document.getElementById("list");

function showList(val = "") {
  list.innerHTML = "";
  //여러개의 태그들을 리스트화
  wantedtags = val.split(" ");

  const res = sibal.forEach((pose) => {
    let flag = 0;
    //리스트화 된 태그들을 모두 포함하는지 조사 (모두 포함한다면 flag = wantedTags.length)
    wantedtags.forEach(function (tag) {
      if (pose.tag.includes(tag)) {
        flag += 1;
      }
    });
    //만약 원하는 태그들을 모두 포함한다면
    if (flag == wantedtags.length) {
      const li = document.createElement("li");
      li.classList.add("publicPictureBox");
      li.innerHTML = `
                <div class="publicPicture__container">
                  <img class="pic" onclick="saving(this)" id='${pose.id}' src='${pose.src}' alt='${pose.tag}' />
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
  console.log(element.src);

  localStorage.setItem(1, element.src);
  setTimeout(moveExport(), 3000);
}

//이미지 누르면 다운로드pg로 이동
function moveExport() {
  location.href = "/basicExport.html";
}

//js파일 안에 js파일 넣음
document.write(
  '<script src="https://www.gstatic.com/firebasejs/8.8.1/firebase-app.js"></script>'
);
document.write(
  '<script src="https://www.gstatic.com/firebasejs/8.8.1/firebase-database.js"></script>'
);
document.write(
  '<script src="https://www.gstatic.com/firebasejs/8.8.1/firebase-analytics.js"></script>'
);
document.write(
  '<script src="https://www.gstatic.com/firebasejs/8.8.1/firebase-auth.js"></script>'
);
document.write(
  '<script src="https://www.gstatic.com/firebasejs/8.8.1/firebase-firestore.js"></script>'
);
document.write(
  '<script type="module"> import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";</script>'
);
document.write('<script src="./js/firebaseUpload.js"></script>');
