import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { tap, catchError } from "rxjs/operators"
import { Message } from "./shared/message";
import { Register } from "./shared/Register.service";

@Injectable()
export class AppComponentService {
    

    url = "http://localhost:8081"
    constructor(private http: HttpClient) { }

    public register(register: Register):Observable<any> {
        return this.http.post<Message>(this.url+"/register",register).pipe(
            tap(data => console.log(data)), catchError(this.handleError))
      }

    public login(username: string, password: string): Observable<Message> {
        return this.http.get<Message>(this.url+"/login/" + username + "/" + password).pipe(
            tap(data => console.log(data)), catchError(this.handleError))
    }

    public getUserDetails(username:string):Observable<Register>{
        return this.http.get<Register>(this.url+"/getUserDetails/"+username).pipe(
            tap(data=>console.log(JSON.stringify(data))),catchError(this.handleError)
        )
    }
    handleError(err: HttpErrorResponse){
        let errMsg='';
        if(err.error instanceof Error){
            errMsg=err.error.message
            console.log(errMsg)
        }
        else{
            errMsg=err.error.message
            console.log(err.error)
        }
        return throwError(errMsg)
    }
}