<?php
    session_start();
    if(!isset($_POST['sub']) ){
        exit('Access Error');
    };

    $arr = array();


    $app_price = $_POST['apple']*400;
    $ora_price = $_POST['orange']*200;
    $ban_price = $_POST['banana']*100;

    if($app_price !== 0){
        $arr[] = '<P>リンゴ'.$_POST['apple'].'個で'.$app_price.'円</P>';
    };
    if($ora_price !== 0){
        $arr[] = '<P>みかん'.$_POST['orange'].'個で'.$ora_price.'円</P>';
    };
    if($ban_price !== 0){
        $arr[] = '<P>バナナ'.$_POST['banana'].'個で'.$ban_price.'円</P>';
    };

    if($app_price+$ora_price+$ban_price == 0){
        exit('商品を選択してください');
    }else{
        $total = $app_price+$ora_price+$ban_price;
    };

?>
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>shop3</title>
</head>
<body>
    <h1>お会計</h1>
    <?php
        print '<p>'.$_SESSION['username'].'さん、こんにちは</p>';
    ?>
    <h2>小計</h2>
    <?php
        foreach( $arr as $key => $value){
            print $value;
        };
    ?>
    <h2>合計</h2>
    <?php
        print '合計'.$total.'円です。</p>';
    ?>

<form action="shop4.php" method="post">
    <button type='submit' name='sub'>決定</button>
</from>

</body>
</html>
