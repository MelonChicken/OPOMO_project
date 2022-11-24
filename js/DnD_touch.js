/* window.onload 사용해 터치 이벤트 발생 확인 : 상시 대기 */
$(function() {						
    /* 터치 이벤트 감시 위한 객체 등록 및 이벤트 등록 실시 */
    document.querySelectorAll('.posePictureBox').forEach(items => {
        items.addEventListener("touchstart", handelStart, false);
        items.addEventListener("touchmove", handleMove, false);
        items.addEventListener("touchend", handleEnd, false)
    });

    document.querySelectorAll('.customPage__myPoseContainerCover__picBox__grid__pic').forEach(items => {
        items.addEventListener("touchstart", handelStart, false);
        items.addEventListener("touchmove", handleMove, false);
        items.addEventListener("touchend", handleEnd, false) // 마지막 false는 버블링 막는용
    });
    
    /* 터치 이동 이벤트 발생 */
    function handelStart(e) {
        e.preventDefault();
        drag(e);
    }

    function handleMove(e) {
        /* 선택한 div id 값 확인 */	
        e.preventDefault()	
		dragId = e.target.id;
        
        /* 시작 좌표값 확인 */
        beaforeX = $(this).scrollLeft();
        beaforeY = $(this).scrollTop();
    }
    
    /* 터치 종료 이벤트 발생 */
    function handleEnd(e) {									
        /* 종료 좌표값 확인 */
        console.log(e.target, '터치 종료')
        
        let divX = e.changedTouches[0].clientX;
        let divY = e.changedTouches[0].clientY;							
        
        /* 강제로 특정 좌표값 드롭 이벤트 발생 수행 */
        let evt = new MouseEvent("drop");
        let cb = document.elementFromPoint(divX, divY);
        cb.dispatchEvent(evt);
        evt.preventDefault();
    }						
});	