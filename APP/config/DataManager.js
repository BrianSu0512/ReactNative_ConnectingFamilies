import { Alert, TouchableWithoutFeedbackBase } from 'react-native';

export default class DataManager  {
    static myInstance = null;

    patients = [];

    medicalHistories=[];
    
    Prescriptions=[];

    curUser = [];
    allUsers = [];

    emergencyC= [];

    static getInstance(){
        if(DataManager.myInstance==null){
            DataManager.myInstance =  new DataManager();
        }
        return this.myInstance;
    }

    getUserID(){
        return this.curUser[0].UserID;
    }

    getAllPatients(){
        return this.patients;
    }

    getPatient(id){
        return this.patients.filter((patient)=> patient.PatientID === id);
    }

    addPatient(patient){
        this.patients.push(patient);
    }

    addPrescript(prescript){
        this.Prescriptions.push(prescript)
    }

    addHistory(history){
        this.medicalHistories.push(history)
    }

    editPatient(patient){
        return this.patients.splice(patient.id-1,1,patient)
    }

    deletePatient(patient){
        const newpatients=this.patients.filter (item => item.id !== patient.id);
        return this.patients.splice(0,this.patients.length,...newpatients)
    }

    reset(){
        this.patients = [];
        this.medicalHistories=[];
        this.Prescriptions=[];
        this.allUsers = [];
        this.curUser = [];
        this.prescriptLogs= [];
    }

    addCurUser(user){
        this.curUser.push(user);
    }

    getCurUser(){
        return this.curUser[0];
    }

    addAllUsers(user){
        this.allUsers.push(user);
    }

    getAllCarers(){
        console.log(this.allUsers)
        return this.allUsers
    }

    getMHisotry(id){
        return this.medicalHistories.filter((m)=> m.id === id);
    }
    
    getHisotry(pid){
        return this.medicalHistories.filter((m)=> m.pId === pid);
    }
    editHistory(history){
        return this.medicalHistories.splice(history.pId-1,1,history)
    }

    getPrescription(pid){
        return this.Prescriptions.filter((p)=> p.pId === pid);
    }

    getHistory(id){
        return this.medicalHistories.filter((m)=> m.PatientID === id);
    }

    getSpecHist(hID){
        return this.medicalHistories.filter((m)=> m.MedicHistID === hID);
    }

    getPrescription(id){
        return this.Prescriptions.filter((p)=> p.PatientID=== id);
    }

    addLog(log){
        this.prescriptLogs.push(log)
    }

    getLog(){
        return this.prescriptLogs;
    }

    addEmergency(contact){
        this.emergencyC.push(contact)
    }

    getEmergency(id){
        return this.emergencyC.filter((p)=> p.PatientID=== id);
    }


    getLevel(userid){
        var priv = '';
        if(this.curUser[0].UserPriv == '1'){
            priv = 'Privilege Level 1'
        } else{
            priv = 'Privilege Level 2'
        }
        return priv
    }

    async editAccount(data, types){
        var InsertAPIURL = "https://medidecks.homes/api/Account.php";
        
        var header={
            'Accept':'application/json',
            'Content-Type':'application/json'
        };

        var Data={}
        if(types == 'info'){
            Data={
                userName: data.name,
                userEmail: data.email,
                userPH: data.phone,
                userID: data.id,
                type: types
            };
        }else if(types == 'password'){
            Data={
                userPass: data.password,
                userID: this.curUser[0].UserID,
                type: types
            };
        }

        const res = await fetch(InsertAPIURL, {
            method:'POST',
            headers:header,
            body: JSON.stringify(Data)
        });
        const getData = await res.json();
        if(getData == 'success'){
            if(types == 'info'){
                var currentUser = this.getCurUser();
                currentUser.UserName = data.name;
                currentUser.UserEmail = data.email;
                currentUser.UserPH = data.phone;
            }else if(types == 'password'){
                var currentUser = this.getCurUser();
                currentUser.UserPass = data.password;
            }
            
        }else{
            Alert.alert("Failed to edit account")
        }
    }

