<?php
    session_start();
    if(!isset($_POST['sub']) ){
        exit('Access Error');
    };

    if($_POST['addName']=="" || $_POST['addles']=='' || $_POST['tell']==''){
        exit('情報が未入力です');
    };
?>
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>shop5</title>
</head>
<body>
    <h1>お届け先確認</h1>
    <?php
        print '<p>'.$_SESSION['username'].'さん、こんにちは</p>';
    ?>
    <h2>お客様情報</h2>
    <?php
        print '<p>お届け先氏名：'.$_POST['addName'].'</p>';
        print '<p>住所：'.$_POST['addles'].'</p>';
        print '<p>電話番号：'.$_POST['tell'].'</p>';
        print '<p>お届け時間：'.$_POST['time'].'</p>';
    ?>
<form action="shop6.php" method="post">
    <button type='submit' name='sub'>決定</button>
</from>

</body>
</html>
