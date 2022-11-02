<?php
    $cn= mysqli_init();
    $cn->options(MYSQLI_OPT_CONNECT_TIMEOUT, 100);
    $cn->options(MYSQLI_OPT_READ_TIMEOUT, 100);
    $cn->real_connect("medideck.c9yvg7mtywqz.ap-southeast-2.rds.amazonaws.com", "SonTran1829", "UnChEcK12PaSsWoRd34","medideck", 3306);

    $json = file_get_contents('php://input');
    $obj = json_decode($json,true);

    $name=$obj['userName'];
    $age=$obj['userPass'];
    $gender=$obj['userPass'];
    $DOB=$obj['userPass'];
    $PH=$obj['userPass'];
    $address=$obj['userPass'];
    $referTo=$obj['userPass'];
    $referBy=$obj['userPass'];
    $roomNo=$obj['userPass'];
    $userID=$obj['userID'];
    $patientID=$obj['patientID'];

    $userPriv=$obj['userPriv'];
    $dataType=$obj['DataType'];

    if($userPriv == '1'){
        switch($dataType){
            case 'GetHistory':
                $result= $cn->query("SELECT MedicalHistory.* FROM MedicalHistory inner join Patients on Patients.PatientID=MedicalHistory.PatientID where Patients.UserID='{$userID}'");
                break;
            case 'GetPatient':
                $result= $cn->query("SELECT Patients.* FROM Patients inner join Users on Patients.UserID=Users.UserID where Users.UserID='{$userID}'");
                break;
            case 'GetPrescription':
                $result= $cn->query("SELECT Prescription.* FROM Prescription inner join Patients on Patients.PatientID=Prescription.PatientID where Patients.UserID='{$userID}'");
                break;
            case 'GetUser':
                $result= $cn->query("SELECT * FROM Users where Users.UserID='{$userID}'");
                break;
            case 'GetLog':
                $result= $cn->query("SELECT MedicTime.* FROM MedicTime inner join Patients on Patients.PatientID=MedicTime.PatientID where Patients.UserID='{$userID}'");
                break;
            case 'GetEmergency':
                $result= $cn->query("SELECT Emergency.* FROM Emergency inner join Patients on Patients.PatientID=Emergency.PatientID where Patients.UserID='{$userID}'");
                break;
        }
    } else{
        switch($dataType){
            case 'GetHistory':
                $result= $cn->query("SELECT MedicalHistory.* FROM MedicalHistory");
                break;
            case 'GetPatient':
                $result= $cn->query("SELECT * FROM Patients");
                break;
            case 'GetPrescription':
                $result= $cn->query("SELECT Prescription.* FROM Prescription");
                break;
            case 'GetUser':
                $result= $cn->query("SELECT * FROM Users where Users.UserID='{$userID}'");
                break;
            case 'GetLog':
                $result= $cn->query("SELECT MedicTime.* FROM MedicTime");
                break;
            case 'GetEmergency':
                $result= $cn->query("SELECT Emergency.* FROM Emergency");
                break;
            case 'GetCarers':
                $result= $cn->query("SELECT Users.* FROM Users where Users.UserPriv = 1");
                break;
        }
    }

    

    //$row = mysqli_fetch_array($result, MYSQLI_ASSOC);
    if($result->num_rows==0){
        $Msg='failed';
    }
    else{
        $Msg=mysqli_fetch_all($result, MYSQLI_ASSOC);
    }

    $cn->close();
    echo json_encode($Msg)
?>