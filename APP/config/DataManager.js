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
        },
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

    
   
}