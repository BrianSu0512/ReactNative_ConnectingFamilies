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

    $presID=$obj['prescripID'];
    $presName=$obj['prescripName'];
    $presDose=$obj['prescripDose'];
    $presRoute=$obj['prescripRoute'];
    $presFrequency=$obj['prescripFrequency'];

    $userPriv=$obj['userPriv'];
    $dataType=$obj['DataType'];

    switch($dataType){
        case 'history':
            $result= $cn->query("update MedicalHistory set Diagnosis='{$diag}', BeginDate='{$beginDate}', EndDate='{$endDate}' where MedicHistID='{$histID}'");
            break;
        case 'prescription':
            $result= $cn->query("update Prescription set PrescripName='{$presName}', PrescripDose='{$presDose}', PrescripRoute='{$presRoute}', PrescripFrequency='{$presFrequency}' where PrescripID='{$presID}'");
            break;
    }


    if(!$result){
        $Msg='failed';
    }else{
        $Msg='success';
    }

    $cn->close();
    echo json_encode($Msg)
?>