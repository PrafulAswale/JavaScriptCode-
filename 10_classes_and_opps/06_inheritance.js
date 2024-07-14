class User{
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`USERNAME Is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email;
        this.password = password
    }
    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const userone = new Teacher("Praful", "praful@aswale.com", "pass@123");

userone.logMe();
const usertwo = new User("Abhijit");
usertwo.logMe();


console.log(userone instanceof User);