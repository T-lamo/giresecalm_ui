import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  readonly APIUrl = "http://127.0.0.1:8000";
 // readonly staticFile ="http://127.0.0.1:8000/path";
  constructor(private http:HttpClient, private router:Router) { }

  addOng(val:any){
    return this.http.post(this.APIUrl + "/gire/ong/", val);
  }
  getOng():Observable<any>{
    return this.http.get<any>(this.APIUrl + "/gire/ong/");
  }
  getOngSingle(val:any):Observable<any>{
    return this.http.get<any>(this.APIUrl + "/gire/ong/"+val);
  }
  updateOng(val:any, pk:any){
    return this.http.put(this.APIUrl + "/gire/ong/"+pk,val);
  }
  deleteOng(val:any){
    return this.http.delete(this.APIUrl + "/gire/ong/"+ val);
  }

  addUser(val:any){
    return this.http.post(this.APIUrl + "/gire/user/", val);
  }
  getUser():Observable<any>{
    return this.http.get<any>(this.APIUrl + "/gire/user/");
  }
  getUserSingle(val:any):Observable<any>{
    return this.http.get<any>(this.APIUrl + "/gire/user/"+val);
  }
  updateUser(val:any, pk:any){
    return this.http.put(this.APIUrl + "/gire/user/"+pk,val);
  }
  deleteUser(val:any){
    return this.http.delete(this.APIUrl + "/gire/user/"+ val);
  }

  addFonction(val:any){
    return this.http.post(this.APIUrl + "/gire/fonction/", val);
  }
  getFonction():Observable<any>{
    return this.http.get<any>(this.APIUrl + "/gire/fonction/");
  }
  getFonctionSingle(val:any):Observable<any>{
    return this.http.get<any>(this.APIUrl + "/gire/fonction/"+val);
  }
  updateFonction(val:any, pk:any){
    return this.http.put(this.APIUrl + "/gire/fonction/"+pk,val);
  }
  deleteFonction(val:any){
    return this.http.delete(this.APIUrl + "/gire/fonction/"+ val);
  }

  addBeneficiaire(val:any){
    return this.http.post(this.APIUrl + "/gire/beneficiaire/", val);
  }
  getBeneficiaire():Observable<any>{
    return this.http.get<any>(this.APIUrl + "/gire/beneficiaire/");
  }
  getBeneficiaireSingle(val:any):Observable<any>{
    return this.http.get<any>(this.APIUrl + "/gire/beneficiaire/"+val);
  }
  updateBeneficiaire(val:any, pk:any){
    return this.http.put(this.APIUrl + "/gire/fonction/"+pk,val);
  }  
  deleteBeneficiaire(val:any){
    return this.http.delete(this.APIUrl + "/beneficiaire/"+ val);
  }
  addCategorieIndicateur(val:any){
    return this.http.post(this.APIUrl + "/gire/categorieindicateur/", val);
  }
  getCategorieIndicateur():Observable<any>{
    return this.http.get<any>(this.APIUrl + "/gire/categorieindicateur/");
  }
  getCategorieIndicateurSingle(val:any):Observable<any>{
    return this.http.get<any>(this.APIUrl + "/gire/categorieindicateur/"+val);
  }
  updateCategorieIndicateur(val:any, pk:any){
    return this.http.put(this.APIUrl + "/gire/categorieindicateur/"+pk,val);
  }
  deleteCategorieIndicateur(val:any){
    return this.http.delete(this.APIUrl + "/gire/categorieindicateur/"+ val);
  }

  addExtrant(val:any){
    return this.http.post(this.APIUrl + "/gire/extrant/", val);
  }
  getExtrant():Observable<any>{
    return this.http.get<any>(this.APIUrl + "/gire/extrant/");
  }
  getExtrantSingle(val:any):Observable<any>{
    return this.http.get<any>(this.APIUrl + "/gire/extrant/"+val);
  }
  updateExtrant(val:any, pk:any){
    return this.http.put(this.APIUrl + "/gire/extrant/"+pk,val);
  }
  deleteExtrant(val:any){
    return this.http.delete(this.APIUrl + "/gire/extrant/"+ val);
  }

  addSousExtrant(val:any){
    return this.http.post(this.APIUrl + "/gire/sousextrant/", val);
  }
  getSousExtrant():Observable<any>{
    return this.http.get<any>(this.APIUrl + "/gire/sousextrant/");
  }
  getSousExtrantSingle(val:any):Observable<any>{
    return this.http.get<any>(this.APIUrl + "/gire/sousextrant/"+val);
  }
  updateSousExtrant(val:any, pk:any){
    return this.http.put(this.APIUrl + "/gire/sousextrant/"+pk,val);
  }
  deleteSousExtrant(val:any){
    return this.http.delete(this.APIUrl + "/gire/sousextrant/"+ val);
  }

  addIndicateurResultat(val:any){
    return this.http.post(this.APIUrl + "/gire/indicateurresultat/", val);
  }
  getIndicateurResultat():Observable<any>{
    return this.http.get<any>(this.APIUrl + "/gire/indicateurresultat/");
  }
  getIndicateurResultatSingle(val:any):Observable<any>{
    return this.http.get<any>(this.APIUrl + "/gire/indicateurresultat/"+val);
  }
  updateIndicateurResultat(val:any, pk:any){
    return this.http.put(this.APIUrl + "/gire/indicateurresultat/"+pk,val);
  }
  deleteIndicateurResultat(val:any){
    return this.http.delete(this.APIUrl + "/gire/indicateurresultat/"+ val);
  }

  addIndicateur(val:any){
    return this.http.post(this.APIUrl + "/gire/indicateur/", val);
  }
  getIndicateur():Observable<any>{
    return this.http.get<any>(this.APIUrl + "/gire/indicateur/");
  }
  getIndicateurSingle(val:any):Observable<any>{
    return this.http.get<any>(this.APIUrl + "/gire/indicateur/"+val);
  }
  updateIndicateur(val:any, pk:any){
    return this.http.put(this.APIUrl + "/gire/indicateur/"+pk,val);
  }
  deleteIndicateur(val:any){
    return this.http.delete(this.APIUrl + "/gire/indicateur/"+ val);
  }

  addAvancementIndicateur(val:any){
    return this.http.post(this.APIUrl + "/gire/avancementindicateur/", val);
  }
  getAvancementIndicateur():Observable<any>{
    return this.http.get<any>(this.APIUrl + "/gire/avancementindicateur/");
  }
  getAvancementIndicateurSingle(val:any):Observable<any>{
    return this.http.get<any>(this.APIUrl + "/gire/avancementindicateur/"+val);
  }
  updateAvancementIndicateur(val:any, pk:any){
    return this.http.put(this.APIUrl + "/gire/avancementindicateur/"+pk,val);
  }
  deleteAvancementIndicateur(val:any){
    return this.http.delete(this.APIUrl + "/gire/avancementindicateur/"+ val);
  }

  addLocalite(val:any){
    return this.http.post(this.APIUrl + "/gire/localite/", val);
  }
  getLocalite():Observable<any>{
    return this.http.get<any>(this.APIUrl + "/gire/localite/");
  }
  getLocaliteSingle(val:any):Observable<any>{
    return this.http.get<any>(this.APIUrl + "/gire/localite/"+val);
  }
  updateLocalite(val:any, pk:any){
    return this.http.put(this.APIUrl + "/gire/localite/"+pk,val);
  }
  deleteLocalite(val:any){
    return this.http.delete(this.APIUrl + "/gire/localite/"+ val);
  }
  addBassinVersant(val:any){
    return this.http.post(this.APIUrl + "/gire/bassinversant/", val);
  }
  getBassinVersant():Observable<any>{
    return this.http.get<any>(this.APIUrl + "/gire/bassinversant/");
  }
  getBassinVersantSingle(val:any):Observable<any>{
    return this.http.get<any>(this.APIUrl + "/gire/bassinversant/"+val);
  }
  updateBassinVersant(val:any, pk:any){
    return this.http.put(this.APIUrl + "/gire/bassinversant/"+pk,val);
  }
  deleteBassinVersant(val:any){
    return this.http.delete(this.APIUrl + "/gire/bassinversant/"+ val);
  }
  addSectionCommunale(val:any){
    return this.http.post(this.APIUrl + "/gire/sectioncommunale/", val);
  }
  getSectionCommunale():Observable<any>{
    return this.http.get<any>(this.APIUrl + "/gire/sectioncommunale/");
  }
  getSectionCommunaleSingle(val:any):Observable<any>{
    return this.http.get<any>(this.APIUrl + "/gire/sectioncommunale/"+val);
  }
  updateSectionCommunale(val:any, pk:any){
    return this.http.put(this.APIUrl + "/gire/sectioncommunale/"+pk,val);
  }
  deleteSectionCommunale(val:any){
    return this.http.delete(this.APIUrl + "/gire/sectioncommunale/"+ val);
  }

  addCommune(val:any){
    return this.http.post(this.APIUrl + "/gire/commune/", val);
  }
  getCommune():Observable<any>{
    return this.http.get<any>(this.APIUrl + "/gire/commune/");
  }
  getCommuneSingle(val:any):Observable<any>{
    return this.http.get<any>(this.APIUrl + "/gire/commune/"+val);
  }
  updateCommune(val:any, pk:any){
    return this.http.put(this.APIUrl + "/gire/commune/"+pk,val);
  }
  deleteCommune(val:any){
    return this.http.delete(this.APIUrl + "/gire/commune/"+ val);
  }
  addDepartement(val:any){
    return this.http.post(this.APIUrl + "/gire/departement/", val);
  }
  getDepartement():Observable<any>{
    return this.http.get<any>(this.APIUrl + "/gire/departement/");
  }
  getDepartementSingle(val:any):Observable<any>{
    return this.http.get<any>(this.APIUrl + "/gire/departement/"+val);
  }
  updateDepartement(val:any, pk:any){
    return this.http.put(this.APIUrl + "/gire/departement/"+pk,val);
  }
  deleteDepartement(val:any){
    return this.http.delete(this.APIUrl + "/gire/departement/"+ val);
  }
  addTemoignage(val:any){
    return this.http.post(this.APIUrl + "/gire/temoignage/", val);
  }
  getTemoignage():Observable<any>{
    return this.http.get<any>(this.APIUrl + "/gire/temoignage/");
  }
  getTemoignageSingle(val:any):Observable<any>{
    return this.http.get<any>(this.APIUrl + "/gire/temoignage/"+val);
  }
  updateTemoignage(val:any, pk:any){
    return this.http.put(this.APIUrl + "/gire/temoignage/"+pk,val);
  }
  deleteTemoignage(val:any){
    return this.http.delete(this.APIUrl + "/gire/temoignage/"+ val);
  }
  addRisque(val:any){
    return this.http.post(this.APIUrl + "/gire/risque/", val);
  }
  getRisque():Observable<any>{
    return this.http.get<any>(this.APIUrl + "/gire/risque/");
  }
  getRisqueSingle(val:any):Observable<any>{
    return this.http.get<any>(this.APIUrl + "/gire/risque/"+val);
  }
  updateRisque(val:any, pk:any){
    return this.http.put(this.APIUrl + "/gire/risque/"+pk,val);
  }
  deleteRisque(val:any){
    return this.http.delete(this.APIUrl + "/gire/risque/"+ val);
  }
  addImpact(val:any){
    return this.http.post(this.APIUrl + "/gire/impact/", val);
  }
  getImpact():Observable<any>{
    return this.http.get<any>(this.APIUrl + "/gire/impact/");
  }
  getImpactSingle(val:any):Observable<any>{
    return this.http.get<any>(this.APIUrl + "/gire/impact/"+val);
  }
  updateImpact(val:any, pk:any){
    return this.http.put(this.APIUrl + "/gire/impact/"+pk,val);
  }
  deleteImpact(val:any){
    return this.http.delete(this.APIUrl + "/gire/impact/"+ val);
  }
  
  addTypeImpact(val:any){
    return this.http.post(this.APIUrl + "/gire/typeimpact/", val);
  }
  getTypeImpact():Observable<any>{
    return this.http.get<any>(this.APIUrl + "/gire/typeimpact/");
  }
  getTypeImpactSingle(val:any):Observable<any>{
    return this.http.get<any>(this.APIUrl + "/gire/typeimpact/"+val);
  }
  updateTypeImpact(val:any, pk:any){
    return this.http.put(this.APIUrl + "/gire/typeimpact/"+pk,val);
  }
  deleteTypeImpact(val:any){
    return this.http.delete(this.APIUrl + "/gire/typeimpact/"+ val);
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
