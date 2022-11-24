// //떠오르게 할 프레임 확인
// const frame = document.querySelector(
//   ".customPage__myPoseContainerCover__picBox"
// );
// // console.dir(frame);
// //드래그 이벤트 발생시 떠오른다.
// document.addEventListener("touchstart", (event) => {
//   //원래는 z-index:1 -> 4로 높여준다.
//   frame.style.zIndex = 6;
//   frame.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
// });
// document.addEventListener("touchend", (event) => {
//   //원래는 z-index:4 -> 1로 되돌린다.
//   frame.style.zIndex = 1;
//   frame.style.backgroundColor = "rgba(0, 0, 0, 0)";
// });


//상시 대기를 위해서 이벤트 추가한다.
document.addEventListener("touchstart", (event) => noticeTouch());

function noticeTouch() {
  let isMobile = /iPhone|Android/i.test(window.navigator.userAgent);

  let searchNav = document.querySelector(".customPage__searchPic__nav");
  let wishNav = document.querySelector(".customPage__wishList__nav");

  console.log("HI")
  console.log(e.target.id)
  if (
    true &&
    //nav가 active 된 경우에만 다음으로 진행한다.
    (searchNav.classList.contains("active") ||
      wishNav.classList.contains("active"))
  ) {
    let nowActivated = document.querySelector(".active");
    //닫아야하는 커튼(nowOpened)이랑 커튼 박스(nowMenu) 확인
    let nowMenu = nowActivated.nextElementSibling;
    let nowOpened = nowMenu.getElementsByTagName("div")[0];
    //드래그 이벤트 발생시 떠오른다.
    nowMenu.addEventListener("touchstart", (event) => {
      //커튼을 닫고 박스를 치운다.
      nowOpened.style.maxWidth = null;
      nowMenu.style.width = null;
      console.log(nowMenu.style.width);
    });
    document.addEventListener("touchend", (event) => {
      //박스를 다시 꺼내고 커튼도 연다.
      nowMenu.style.display = null;
      nowMenu.style.display = "flex";
      nowOpened.style.maxWidth = 100 + "%";
    });
  }
}
