import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppComponentService } from '../app.component.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  successMessage!: string;
  errorMessage!: string;
  registerFormAvailable=true;
  onClickRegister=false;

  constructor(private formBuilder:FormBuilder,private appComponentService:AppComponentService) { }
  registerForm!:FormGroup

  ngOnInit(): void {

    this.registerForm=this.formBuilder.group({
      username:['',{updateOn: 'blur',validation:[Validators.required]}],
      emailId:['',{updateOn: 'blur',validators:[Validators.email,Validators.required]}],
      phoneNumber:['',{updateOn: 'blur',validation:[Validators.required,Validators.minLength(10),
        Validators.maxLength(10)]}],
      password:['',{updateOn: 'blur',validators:[Validators.minLength(8),Validators.maxLength(14),
        Validators.required]}],
      gender:['',{updateOn: 'blur',validators:[Validators.required]}]
    })
  }

  onRegister(){
    
    this.appComponentService.register(this.registerForm.value).subscribe(
      data=>{
        this.successMessage=data.message;
        if(this.successMessage==="Registered Successfully"){
          this.registerFormAvailable=false
        }
        this.onClickRegister=true
        console.log(data.message);
      },
      error=>{
        this.errorMessage=error;
        console.log(error)
      }
    )
  }

}
