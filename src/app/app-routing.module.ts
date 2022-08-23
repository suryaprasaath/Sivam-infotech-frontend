import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [  
{path:'login',component:LoginComponent},
{path:'register',component:RegistrationComponent },
{path:'home/login',component:LoginComponent},
{path:'products',component:DashboardComponent},
{path:'home/register',component:RegistrationComponent },
{path:'home',component:HomeComponent},
{path:'**',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }