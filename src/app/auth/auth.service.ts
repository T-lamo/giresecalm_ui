import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  readonly APIUrl = "http://127.0.0.1:8000";


  constructor(private http:HttpClient) { }
  login(username: string, password: string){
    return this.http.post<any>(this.APIUrl + "/auth/login/",{ username, password}).pipe(
      map(user=>{
        if(user && user.token){
          localStorage.setItem("currentUsers", JSON.stringify(user))
        }
        return user;
      })
    );
  }

  signup(val:any){
    return this.http.post(this.APIUrl + "/auth/signup/", val);
  }
  signout(){
    localStorage.removeItem("currentUsers");
  }
}
