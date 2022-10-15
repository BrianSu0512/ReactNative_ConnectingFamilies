export default class DataManager  {
    static myInstance = null;
    userID = "";

    patients =[
        {
            userid: "user1",
            id:1,
            name:"Lucas",
            age:24,
            gender:"Male",
            bloodType:"B type",
            dob:"27/09/2000",
            phone:"0412345678",
            address:"123 A Street Sydney 2000",
            referTo:"AP",
            referredBy:"Dr. Tyson",
            rNbNO:"room 104",
            note:"take the pills three times per day",
            image:require("../assets/favicon.png"),
            eName:"Tim",
            relationship:"Aunt",
            ePhone:"0423456789",
            eAddress:"888 B Street Sydney 2000"
        },
        {
        
                userid: "user1",
                id:2,
                name:"Tme",
                age:20,
                gender:"Male",
                bloodType:"B type",
                dob:"27/09/2000",
                phone:"0412345678",
                address:"123 A Street Sydney 2000",
                referTo:"AP",
                referredBy:"Dr. Tyson",
                rNbNO:"room 104",
                note:"take the pills three times per day",
                image:require("../assets/favicon.png"),
            
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
            name:"Panadol",
            dose:"100mg",
            route:"PO",
            frequency:"TDS",
            note:"Forget to take the medicine",
            time:["6:00","12:00","18:00"],
        },
        {
            id:2,
            pId:1,
            name:"Amoxicillin",
            dose:"80mg",
            route:"PO",
            frequency:"TDS",
            note:"Forget to take the medicine",
            time:["6:00","11:00","18:00"],
        },
        {
            id:3,
            pId:1,
            name:"Abilify",
            dose:"50mg",
            route:"PO",
            frequency:"TDS",
            note:"Forget to take the medicine",
            time:["7:00","12:00","19:00"],
        }
    ]

    users = [
        {
            id: "user1",
            name:"B",
            phone:"0412345678",
            level:"Privilege Level 1",
            email: "b@gmail.com",
            password: "1234",
            image: require('../assets/icon.png'),
        },
        {
            id: "user2",
            name:"Jon Snow",
            email: "j@gmail.com",
            password: "2345",
            
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

    getPatients(id){
        return this.patients.filter((patient)=> patient.userid === id);
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

    getMHisotry(id){
        return this.medicalHistories.filter((m)=> m.id === id);
    }

    getPrescription(id){
        return this.Prescriptions.filter((p)=> p.pId === id);
    }



   
}