<?php
    $cn= mysqli_init();
    $cn->options(MYSQLI_OPT_CONNECT_TIMEOUT, 100);
    $cn->options(MYSQLI_OPT_READ_TIMEOUT, 100);
    $cn->real_connect("medideck.c9yvg7mtywqz.ap-southeast-2.rds.amazonaws.com", "SonTran1829", "UnChEcK12PaSsWoRd34","medideck", 3306);

    $json = file_get_contents('php://input');
    $obj = json_decode($json,true);

    $userID=$obj['userID'];
    $patientID=$obj['patientID'];

    $diag=$obj['Diagnosis'];
    $beginDate=$obj['BeginDate'];
    $endDate=$obj['EndDate'];

    $presName=$obj['prescripName'];
    $presDose=$obj['prescripDose'];
    $presRoute=$obj['prescripRoute'];
    $presFrequency=$obj['prescripFrequency'];

    $userPriv=$obj['userPriv'];
    $dataType=$obj['DataType'];

    switch($dataType){
        case 'history':
            $result= $cn->query("Insert into MedicalHistory(Diagnosis, BeginDate, EndDate, PatientID) values ('{$diag}', '{$beginDate}', '{$endDate}', '{$patientID}')");
            break;
        case 'prescription':
            $result= $cn->query("Insert into Prescription(PrescripName, PrescripDose, PrescripRoute, PrescripFrequency, BeginDate, EndDate, PatientID) values ('{$presName}', '{$presDose}', '{$presRoute}', '{$presFrequency}', '{$beginDate}', '{$endDate}', '{$patientID}')");
            break;
        case 'patient':
            $result= $cn->query("Insert into Prescription(PrescripName, PrescripDose, PrescripRoute, PrescripFrequency, BeginDate, EndDate, PatientID) values ('{$presName}', '{$presDose}', '{$presRoute}', '{$presFrequency}', '{$beginDate}', '{$endDate}', '{$patientID}')");
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