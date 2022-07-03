import { EventEmitter } from "@angular/core";
import { Register } from "./Register.service";

export class LoggedInService{

    public onLogIn=new EventEmitter<Boolean>();

    public user= new EventEmitter<Register>();
   
    public setUserDetails(userDetails:Register){
        this.user.emit(userDetails)
    }
    public getUserDetails(){
        return this.user;
    }
}