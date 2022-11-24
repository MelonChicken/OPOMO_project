// 위시리스트 버튼+추가
$(function(){
  $(document).on("click", "button[class='hbtn']", function(e) { // 위시리스트 버튼 중 하나를 클릭시...
     console.log(e)
      let btn_id = e.target.id // 클릭 된 버튼 id = hbtn_숫자
      let seq = btn_id[5] // 숫자만 떼어옴
      let image_id = `#image${seq}` // 버튼에 해당하는 이미지 id

      if(($('#wishlist').children(image_id).length == 0)) { // factor의 children중 'image숫자'를 아이디로 가진 아이가 0개일 경우 // 이미지가 위시리스트에 존재하지 않을 경우
          $(`#${btn_id}`).css('backgroundColor', 'red'); // 위시리스트 버튼 색깔 바꾸기
          let copied_image = $(image_id).clone(); // 이미지 복사
          copied_image.appendTo('#wishlist'); // 위시리스트 목록에 추가하기
      } else { // 버튼이 이미 눌러있는 경우
          $('#wishlist').children(image_id).remove(); // 위시리스트 빼기
          $(`#${btn_id}`).css('backgroundColor', 'gray'); // 버튼 색깔 되돌리기
      }
  });
});

$(function(){
  $(document).on("tab", "button[class='hbtn']", function(e) { // 위시리스트 버튼 중 하나를 클릭시...
      let btn_id = e.target.id // 클릭 된 버튼 id = hbtn_숫자
      let seq = btn_id[5] // 숫자만 떼어옴
      let image_id = `#image${seq}` // 버튼에 해당하는 이미지 id

      if(($('#wishlist').children(image_id).length == 0)) { // factor의 children중 'image숫자'를 아이디로 가진 아이가 0개일 경우 // 이미지가 위시리스트에 존재하지 않을 경우
          $(`#${btn_id}`).css('backgroundColor', 'red'); // 위시리스트 버튼 색깔 바꾸기
          let copied_image = $(image_id).clone(); // 이미지 복사
          copied_image.appendTo('#wishlist'); // 위시리스트 목록에 추가하기
      } else { // 버튼이 이미 눌러있는 경우
          $('#wishlist').children(image_id).remove(); // 위시리스트 빼기
          $(`#${btn_id}`).css('backgroundColor', 'gray'); // 버튼 색깔 되돌리기
      }
  });
});