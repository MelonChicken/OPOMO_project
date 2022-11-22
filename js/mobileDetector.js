//떠오르게 할 프레임 확인
const frame = document.querySelector(
  ".customPage__myPoseContainerCover__picBox"
);
console.dir(frame);
//드래그 이벤트 발생시 떠오른다.
document.addEventListener("dragstart", (event) => {
  //원래는 z-index:1 -> 4로 높여준다.
  frame.style.zIndex = 4;
  frame.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
});
document.addEventListener("dragend", (event) => {
  //원래는 z-index:4 -> 1로 되돌린다.
  frame.style.zIndex = 1;
  frame.style.backgroundColor = "rgba(0, 0, 0, 0)";
});
