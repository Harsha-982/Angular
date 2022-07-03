import { Component, OnInit } from '@angular/core';
import { AppComponentService } from '../app.component.service';
import { LoggedInService } from '../shared/loggedIn.service';
import { Register } from '../shared/Register.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  username!:string
  userDetails!:Register

  constructor(private appComponentService:AppComponentService) { }
  
  ngOnInit(): void {
      this.username=localStorage.getItem("userEmailId") || ""
      this.appComponentService.getUserDetails(this.username).subscribe(
        data=>{
          this.userDetails=data;
          console.log(data)
        }
      );
  }



}
