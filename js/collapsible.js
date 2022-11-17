function collapseUpDown(element) {
  let before = document.getElementsByClassName("active")[0]; // 기존에 활성화된 버튼
  if (before && document.getElementsByClassName("active")[0] != element) {
    // 자신 이외에 이미 활성화된 버튼이 있으면
    before.nextElementSibling.style.maxwidth = null; // 기존에 펼쳐진 내용 접고
    before.classList.remove("active"); // 버튼 비활성화
  }
  element.classList.toggle("active"); // 활성화 여부 toggle

  let content = element.nextElementSibling;
  if (content.style.maxwidth != 0) {
    // 버튼 다음 요소가 펼쳐져 있으면
    content.style.maxwidth = null; // 접기
  } else {
    content.style.maxwidth = 5 + "%"; // 접혀있는 경우 펼치기
  }
}
function collapseRightLeft(element) {
  let before = document.getElementsByClassName("active")[0]; // 기존에 활성화된 버튼
  if (before && document.getElementsByClassName("active")[0] != element) {
    // 자신 이외에 이미 활성화된 버튼이 있으면
    before.nextElementSibling.style.maxwidth = null; // 기존에 펼쳐진 내용 접고
    before.classList.remove("active"); // 버튼 비활성화
  }
  element.classList.toggle("active"); // 활성화 여부 toggle

  let child = document.querySelector(".child");
  if (child.style.maxWidth != 0) {
    // 버튼 다음 요소가 펼쳐져 있으면
    child.style.maxWidth = null; // 접기
  } else {
    child.style.maxWidth = 100 + "%"; // 접혀있는 경우 펼치기
  }
}
