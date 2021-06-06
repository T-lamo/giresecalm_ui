import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ITS_JUST_ANGULAR } from '@angular/core/src/r3_symbols';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { CommonService } from 'src/app/common.service';
import { Ong } from 'src/app/models/ong';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  ong:any;

  constructor(private authService:AuthService,private router:Router,private service:CommonService) { }

  ngOnInit(): void {
    this.ong = new Ong("protos",1);
    console.log(this.ong);
    /*this.service.addOng(this.ong).subscribe(res =>{
      console.log("inserted")
    });*/
    //console.log(localStorage.getItem("currentUsers"))
    /* this.service.getOngSingle(1).subscribe(data=>{
       this.ong=new Ong(data.nom,data.statut)
       console.log("this ong:"+this.ong)
      //let dat = JSON.stringify(data)
      console.log("data:"+ data);
    });*/
    this.service.updateOng(this.ong,1).subscribe(res =>{
      console.log("partial update is done");
    })
    if(localStorage.getItem("currentUsers")){
      this.router.navigate(['home'])

    }
    this.authService.login("peterson","peterson").pipe(first()).subscribe(
      data=>{
        this.router.navigate(['home'])

      }
    )
  }

}
