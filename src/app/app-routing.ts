import { Component, NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { ProfileComponent } from "./profile/profile.component";
import { LogInRouter } from "./register/logInRouter";
import { RegisterComponent } from "./register/register.component";



const appRoutes:Routes=[
    {path:"",component:LoginComponent},
    {path:"profile",component:ProfileComponent,canActivate:[LogInRouter]},
    {path:"register",component:RegisterComponent}
]
@NgModule({
    imports:[RouterModule.forRoot(appRoutes)],
    exports:[RouterModule]
})
export class Routing{

}