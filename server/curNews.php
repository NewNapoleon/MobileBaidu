<?php
/**
 * Created by PhpStorm.
 * User: yunlo
 * Date: 2017/2/15
 * Time: 21:31
 */
require_once('db.php');
if ($link) {
    //执行成功的过程
    $newsid = $_GET['newsid'];
    $sql = "SELECT `id`, `newtype`, `newstitle`, `newscontent`, `newsimg`, `newstime`, `newssrc` FROM `news` WHERE `news`.`id`={$newsid}";
    //查询语句之前设置utf-8
    mysqli_query($link, "SET NAMES 'UTF8'");
    $result = mysqli_query($link, $sql);

    $senddata=array();
    while($row = mysqli_fetch_assoc($result))
    {
        array_push($senddata,array(
            'id'=>$row['id'],
            'newstype'=>$row['newtype'],
            'newstitle'=>$row['newstitle'],
            'newsimg'=>$row['newsimg'],
            'newstime'=>$row['newstime'],
            'newssrc'=>$row['newssrc'],
            'newscontent'=>$row['newscontent'],
        ));
    }
    echo json_encode($senddata);
} else {
    echo json_encode(array('error' => 'none'));
}
mysqli_close($link);
?>
