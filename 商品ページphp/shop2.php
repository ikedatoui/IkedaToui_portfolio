<?php
    session_start();
    if(isset($_POST['sub']) ){
        $pass = $_POST['pass'];
        $_SESSION['username'] = $_POST['username'];
    }else{
        exit('Access Error');
    }
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>shop2</title>
</head>
<body>
    <h1>商品</h1>
    <?php
        print '<p>'.$_SESSION['username'].'さん、こんにちは</p>';
    ?>
    <form action="shop3.php" method='post'>
        <p>リンゴ 400円<input type="number" value='0' name="apple" min="0" max="10"></p>
        <p>みかん 200円<input type="number" value='0' name="orange" min="0" max="10"></p>
        <p>バナナ 100円<input type="number" value='0' name="banana" min="0" max="10"></p>
        <input type="submit" name='sub' value='買う'>
    </form>
</body>
</html>