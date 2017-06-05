<?php
/**
 * Created by PhpStorm.
 * User: yunlo
 * Date: 2017/2/15
 * Time: 11:10
 */
require_once ('db.php');
if($link)
{
    //插入新闻
    $newstitle = $_POST['newstitle'];
    $newstype = $_POST['newstype'];
    $newscontent = $_POST['newscontent'];
    $newsimg = $_POST['newsimg'];
    $newstime = $_POST['newstime'];
    $newssrc = $_POST['newssrc'];

    $sql = "INSERT INTO `news`( `newtype`, `newstitle`, `newscontent`, `newsimg`, `newstime`, `newssrc`) VALUES ('{$newstype}','{$newstitle}','{$newscontent}','{$newsimg}','{$newstime}','{$newssrc}')";

    mysqli_query($link,"SET NAMES 'UTF8'");
    $result = mysqli_query($link,$sql);

    echo json_encode(array('success'=>'ok'));
}


?>