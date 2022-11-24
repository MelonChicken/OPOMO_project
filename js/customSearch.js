const sibal = [];

const list = document.getElementById("list");

function showList(val = "") {
  list.innerHTML = "";
  //여러개의 태그들을 리스트화
  wantedtags = val.split(",");

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
