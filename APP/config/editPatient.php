<?php
    $cn= mysqli_init();
    $cn->options(MYSQLI_OPT_CONNECT_TIMEOUT, 100);
    $cn->options(MYSQLI_OPT_READ_TIMEOUT, 100);
    $cn->real_connect("medideck.c9yvg7mtywqz.ap-southeast-2.rds.amazonaws.com", "SonTran1829", "UnChEcK12PaSsWoRd34","medideck", 3306);

    $json = file_get_contents('php://input');
    $obj = json_decode($json,true);

    $userID=$obj['userID'];
    $patientID=$obj['patientID'];

    $histID=$obj['MedicHistID'];
    $diag=$obj['Diagnosis'];
    $beginDate=$obj['BeginDate'];
    $endDate=$obj['EndDate'];

    $userPriv=$obj['userPriv'];
    $dataType=$obj['DataType'];

  
    if($dataType == "history"){
        $result= $cn->query("update MedicalHistory set Diagnosis='{$diag}', BeginDate='{$beginDate}', EndDate='{$endDate}' where MedicHistID='{$histID}'");
    }


    if(!$result){
        $Msg='failed';
    }else{
        $Msg='success';
    }

    $cn->close();
    echo json_encode($Msg)
?>