<?php
/**
 * Created by PhpStorm.
 * User: yunlo
 * Date: 2017/2/15
 * Time: 21:27
 */
require_once ('db.php');
if($link)
{
    $newsid = $_POST['newid'];
    $newstitle = $_POST['newstitle'];
    $newstype = $_POST['newstype'];
    $newscontent = $_POST['newscontent'];
    $newsimg = $_POST['newsimg'];
    $newstime = $_POST['newstime'];
    $newssrc = $_POST['newssrc'];

    $sql = "UPDATE `news` SET `newtype`='{$newstype}',`newstitle`='{$newstitle}',`newscontent`='{$newscontent}',`newsimg`='{$newsimg}',`newstime`='{$newstime}',`newssrc`='{$newssrc}' WHERE `news`.`id`={$newsid}";
    //查询语句之前设置utf-8
    mysqli_query($link, "SET NAMES 'UTF8'");
    $result = mysqli_query($link, $sql);
    $affected = mysqli_affected_rows($link);
    echo json_encode(array('success'=>$affected));
}
else
{
    echo json_encode(array('fail'=>'ok'));
}

?>