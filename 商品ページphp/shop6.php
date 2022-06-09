<?php
    session_start();

    if(isset($_POST['back']) ){
        header('Location:shop1.php');
    };
    
    if(!isset($_POST['sub']) ){
        exit('Access Error');
    };
    
?>
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>shop6</title>
</head>
<body>
    <h1>お会計</h1>
    <?php
        print '<p>'.$_SESSION['username'].'さん、こんにちは</p>';
    ?>
    <p>ご購入ありがとうございました</p>
<form action="" method="post">
    <button type='submit' name='back'>ログインに戻る</button>
</from>

</body>
</html>
