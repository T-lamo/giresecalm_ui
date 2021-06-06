import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BeneficiaireComponent } from './beneficiaire/beneficiaire.component';
import { AddEditBeneficiaireComponent } from './beneficiaire/add-edit-beneficiaire/add-edit-beneficiaire.component';
import { ShowDeleteBeneficiaireComponent } from './beneficiaire/show-delete-beneficiaire/show-delete-beneficiaire.component';
import { CommonService } from './common.service';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component' 
@NgModule({
  declarations: [
    AppComponent,
    BeneficiaireComponent,
    AddEditBeneficiaireComponent,
    ShowDeleteBeneficiaireComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent
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
