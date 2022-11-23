/////////////////////////////////////////////////////////// **드래그존에 넣기**

const allowDrop = (e) => {
  e.preventDefault();
}

// text로 드래그 요소의 id (drag1)을 받아옴
const drag = (e) => {
  e.dataTransfer.setData("text", e.target.id);

  let dragId = e.target.id; // 드래그 시도 id 저장
}

// 드래그된 요소를 드롭 요소에 추가
const drop = (e) => {
  if(e.target.childElementCount == 0) {
      const data = e.dataTransfer.getData("text");
      if(e.target.className == "customPage__myPoseContainerCover__picBox__grid__pic ui-sortable-handle") { // 드롭존에 드롭했을 경우만!
      e.preventDefault();
      e.target.appendChild(document.getElementById(data)); // 드롭존 하위에 이미지 이동
      
      let tagId = evt.target.id; // 드롭 대상의 id 저장

      }
  }
}



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
          ui.item.data('start_pos', ui.item.index());
      },
  
      stop : function(event, ui) {
          let spos = ui.item.data('start_pos');
          let epos = ui.item.index();
          reorder();
      }
  })
})



/////////////////////////////////////////////////////////// **모바일 터치 이벤트**
window.onload = function() {
  let dragElement = document.getElementsByClassName(".posePictureBox")
  let dropzone = document.getElementsByClassName(".customPage__myPoseContainerCover__picBox__grid__pic")

  dragElement.addEventListener("touchmove", handleMove,false);
  dragElement.addEventListener("touchend", handleEnd, false);

  dropzone.addEventListener("touchmove", handleMove,false);
  dropzone.addEventListener("touchend", handleEnd, false);

  /* 터치 이동 이벤트 발생 */
  function handleMove(evt) {
    /* 선택한 div id 값 확인 */				
    dragId = evt.targetTouches[0].target.id;
    
    /* 투명도 조절 실시 */
    document.getElementById(dragId).style.opacity = '0.5';
    
    /* 시작 좌표값 확인 */
    beaforeX = $(this).scrollLeft();
    beaforeY = $(this).scrollTop();				
  }
  
  /* 터치 종료 이벤트 발생 */
  function handleEnd(evt) {									
    /* 종료 좌표값 확인 */				
    var divX = evt.changedTouches[0].clientX;
    var divY = evt.changedTouches[0].clientY;								
    
    /* 강제로 특정 좌표값 클릭 이벤트 발생 수행 */
    dropClick(divX, divY);
  }						
};

/* 특정 좌표에 위치한 객체 강제로 클릭 이벤트 발생 수행 */
function dropClick(x, y){
  var evt = document.createEvent("MouseEvents");
  evt.initMouseEvent("click", true, true, window, 0,0,0,0,0, false, false, false, 0, null);
  var cb = document.elementFromPoint(x, y);
  cb.dispatchEvent(evt);
}

/* jquery 현재 클릭된 객체 id 값 얻어오기 : 상시 대기 */		
$(document).ready(function(){ 
  $('body').click(function(e){
    // 클릭 이벤트가 발생 한 객체 id 저장
    tagId = e.target.getAttribute('id');				
    
    // 드래그 앤 드롭으로 이벤트가 발생한 것인 지 확인
    if(dragId.length > 0 && tagId.length > 0){
      select_change(dragId, tagId);
    }
    // 일반 클릭 이벤트가 발생한 경우 처리
    else {
      alert(tagId);
    }
  });
});		

/* 드래그 앤 드롭 교체 작업 실시 */
function select_change(drag, drop){
  /* null 값이 아닐 경우 */
  if(drag.length > 0 && drop.length > 0){								
    /* 선택된 태그 id 확인 [drag : 최초 선택 객체] [drop : 변경될 객체] */
    console.log("drag : " + drag);
    console.log("drop : " + drop);
    
    /* 불필요한 태그 포함 시 종료 실시 */
    if(drag == 'content_container' || drop == 'content_container'){
      return;
    }
    
    /* 특정 태그 css 속성값 얻어오기 */
    /*
    var dragBackgroundColor = $('#'+drag).css("background-color");
    var dropBackgroundColor = $('#'+drop).css("background-color");				
    console.log("drag [BackgroundColor] [Jquery] : " + dragBackgroundColor);
    console.log("drop [BackgroundColor] [Jquery] : " + dropBackgroundColor);
    */
    
    var dragId = document.getElementById(drag);
    var dropId = document.getElementById(drop);
    var dragBackgroundColor = window.getComputedStyle(dragId).backgroundColor;
    var dropBackgroundColor = window.getComputedStyle(dropId).backgroundColor;
    console.log("drag [BackgroundColor] [JS] : " + dragBackgroundColor);
    console.log("drop [BackgroundColor] [JS] : " + dropBackgroundColor);
    
    /* 특정 태그 속성 값 교체 실시 */
    document.getElementById(drag).style.backgroundColor = dropBackgroundColor;
    document.getElementById(drop).style.backgroundColor = dragBackgroundColor;
    /* 투명도 조절 실시 */
    document.getElementById(drag).style.opacity = '1';
  }
};

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
