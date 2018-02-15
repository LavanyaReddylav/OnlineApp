import {User} from '../models/user.model';
import {Injectable} from '@angular/core';
import {Http,Response} from '@angular/http';
import { element } from 'protractor';
import "rxjs/Rx";
@Injectable()
export class  UserService{
    users:User[];
    constructor(private http:Http){
        this.users=[];
        
         }
    getData(){
       // console.log("welcome to express");
         return this.http.get("http://localhost:3000/api/data") 
    }
    getUsers()
    {
    this.getData().map((res:Response)=>res.json())
                 .subscribe((data)=>{console.log(data.data);
                  this.fillArray(data.data)
                 });
                           return this.users;
    }
    fillArray(datas){
        var iCnt:number=0;
        datas.forEach(element=>
        {
          this.users[iCnt] = new User(element.email,element.address,element.firstName,element.lastName,element.Hobbie);
          iCnt++;
        });
        
    }
}

