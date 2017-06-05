<?php
/**
 * Created by PhpStorm.
 * User: yunlo
 * Date: 2017/2/15
 * Time: 20:46
 */
require_once ('db.php');
if($link)
{
    $newsid = $_POST['newsid'];
    $sql = "DELETE FROM `news` WHERE `news`.`id`={$newsid}";
    mysqli_query($link,"SET NAMES 'UTF8'");
    $result = mysqli_query($link,$sql);
    $affect = mysqli_affected_rows($link);
    echo json_encode(array('success'=>$affect));
}
else{
    echo json_encode(array('failed'=>'ok'));
}
mysqli_close($link);
?>