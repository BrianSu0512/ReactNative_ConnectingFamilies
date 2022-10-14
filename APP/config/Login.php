<?php
    $cn= mysqli_init();
    $cn->options(MYSQLI_OPT_CONNECT_TIMEOUT, 100);
    $cn->options(MYSQLI_OPT_READ_TIMEOUT, 100);
    $cn->real_connect("medideck.c9yvg7mtywqz.ap-southeast-2.rds.amazonaws.com", "SonTran1829", "UnChEcK12PaSsWoRd34","medideck", 3306);

    $json = file_get_contents('php://input');
    $obj = json_decode($json,true);

    $name=$obj['userName'];
    $pass=$obj['userPass'];

    if($name!="" && $pass!=""){
        $result= $cn->query("SELECT * FROM Users where UserName='{$name}' and UserPass='{$pass}'");
        //$row = mysqli_fetch_array($result, MYSQLI_ASSOC);
        if($result->num_rows==0){
            $Msg='failed';
        }
        else{
            $Msg=mysqli_fetch_array($result, MYSQLI_ASSOC);
        }

    }
    else{
        $Msg='failed';
    }

    $cn->close();
    echo json_encode($Msg)
?>