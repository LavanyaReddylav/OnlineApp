export class User{
    email:string;
    address:string;
    firstName:string;
    lastName:string;
     Hobbies:string;
    constructor(emal,adress,firstname,lastname,hobbies){
        this.email=emal;
        this.address=adress;
        this.firstName=firstname;
        this.lastName=lastname;
        this.Hobbies=hobbies;
    }
}