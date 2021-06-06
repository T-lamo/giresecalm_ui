import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import {CommonService} from 'src/app/common.service'
@Component({
  selector: 'app-add-edit-beneficiaire',
  templateUrl: './add-edit-beneficiaire.component.html',
  styleUrls: ['./add-edit-beneficiaire.component.css']
})
export class AddEditBeneficiaireComponent implements OnInit {

  constructor(private service:CommonService) { }
  BeneficiaireList:any=[];
  val = {
    name: "Ricardo",
    sexe: "masculin"
  }
  ngOnInit(): void {
    this.retreiveBeneficiaire();
  }

  retreiveBeneficiaire(){
   /* var val = {
      name: "Ronick",
      sexe: "masculin"
    }
   this.service.addBeneficiaire(val).subscribe(res =>{
      alert (res.toString());
    });*/
    /*this.service.getBeneficiaireList().subscribe(data=>{
      this.BeneficiaireList =data;
      console.log("data:"+data);
    });*/

   /* this.service.getBeneficiaireUnique(4).subscribe(data=>{
      var val = {
        name: data.name,
        sexe: data.sexe
      }
      this.BeneficiaireList.push(val);
      console.log("data:"+data.name);
    });*/
    /*this.service.login("nathasha","nathasha").pipe(first()).subscribe(
      data=>{
        console.log(data.username);
      }
    )*/

    /*var val = {
      "username": "nathasha",
      "email": "nathasha@gmail.com",
      "password": "nathasha",
      "firstname": "Nathasha",
      "lastname": "Norestan"

    } 
    this.service.signup(val).subscribe(res =>{
      console.log (res.toString());
    });
    */

    

    /*this.service.updateBeneficiaire(this.val,4).subscribe(data =>{
      console.log("greattt");
    });*/

    /*this.service.deleteBeneficiaire(5).subscribe(data =>{

    });*/

    
  }
}
