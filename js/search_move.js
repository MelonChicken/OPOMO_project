const firebaseConfig = {
  apiKey: "AIzaSyDrZRAAkmuJ_1k_cRcY0bFkImfZukHass0",
  authDomain: "opomo-project.firebaseapp.com",
  databaseURL: "https://opomo-project-default-rtdb.firebaseio.com",
  projectId: "opomo-project",
  storageBucket: "opomo-project.appspot.com",
  messagingSenderId: "17089883592",
  appId: "1:17089883592:web:2f6f072aa41136d44fe4fd",
};

firebase.initializeApp(firebaseConfig);

//DB에 새로 쓰기(추가 아님)
function writePoseData(value) {
  firebase.database().ref("poses/").set(value);
}

//DB에서 불러오기
//불러오기 순서 1. pose 2. basic/custom
function getWhichData(category, value) {
  const source = firebase.database().ref(`${category}/`).child(`${value}`);
  source
    .get()
    .then((snapshot) => {
      if (snapshot.exists()) {
        console.log(snapshot.val());
      } else {
        console.log("No data available");
      }
    })
    .catch((error) => {
      console.error(error);
    });
}
// //불러오기 예시
// getWhichData("poses", "basic");
getWhichData("poses", "custom");

////////////////////////////////////////////////////////////////////////////////////////////

const sibal = getWhichData("poses", "basic");

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
                    <img class="pic" onclick="saving(this)" id='${pose.id}' url='${pose.url}' alt='${pose.tag}' />
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
  console.log(element.url);

  localStorage.setItem(1, element.url);
  setTimeout(moveExport(), 3000);
}

//이미지 누르면 다운로드pg로 이동
function moveExport() {
  location.href = "/basicExport.html";
}
