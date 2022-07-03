import { CanActivate, Router } from "@angular/router";
import { AppComponentService } from "../app.component.service";
import { LoginComponent } from "../login/login.component";

export class LogInRouter implements CanActivate{
    constructor(private logInComponent:LoginComponent , private router: Router) { }
    canActivate(): boolean {
        if (this.logInComponent.LoggedIn) {
            return true;
        }
        this.router.navigate(['']);
        return false;
    }
}