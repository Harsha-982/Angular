import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { Routing } from './app-routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponentService } from './app.component.service';
import { LoggedInService } from './shared/loggedIn.service';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HeaderComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    Routing,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AppComponentService,LoggedInService],
  bootstrap: [AppComponent]
})
export class AppModule { }
