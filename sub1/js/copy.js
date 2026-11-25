// 오시는길 - 주소 복사 버튼
$(function(){
    $('.addr_copy').on('click', function(e){
        e.preventDefault();     //href="#" 때문에 맨 위로 튀는 것 막기

        var $btn = $(this);
        var addr = $('.map_txt strong').text();    //복사할 주소 글자

        //화면 밖에 잠깐 입력칸을 만들어 주소를 넣고 → 선택 → 복사 → 지우기
        //(http 주소에서도 동작하는 방식)
        var $temp = $('<textarea>').val(addr).css({position:'fixed', left:'-9999px'});
        $('body').append($temp);
        $temp[0].select();
        document.execCommand('copy');
        $temp.remove();

        //복사됐다는 표시를 2초간 보여주고 원래 글자로
        $btn.text('복사 완료!');
        setTimeout(function(){
            $btn.text('주소 복사');
        }, 2000);
    });
});
