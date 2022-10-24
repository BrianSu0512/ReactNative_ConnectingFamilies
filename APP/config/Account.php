<?php
    $cn= mysqli_init();
    $cn->options(MYSQLI_OPT_CONNECT_TIMEOUT, 100);
    $cn->options(MYSQLI_OPT_READ_TIMEOUT, 100);
    $cn->real_connect("medideck.c9yvg7mtywqz.ap-southeast-2.rds.amazonaws.com", "SonTran1829", "UnChEcK12PaSsWoRd34","medideck", 3306);

    $json = file_get_contents('php://input');
    $obj = json_decode($json,true);

    $name=$obj['userName'];
    $email=$obj['userEmail'];
    $ph=$obj['userPH'];
    $id=$obj['userID'];
    $pass=$obj['userPass'];
    $change=$obj['type'];

    if($change == "info"){
        if($name!="" && $email!="" && $ph!="" && $id!=''){
            $result= $cn->query("update Users set UserName = '{$name}', UserPH = '{$ph}', UserEmail = '{$email}' where Users.UserID = '{$id}'");
            if(!$result){
                $Msg='failed';
            }else{
                $Msg='success';
            }
        }
    }else if($change == 'password'){
        if($id!='' && $pass!=''){
            $result= $cn->query("update Users set UserPass = '{$pass}' where Users.UserID = '{$id}'");
            if(!$result){
                $Msg='failed';
            }else{
                $Msg='success';
            }
        }
    }else{
        $Msg='failed';
    }

    $cn->close();
    echo json_encode($Msg)
?>