    async getCarers(){
        var InsertAPIURL = "https://medidecks.homes/api/Patient.php";
        
        var header={
            'Accept':'application/json',
            'Content-Type':'application/json'
        };
    
        var Data={
            userID: this.curUser[0].UserID,
            userPriv: this.curUser[0].UserPriv,
            DataType: 'GetCarers'
        };

        const res = await fetch(InsertAPIURL, {
            method:'POST',
            headers:header,
            body: JSON.stringify(Data)
        });
        const getData = await res.json();
        if(getData.length>0 && getData != 'failed'){
            for(var i =0; i < getData.length; i++){
                this.addAllUsers(getData[i])
            }
        }
    }

    async editPatientData(data, types){
        var InsertAPIURL = "https://medidecks.homes/api/editPatient.php";
        
        var header={
            'Accept':'application/json',
            'Content-Type':'application/json'
        };

        var Data={}

        if(types == 'history'){
            Data={
                patientID: data.PatientID,
                Diagnosis: data.Diagnosis,
                BeginDate: data.BeginDate,
                EndDate: data.EndDate,
                MedicHistID: data.MedicHistID,
                DataType: types
            };
        }
        const res = await fetch(InsertAPIURL, {
            method:'POST',
            headers:header,
            body: JSON.stringify(Data)
        });
        const getData = await res.json();
        if(getData == 'success'){
            if(types == 'history'){
                console.log(this.medicalHistories)
                var curHistory = this.getSpecHist(data.MedicHistID);
                curHistory[0].Diagnosis = data.Diagnosis
                curHistory[0].BeginDate = data.BeginDate
                curHistory[0].EndDate = data.EndDate
                console.log(this.medicalHistories)
            }
            
        }else{
            Alert.alert("Failed to edit patient data")
        }
    }

    async getPatient(){
        var InsertAPIURL = "https://medidecks.homes/api/Patient.php";
        
        var header={
            'Accept':'application/json',
            'Content-Type':'application/json'
        };
    
        var Data={
            userID: this.curUser[0].UserID,
            userPriv: this.curUser[0].UserPriv,
            DataType: 'GetPatient'
        };

        const res = await fetch(InsertAPIURL, {
            method:'POST',
            headers:header,
            body: JSON.stringify(Data)
        });
        const getData = await res.json();
        if(getData.length>0 && getData != 'failed'){
            for(var i =0; i < getData.length; i++){
                this.addPatient(getData[i])
            }
        }
    }

    async getPatientData(Type){
        var InsertAPIURL = "https://medidecks.homes/api/Patient.php";
        
        var header={
            'Accept':'application/json',
            'Content-Type':'application/json'
        };
    
        var Data={
            userID: this.curUser[0].UserID,
            DataType: Type
        };

        const res = await fetch(InsertAPIURL, {
            method:'POST',
            headers:header,
            body: JSON.stringify(Data)
        });
        const getData = await res.json();
        var time = [];
        var curID = '1';
        if(getData.length>0 && getData != 'failed'){
            for(var i =0; i < getData.length; i++){
                if(Type == 'GetPrescription'){
                    this.addPrescript(getData[i])
                }else if(Type == 'GetHistory'){
                    this.addHistory(getData[i])
                }else if(Type =='GetEmergency'){
                    this.addEmergency(getData[i])
                }else if(Type == 'GetLog'){
                    if(getData[i].PrescripID == curID){
                        time.push(getData[i].MedicineTime)
                    }else{
                        this.Prescriptions.filter((p)=> p.PrescripID=== curID).time = time
                        curID = getData[i].PrescripID
                        time = [];
                        time.push(getData[i].MedicineTime);

                    }

                    if(i == getData.length - 1){
                        this.Prescriptions.filter((p)=> p.PrescripID=== curID).time = time
                    }
                }
            }
        }
    }

}