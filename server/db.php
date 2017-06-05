<?php
/**
 * Created by PhpStorm.
 * User: yunlo
 * Date: 2017/2/15
 * Time: 11:11
 */
header("Content-type:application/json;charset=utf-8");
//$arr = array('newstype'=>'百家','newsimg'=>'img/1.jpg','newstime'=>'2016-02-28','newssrc'=>'极客学院','newstitle'=>'测试动态获取的新闻标题');
$link = mysqli_connect('localhost', 'root', '', 'baidunews', 3306);
?>