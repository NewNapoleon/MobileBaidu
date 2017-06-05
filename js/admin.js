/**
 * Created by yunlo on 2017/2/15.
 */
//打开后台页面，发送请求刷新新闻列表
$(document).ready(function () {
    $newsTable = $('#newsList tbody');
    refreshnews($newsTable);

    //添加新闻
    $('#btn-submit').click(function (e) {
        e.preventDefault();

        //输入判断
        //这里可以使用required属性替代，但是太丑而且提示不明确
        if ($('#newstitle').val() === "" || $('#newscontent').val() === "" || $('#newsimg').val() === "" || $('#newstime').val() === "" || $('#newssrc').val() === "") {
            if ($('#newstitle').val() === "") {
                $('#newstitle').parent().addClass('has-error');
            }
            else {
                $('#newstitle').parent().removeClass('has-error');
            }
            if ($('#newscontent').val() === "") {
                $('#newscontent').parent().addClass('has-error');
            }
            else {
                $('#newscontent').parent().removeClass('has-error');
            }
            if ($('#newsimg').val() === "") {
                $('#newsimg').parent().addClass('has-error');
            }
            else {
                $('#newsimg').parent().removeClass('has-error');
            }
            if ($('#newstime').val() === "") {
                $('#newstime').parent().addClass('has-error');
            }
            else {
                $('#newstime').parent().removeClass('has-error');
            }
            if ($('#newssrc').val() === "") {
                $('#newssrc').parent().addClass('has-error');
            }
            else {
                $('#newssrc').parent().removeClass('has-error');
            }
        }
        //bootstrap 可以通过给表单元素的父元素添加has-error给表单元素增加红色错误外框
        else {
            var jsonNews = {
                newstitle:$('#newstitle').val(),
                newstype:$('#newstype').val(),
                newscontent:$('#newscontent').val(),
                newsimg:$('#newsimg').val(),
                newstime:$('#newstime').val(),
                newssrc:$('#newssrc').val(),
            }
            $.ajax({
                url: 'server/insertNews.php',
                type: 'post',
                data:jsonNews,
                datatype:'json',
                success:function (data) {
                    console.log(data);
                    refreshnews($newsTable);
                }
            });
        }
    })

    //给删除按钮绑定事件
    //因为动态生成所以这里需要事件委托
    var deleteId=null;
    $newsTable.on('click','.btn-danger',function (e) {
        $('#deleteModal').modal('show');
        deleteId = $(this).parent().prevAll().eq(6).html();
    });

    $('#deleteModal #confirmDelete').click(function (e) {
        if(deleteId)
        {
            $.ajax({
                url:'server/deleteNews.php',
                type:'post',
                data:{newsid:deleteId},
                datatype:'json',
                success:function (data) {
                    console.log(data);
                    //成功后重新刷新
                    refreshnews($newsTable);
                    $('#deleteModal').modal('hide');
                },
                error:function () {
                    console.log("失败");
                }
            });
        }
    });
//    修改新闻的功能
    var updateId=null;
    $newsTable.on('click','.btn-primary',function (e) {
        $('#updateModal').modal('show');
        updateId = $(this).parent().prevAll().eq(6).html();
        $.ajax({
            url:'server/curNews.php',
            type:'get',
            data:{newsid:updateId},
            datatype:'json',
            success:function (data) {
                //成功后重新刷新
                $('#updateModal #upnewstitle').val(data[0].newstitle);
                $('#updateModal #upnewstype').val(data[0].newstype);
                $('#updateModal #upnewscontent').val(data[0].newscontent);
                $('#updateModal #upnewsimg').val(data[0].newsimg);
                $('#updateModal #upnewstime').val(data[0].newstime.split(' ')[0]);
                $('#updateModal #upnewssrc').val(data[0].newssrc);
            },
            error:function () {
                console.log("失败");
            }
        });
    });

    $('#updateModal #confirmUpdate').click(function (e) {
        var jsonNews = {
            newid:updateId,
            newstitle:$('#upnewstitle').val(),
            newstype:$('#upnewstype').val(),
            newscontent:$('#upnewscontent').val(),
            newsimg:$('#upnewsimg').val(),
            newstime:$('#upnewstime').val(),
            newssrc:$('#upnewssrc').val(),
        }
        $.ajax({
            url: 'server/updateNews.php',
            type: 'post',
            data:jsonNews,
            datatype:'json',
            success:function (data) {
                // console.log(data);
                $('#updateModal').modal('hide');
                refreshnews($newsTable);
            },
            error:function () {
                console.log('失败');
            }
        })
    });
});

function refreshnews(newstable) {
    //empty table
    newstable.empty();
    $.ajax({
        type: 'get',
        url: 'server/getNews.php',
        datatype: 'json',
        data:{newstype:""},
        success: function (data) {
            // console.log(data);
            data.forEach(function (item, index, array) {
                var tdid = $('<td></td>').html(item.id);
                var tdnewstype = $('<td></td>').html(item.newstype);
                var tdnewstitle = $('<td></td>').html(item.newstitle);
                var tdnewscontnent = $('<td></td>').html(item.newscontent);
                var tdnewsimg = $('<td></td>').html(item.newsimg);
                var tdnewssrc = $('<td></td>').html(item.newssrc);
                var tdnewstime = $('<td></td>').html(item.newstime);
                var tdctrl = $('<td>');
                var btnupdate = $('<button>').addClass('btn btn-primary btn-xs').html('更新');
                var btndelete = $('<button>').addClass('btn btn-danger btn-xs').html('删除');
                tdctrl.append(btnupdate, btndelete);
                var tRow = $('<tr>');
                tRow.append(tdid, tdnewstype, tdnewstitle, tdnewscontnent, tdnewsimg, tdnewssrc, tdnewstime, tdctrl);
                newstable.append(tRow);
            })
        },
        error: function () {
            console.log("有了错误");
        }
    })
}