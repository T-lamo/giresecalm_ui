import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { CommonService } from 'src/app/common.service';
import { Router } from "@angular/router";


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private service:CommonService, private router:Router) { }

  ngOnInit(): void {
    //this.service.signout();
   //this.infoUser();
  }

  infoUser(){
    var val = {
      "username": "peterson",
      "email": "peterson@gmail.com",
      "password": "peterson",
      "firstname": "Peterson",
      "lastname": "Delva"

    } 
    this.service.signup(val).subscribe(res =>{
      this.router.navigate(['login'])
      console.log (res.toString());
    });
  }

}
