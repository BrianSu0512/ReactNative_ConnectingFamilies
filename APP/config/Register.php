<?php
    $cn= mysqli_init();
    $cn->options(MYSQLI_OPT_CONNECT_TIMEOUT, 100);
    $cn->options(MYSQLI_OPT_READ_TIMEOUT, 100);
    $cn->real_connect("medideck.c9yvg7mtywqz.ap-southeast-2.rds.amazonaws.com", "SonTran1829", "UnChEcK12PaSsWoRd34","medideck", 3306);

    $json = file_get_contents('php://input');
    $obj = json_decode($json,true);

    $name=$obj['userName'];
    $pass=$obj['userPass'];
    $email=$obj['userEmail'];

    if($name!="" && $pass!="" && $email!=""){
        $result= $cn->query("Insert into Users(UserName, UserEmail, UserPass, UserPriv) values('{$name}', '{$email}', '{$pass}', '1')");
        if(!$result){
            $Msg='failed';
        }else{
            $Msg='success';
        }
    }
    else{
        $Msg='failed';
    }

    $cn->close();
    echo json_encode($Msg)
?>