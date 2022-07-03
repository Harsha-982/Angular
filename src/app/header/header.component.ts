import { Component, OnInit } from '@angular/core';
import { LoggedInService } from '../shared/loggedIn.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  loggedIn:Boolean=false;

  constructor(private loggedInservice:LoggedInService) { }

  ngOnInit(): void {
    this.loggedInservice.onLogIn.subscribe(
      onLogIn=>{
        this.loggedIn=onLogIn
      }
    )
  }
  
}
