// 레미탈 제품 검색 (JSON 사용)
$(function(){
    function render(list){
        var html ='';
    
    $.each(list,function(i,item){
        html += '<li>';
        html += '<div class="img"><img src="' + item.img + '" alt="' + item.name + '"></div>';
        html += '<span class="cate">'+item.cateName+'</span>';
        html += '<strong>'+item.name+'</strong>';
        html += '<p>'+item.desc+'</p>';
        html += '</li>';
    });

    $('[data-product-list]').html(html);
    }

    var allData = [];   //원본 바구니(json 8개 보관)
    var nowFilter = 'all';  //지금 눌려 있는 버튼(처음엔 전체)

    $.getJSON('./data/remitar.json',function(data){
        allData=data;   // <-이 줄 추가
        update();
    });

    function update(){
        var result = [];    //새 바구니 (빈 상태로 스타트)
        var keyword = $('[data-search-input]').val();

        $.each(allData, function(i,item){
            var okFilter = (nowFilter==='all' || item.category===nowFilter);
            var okKeyword = (item.name + item.keyword).toLowerCase().indexOf(keyword.toLowerCase()) > -1;
            
            if(okFilter&&okKeyword){
                result.push(item);
            }            
        });
         render(result); // 새바구니로다시그리기
            $('[data-result-count]').text(result.length);
            $('[data-no-result]').prop('hidden',result.length>0);
            }


    $('[data-filter]').on('click',function(){
        nowFilter=$(this).data('filter');   //누른버튼의값(wall.tile..)

        $('[data-filter]').removeClass('active');   //모든버튼에서 active빼고
        $(this).addClass('active');     //누른 버튼에만 active

        update();
    });

    $('[data-search-input]').on('input',function(e){
        update();
    });

    $('[data-search-form]').on('submit',function(e){
        e.preventDefault();
        update();
    });
});