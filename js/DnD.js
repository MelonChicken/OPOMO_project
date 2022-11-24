/////////////////////////////////////////////////////////// **드래그존에 넣기**

const allowDrop = (e) => {
  e.preventDefault();
}

// text로 드래그 요소의 id (drag1)을 받아옴
const drag = (e) => {
  if(e.dataTransfer == undefined) { // touch 이벤트일 경우..
    self.dragId = e.target.id;
  } else {
    e.dataTransfer.setData("text", e.target.id);
}
}

// 드래그된 요소를 드롭 요소에 추가
const drop = (e) => {
  if(e.target.childElementCount == 0) {
      if(e.dataTransfer == undefined) { // touch 이벤트일 경우..
          if(e.target.className == "customPage__myPoseContainerCover__picBox__grid__pic ui-sortable-handle") {
              e.preventDefault();
              e.target.appendChild(document.getElementById(self.dragId));
          }
      } else {
          const data = e.dataTransfer.getData("text");
          if(e.target.className == "customPage__myPoseContainerCover__picBox__grid__pic ui-sortable-handle") {
          e.preventDefault();
          e.target.appendChild(document.getElementById(data));
          }
      }
  }};


/////////////////////////////////////////////////////////// **드래그존에서 순서 변경**
function reorder() {
  $(".itembox").each(function(i, box) {
      $(box).find(".itemNum").html(i + 1);
  });
}

$(function() {
  // 빈 dropzone 순서 변환 막기 //
  $("#cnt_drop").sortable({ // 안의 태그들로 드래그 가능한 리스트 생성
    // placeholder : "dropzone_highlight", // 기존 구역 하이라이트 기능

    start : function(event, ui) {
      console.log('순서변환', event)
    },

    top : function(event, ui) {
      reorder();
    }
  })
})

/////////////////////////////////////////////////////////// **이미지 삭제+버튼**
$(function(){
  $(".customPage__myPoseContainerCover__picBox__grid__pic").on({ // class: dropzone기준 ->이벤트 등록
      'drop':function(e){ // dropzone에 drop되었을 때
          e.preventDefault();
          let seq = e.target.id[5]; // frame번호에서 숫자 가져오기
          let id_name = "btnDel_"+seq; // 버튼 id명 만들기
          if((document.getElementById(id_name) == null)) { // 버튼 중복 방지
            let html = `<button type="button" id="${id_name}"> 삭제 </button>`; //html변수에 삭제버튼을 대입
            $("#buttons").append(html); // 아이디에 html을 추가해라
          }
      }
  });
  
  $("#buttons").on("click", "#btnDel_1", function() { // 아이디 안의 btnDel_1을 선택
      let imported_image = $("#frame1").children(); // this의 자식 선택 (이미지)
      $('#cnt_drag').prepend(imported_image); // 목록으로 다시 되돌리기 (첫번째 위치로)
      $('button').remove('#btnDel_1') // 삭제 버튼도 삭제
  });  

  $("#buttons").on("click", "#btnDel_2", function() {
      let imported_image = $("#frame2").children();
      $('#cnt_drag').prepend(imported_image);
      $('button').remove('#btnDel_2')
  });  

  $("#buttons").on("click", "#btnDel_3", function() {
      let imported_image = $("#frame3").children();
      $('#cnt_drag').prepend(imported_image);
      $('button').remove('#btnDel_3')
  });  

  $("#buttons").on("click", "#btnDel_4", function() {
      let imported_image = $("#frame4").children();
      $('#cnt_drag').prepend(imported_image);
      $('button').remove('#btnDel_4')
  });
});
