import { DataserviceComponent } from './comps/default/dataservice/dataservice.component';
import { ChangepasswordComponent } from './comps/default/changepassword/changepassword.component';
import { AdminregisterComponent } from './comps/default/adminregister/adminregister.component';
import { RegisterComponent } from './comps/default/register/register.component';
import { LoginComponent } from './comps/default/login/login.component';
import { HomeComponent } from './comps/default/home/home.component';

import { DefaultComponent } from './comps/default/default.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',component:DefaultComponent,children:[
    {path:'',component:HomeComponent},
    {path:'login',component:LoginComponent},
    {path:'register',component:RegisterComponent},
    {path:'adminregister',component:AdminregisterComponent},
    {path:'changepassword',component:ChangepasswordComponent},
    {path:'dataservice',component:DataserviceComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
