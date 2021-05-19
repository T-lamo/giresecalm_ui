import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BeneficiaireComponent } from './beneficiaire/beneficiaire.component';
import { AddEditBeneficiaireComponent } from './beneficiaire/add-edit-beneficiaire/add-edit-beneficiaire.component';
import { ShowDeleteBeneficiaireComponent } from './beneficiaire/show-delete-beneficiaire/show-delete-beneficiaire.component';
import { CommonService } from './common.service';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms' 
@NgModule({
  declarations: [
    AppComponent,
    BeneficiaireComponent,
    AddEditBeneficiaireComponent,
    ShowDeleteBeneficiaireComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
