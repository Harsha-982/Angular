import { Component, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AppComponentService } from '../app.component.service';
import { LoggedInService } from '../shared/loggedIn.service';
import { Register } from '../shared/Register.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  successMessage!: string;
  errorMessage!:string;
  onLogInClicked=false;
  LoggedIn:Boolean=false;

  constructor(private formBuilder:FormBuilder,
    private appComponentService:AppComponentService,
    private loggedInService:LoggedInService,
    private router:Router,
    private route:ActivatedRoute) { }
  loginForm!:FormGroup;

  ngOnInit(): void {
    this.loginForm=this.formBuilder.group({
      username:['harshavardhini1702@gmail.com',{updateOn: 'blur',validation:[Validators.required]}],
      password:['harsha&982',{updateOn: 'blur',validators:[Validators.minLength(8),Validators.maxLength(14)
        ,Validators.required]}],
    })

  }

  onLogin(){
    this.appComponentService.login(this.loginForm.controls["username"].value,
    this.loginForm.controls["password"].value).subscribe(
      data=>{
        if(data!=null){
          this.successMessage="You have logged in Successfully"
          this.LoggedIn=true;
          console.log(data.message)
          this.loggedInService.onLogIn.emit(this.LoggedIn);
          // this.loggedInService.user.emit(this.userDetails);
          localStorage.setItem("userEmailId",data.message)
        }
        else{
          this.onLogInClicked=true;
          this.errorMessage="Invalid Credencials"
        }
      
    },
    error=>{
      this.errorMessage=error;
    }
    )
  }

}
