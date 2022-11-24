function foldMenu(element) {
  let before = document.getElementsByClassName("active")[0]; // 기존에 활성화된 버튼
  if (before && document.getElementsByClassName("active")[0] != element) {
    // 자신 이외에 이미 활성화된 버튼이 있으면
    before.nextElementSibling.classList.add("hidden"); // 기존에 펼쳐진 내용 접고
    before.classList.remove("active"); // 버튼 비활성화
  }
  element.classList.toggle("active"); // 활성화 여부 toggle

  let child = element.nextElementSibling;
  if (child.classList.contains("hidden")) {
    // 버튼 다음 요소가 펼쳐져 있으면
    child.classList.remove("hidden"); // 접기
  } else {
    child.classList.add("hidden"); // 접혀있는 경우 펼치기
  }
}
