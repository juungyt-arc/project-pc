// 메인 News&Media 카드 슬라이드 (이전/다음 버튼으로 한 장씩 이동)
$(function(){
    var $box = $('.news .news_box');
    var $items = $box.children('li');
    var $prev = $('.news .news_prev');
    var $next = $('.news .news_next');
    var view = 3;   //한 화면에 보이는 카드 수
    var gap = 20;   //카드 사이 간격 (main.css의 gap과 같게)
    var current = 0;    //맨 왼쪽에 보이는 카드 번호
    var last = $items.length - view;   //더 이상 넘길 수 없는 번호

    function move(){
        var step = $items.eq(0).outerWidth() + gap;   //카드 한 장 + 간격만큼
        $box.css('transform', 'translateX(' + (-step * current) + 'px)');

        //처음이면 이전 버튼, 끝이면 다음 버튼 비활성
        $prev.prop('disabled', current === 0);
        $next.prop('disabled', current >= last);
    }

    $prev.on('click', function(){
        if(current > 0){
            current--;
            move();
        }
    });

    $next.on('click', function(){
        if(current < last){
            current++;
            move();
        }
    });

    //창 크기가 바뀌면 카드 너비도 바뀌니까 다시 계산
    $(window).on('resize', move);

    move();
});
