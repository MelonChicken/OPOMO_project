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

const isMobile = /iPhone|Android/i.test(window.navigator.userAgent);

const searchNav = document.querySelector(".customPage__searchPic__nav");
const wishNav = document.querySelector(".customPage__wishList__nav");

document.addEventListener("touchstart", (event) => noticeTouch());

function noticeTouch() {
  console.log("HI");
  if (
    true &&
    (searchNav.classList.contains("active") ||
      wishNav.classList.contains("active"))
  ) {
    const nowActivated = document.querySelector(".active");
    //닫아야하는 커튼(nowOpened)이랑 커튼 박스(nowMenu) 확인
    const nowMenu = nowActivated.nextElementSibling;
    const nowOpened = nowMenu.getElementsByTagName("div")[0];
    //드래그 이벤트 발생시 떠오른다.
    nowMenu.addEventListener("dragstart", (event) => {
      //커튼을 닫고 박스를 치운다.
      nowOpened.style.maxWidth = null;
      nowMenu.style.width = null;
      console.log(nowMenu.style.width);
    });
    document.addEventListener("dragend", (event) => {
      //박스를 다시 꺼내고 커튼도 연다.
      nowMenu.style.display = null;
      nowMenu.style.display = "flex";
      nowOpened.style.maxWidth = 100 + "%";
    });
  }
}
