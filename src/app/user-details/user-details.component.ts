import { Component, } from '@angular/core';
import{User}from '../models/user.model';
import{UserService}from '../services/user.services';
import{FormControl,FormGroup,Validators,FormBuilder} from '@angular/forms';

//import {FormsModule,ReactiveFormsModule} from '@angular/forms';
@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent {

    users:User[];
    myFormDetails:FormGroup;
     
    constructor(private userService:UserService) {
      this.users=this.userService.getUsers();
     
      this.myFormDetails=new FormGroup({
        email:new FormControl('',Validators.required),
        address:new FormControl('',Validators.required),
        firstName:new FormControl('',Validators.required),
        lastName:new FormControl('',Validators.required),
        Hobbies:new FormControl('',Validators.required),
      })
    }
    get email()
    {
      return this.myFormDetails.get('email');
    }
  get address()
  {
    return this.myFormDetails.get('address');
  }
  get firstName()
  {
    return this.myFormDetails.get('firstName');
  }
  get lastName()
  {
    return this.myFormDetails.get('lastName');
  }
  get Hobbies()
  {
    return this.myFormDetails.get('Hobbies');
  }
addUser(myFormDetails){
    if(myFormDetails!=null){
  //return this.users.values;
  this.users=this.address.value;
   }
   else
   {
     console.log(myFormDetails);
   }}
   public export() {
    
    var data = [new User(this.email,this.address,this.firstName,this.lastName,this.Hobbies)]
    var options = {
      fieldSeparator: ';',
      quoteStrings: '"',
      decimalseparator: ',',
      showLabels: true,
      useBom: true
    };
   
  }

  public import(){}

}
    
