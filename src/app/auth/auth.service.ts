import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  readonly APIUrl : any;
  


  constructor(private http:HttpClient) { 
    this.APIUrl=environment.apiUrl;

  }
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
