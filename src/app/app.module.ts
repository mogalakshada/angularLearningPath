import { MaterialModule } from './modules/material.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultComponent } from './comps/default/default.component';
import { HeaderComponent } from './comps/default/header/header.component';
import { FooterComponent } from './comps/default/footer/footer.component';
import { SidenavComponent } from './comps/default/sidenav/sidenav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './comps/default/home/home.component';
import { LoginComponent } from './comps/default/login/login.component';
import { RegisterComponent } from './comps/default/register/register.component';
import { AdminregisterComponent } from './comps/default/adminregister/adminregister.component';
import { ChangepasswordComponent } from './comps/default/changepassword/changepassword.component';
import { DataserviceComponent } from './comps/default/dataservice/dataservice.component';

@NgModule({
  declarations: [
    AppComponent,
    DefaultComponent,
    HeaderComponent,
    FooterComponent,
    SidenavComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    AdminregisterComponent,
    ChangepasswordComponent,
    DataserviceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
