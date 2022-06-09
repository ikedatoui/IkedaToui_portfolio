<?php
    session_start();
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
    <title>shop4</title>
</head>
<body>
    <h1>お届け先情報</h1>
    <?php
        print '<p>'.$_SESSION['username'].'さん、こんにちは</p>';
    ?>
    <form action="shop5.php" method='post'>
        <p>お届け先氏名:<input type="text" name="addName"></p>
        <p>住所:<input type="text" name="addles"></p>
        <p>電話番号:<input type="tell" name="tell"></p>
        <p>お届け時間：<select name="time">
                <option value='指定なし' selected>指定なし</option>
                <option value='10時～12時'>10時～12時</option>
                <option value='12時～15時'>12時～15時</option>
                <option value='15時～18時'>15時～18時</option>
                <option value='18時～21時'>18時～21時</option>
            </select>
        </p>
        
        <input type="submit" name='sub' value='決定'> <input type="reset" name='clear' value='クリア'>
    </form>

</body>
</html>
