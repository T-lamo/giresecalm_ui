import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class CommonService {
  readonly APIUrl = "http://127.0.0.1:8000";
 // readonly staticFile ="http://127.0.0.1:8000/path";
  constructor(private http:HttpClient) { }

  getBeneficiaireList():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + "/beneficiaire/");
  }
  getBeneficiaireUnique(val:any):Observable<any>{
    return this.http.get<any>(this.APIUrl + "/beneficiaire/"+val);
  }
  addBeneficiaire(val:any){
    return this.http.post(this.APIUrl + "/beneficiaire/", val);
  }
  updateBeneficiaire(val:any, pk:any){
    return this.http.put(this.APIUrl + "/beneficiaire/"+pk,val);
  }
  deleteBeneficiaire(val:any){
    return this.http.delete(this.APIUrl + "/beneficiaire/"+ val);
  }

  login(username: string, password: string){
    return this.http.post<any>(this.APIUrl + "/api-token-auth/",{ username, password}).pipe(
      map(user=>{
        if(user && user.token){

          localStorage.setItem("currentUsers", JSON.stringify(user))
        }

        return user;
      })
    );

  }

  addUser(val:any){
    return this.http.post(this.APIUrl + "/profile/", val);
  }
}
