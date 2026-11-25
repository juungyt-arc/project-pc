// 새소식 더보기 버튼
$(document).ready(function(){
    $('.news_board .btn_more').click(function(){
        var $more = $('.news_board .news_list li.more');

        if($(this).hasClass('open')){
            $more.slideUp(400);
            $(this).removeClass('open').text('더보기 +');
        }else{
            $more.slideDown(400);
            $(this).addClass('open').text('접기 -'); 
        }
    });
});
