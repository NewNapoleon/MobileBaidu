/**
 * Created by yunlo on 2017/2/12.
 */
$(document).ready(function () {
    refreshnews('百家');

    //分类点击
    $('.nav-item').click(function (e) {
        e.preventDefault();
        var type = $(this).text();
        $('.nav-item').removeClass('nav-chosen');
        $(this).addClass('nav-chosen');

        refreshnews(type);
    });

    //滚动时加载
    triggerLoadMore();

//    返回顶部按钮的显示与否

    goTopDisplay();
//    返回顶部
    goTopEventBinding();

})

function refreshnews(type){
    //clear ul
    var $lists = $('article ul');
    $lists.empty();

    $.ajax({
        url:'server/getNews.php',
        type:'get',
        datatype:'json',
        data:{newstype:type},
        success:function (data) {
            // console.log(data);
            data.forEach(function (item,index,array) {
                var $lists=$('.news-lists');
                var $list = $('<li></li>').addClass('news-list').appendTo($lists);
                var $newimg = $('<div></div>').addClass('news-img');
                var $img = $('<img>').attr('src',item.newsimg).attr('width','100%').appendTo($newimg);
                $newimg.appendTo($list);
                var $newsContent = $('<div></div>').addClass('news-content').appendTo($list);
                var $h1 = $('<h1></h1>').html(item.newstitle).appendTo($newsContent);
                var $p = $('<p></p>').appendTo($newsContent);
                var $newTime = $('<span></span>').addClass('news-time').html(item.newstime.split(' ')[0]).appendTo($p);
                var $newssrc = $('<span></span>').addClass('news-src').html(item.newssrc).appendTo($p);
            });

        }
    });

}

//绑定返回顶部按钮的显示
function goTopDisplay() {
    $(document).scroll(function (e) {
        if($(document).scrollTop()>300)
        {
            $('.go-top').css('display','block');
        }
        else
        {
            $('.go-top').css('display','none');
        }
    })
}

//绑定返回顶部事件
function goTopEventBinding() {
    $('.go-top').click(function (e) {
        e.preventDefault();
        $('html,body').animate({ scrollTop: 0 }, "slow");
    });
}

//加载新闻事件绑定
function triggerLoadMore() {
    $(window).scroll(function () {
       var lastNewsHeight = $('.news-lists li').last().get(0).offsetTop;
       var scrollHeight = $(window).scrollTop();
       var windowHeight = $(window).height();
       if(windowHeight+scrollHeight >=lastNewsHeight)
       {
           loadMore();
       }
    });
}

//加载更多新闻
function loadMore() {
    var type = $('.nav-chosen').text();
    $.ajax({
        url:'server/getNews.php',
        type:'get',
        datatype:'json',
        data:{newstype:type},
        success:function (data) {
            // console.log(data);
            data.forEach(function (item,index,array) {
                var $lists=$('.news-lists');
                var $list = $('<li></li>').addClass('news-list').appendTo($lists);
                var $newimg = $('<div></div>').addClass('news-img');
                var $img = $('<img>').attr('src',item.newsimg).attr('width','100%').appendTo($newimg);
                $newimg.appendTo($list);
                var $newsContent = $('<div></div>').addClass('news-content').appendTo($list);
                var $h1 = $('<h1></h1>').html(item.newstitle).appendTo($newsContent);
                var $p = $('<p></p>').appendTo($newsContent);
                var $newTime = $('<span></span>').addClass('news-time').html(item.newstime.split(' ')[0]).appendTo($p);
                var $newssrc = $('<span></span>').addClass('news-src').html(item.newssrc).appendTo($p);
            });

        }
    });
}