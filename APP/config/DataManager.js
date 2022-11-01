export default class DataManager  {
    static myInstance = null;
    userID = "";

    patients =[
        {
            userid: "user1",
            id:1,
            name:"Lucas",
            age:"24",
            gender:"Male",
            bloodType:"B type",
            dob:"27/09/2000",
            phone:"0412345678",
            address:"123 A Street Sydney 2000",
            referTo:"AP",
            referredBy:"Dr. Tyson",
            rNbNO:"room 104",
            note:"take the pills three times per day",
            image:require("../assets/Patient.png"),
            eName:"Tim",
            relationship:"Aunt",
            ePhone:"0423456789",
            eAddress:"888 B Street Sydney 2000"
        },
        {
        
                userid: "user1",
                id:2,
                name:"Tme",
                age:"20",
                gender:"Male",
                bloodType:"B type",
                dob:"27/09/2000",
                phone:"0412345678",
                address:"123 A Street Sydney 2000",
                referTo:"AP",
                referredBy:"Dr. Tyson",
                rNbNO:"room 104",
                note:"take the pills three times per day",
                image:require("../assets/Patient.png"),
            
        },
        {
        
                userid: "user2",
                id:3,
                name:"Vivid",
                age:"20",
                gender:"Female",
                bloodType:"AB type",
                dob:"27/09/2010",
                phone:"0412345678",
                address:"999 X Street Sydney 2000",
                referTo:"AP",
                referredBy:"Dr. Steve",
                rNbNO:"room 220",
                note:"take the pills three times per day",
                image:require("../assets/Patient.png"),
            
        }
        
    ]

    medicalHistories=[{
              id:1,  
              pId:1,
              diagnosis:"Covid-19",
              Date:"12/03/2019",
              StopDate:"10/06/2019"
            },
            {
                id:1,  
                pId:2,
                diagnosis:"High Blood Pressure",
                Date:"12/09/2018",
                StopDate:"10/10/2018"
            },
              {
                id:1,  
                pId:3,
                diagnosis:"Coughing",
                Date:"22/01/2018",
                StopDate:"10/04/2018"
            },
            {
                id:2,  
                pId:1,
                diagnosis:"Covid-19",
                Date:"12/03/2019",
                StopDate:"10/06/2019"
              },
        ]
    
    Prescriptions=[
        {
            id:1,
            pId:1,
            date:0,
            name:"Panadol",
            dose:"100mg",
            route:"PO",
            frequency:"TDS",
            note:"1 hr late to take medicine",
            time:["6:00","12:00","18:00"],
        },
        {
            id:2,
            pId:1,
            date:0,
            name:"Amoxicillin",
            dose:"80mg",
            route:"PO",
            frequency:"TDS",
            note:"1 hr late to take medicine",
            time:["6:00","11:00","18:00"],
        },
        {
            id:3,
            pId:1,
            date:0,
            name:"Abilify",
            dose:"50mg",
            route:"PO",
            frequency:"TDS",
            note:"1 hr late to take medicine",
            time:["7:00","12:00","19:00"],
        },{
            id:4,
            pId:1,
            date:1,
            name:"Panadol",
            dose:"100mg",
            route:"PO",
            frequency:"TDS",
            note:"Nope",
            time:["6:00","12:00","18:00"],
        },
        {
            id:5,
            pId:1,
            date:1,
            name:"Amoxicillin",
            dose:"80mg",
            route:"PO",
            frequency:"TDS",
            note:"Nope",
            time:["6:00","11:00","18:00"],
        },
        {
            id:6,
            pId:1,
            date:1,
            name:"Abilify",
            dose:"50mg",
            route:"PO",
            frequency:"TDS",
            note:"Nope",
            time:["7:00","12:00","19:00"],
        },
    ]

    users = [
        {
            id: "user1",
            name:"B",
            phone:"0412345678",
            level:"Privilege Level 1",
            email: "b@gmail.com",
            password: "1234",
            age:22,
            gender:"Female",
            bloodType:"B type",
            dob:"27/03/2000",
            phone:"0467867867",
            image: require('../assets/Carer.png'),
        },
        {
            id: "user2",
            name:"Jon Snow",
            phone:"0412345678",
            email: "j@gmail.com",
            level:"Privilege Level 1",
            password: "2345",
            age:20,
            gender:"Male",
            bloodType:"B type",
            dob:"20/07/2002",
            phone:"04567856789",
            image: require('../assets/Carer.png'),
            
        },
        {
            id: "user3",
            name:"M",
            phone:"04345678901",
            email: "A@gmail.com",
            level:"Privilege Level 2",
            password: "1234",
            age:28,
            gender:"Male",
            bloodType:"B type",
            dob:"27/09/1992",
            phone:"0412345678",
            image: require('../assets/Carer.png'),
            
        },
    ];

    static getInstance(){
        if(DataManager.myInstance==null){
            DataManager.myInstance =  new DataManager();
        }
        return this.myInstance;
    }

    getUserID(){
        return this.userID;
    }

    setUserID(id){
        this.userID = id;
    }
    getAllPatients(){
        return this.patients;
    }
    getPatients(userid){
        return this.patients.filter((patient)=> patient.userid === userid);
    }
    getPatient(id){
        return this.patients.filter((patient)=> patient.id === id);
    }

    getPatientCarerID(carername){
        console.log(carername)
        const uxx=this.users.filter((u)=> u.name === carername);
        return uxx[0].id
    }

    addPatient(patient){
        this.patients.push(patient);
    }

    editPatient(patient){
        console.log("line 87",patient.id-1)
        return this.patients.splice(patient.id-1,1,patient)
    }

    deletePatient(patient){
        const newpatients=this.patients.filter (item => item.id !== patient.id);
        
        return this.patients.splice(0,this.patients.length,...newpatients)
        
    }

    getUser(id){
        return this.users.filter((user)=> user.id === id);
    }

    addUser(user){
        this.users.push(user);
    }
    editUser(user){
        return this.users.splice(user.id-1,1,user)
    }

    getLevel(id){
        const user= this.users.filter((user)=> user.id === id)
        return user[0].level
    }

    getCarers(){
        return this.users.filter((u)=>u.level==="Privilege Level 1")
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

    getDatePrescription(pid,pDate){
        const  all =this.Prescriptions.filter((p)=> p.pId === pid);
        return all.filter((p)=>p.date===pDate)
      
    }

    getSpecificPres(id){
        return this.Prescriptions.filter((p)=> p.id === id);
    }

    addHistory(history){
        console.log("line244",history)
        this.medicalHistories.push(history);
    }
    addPrescription(prescription){
        console.log("line244",prescription)
        this.Prescriptions.push(prescription);
    }

    editPrescription(prescription){
        return this.Prescriptions.splice(prescription.id-1,1,prescription)
    }

   
}