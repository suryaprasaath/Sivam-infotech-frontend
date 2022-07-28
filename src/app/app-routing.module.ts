import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { EventComponent } from './event/event.component';
import { EventregisComponent } from './eventregis/eventregis.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { AadharComponent } from './eventregis/aadhar/aadhar.component';
import { PanComponent } from './eventregis/pan/pan.component';
import { PassportComponent } from './eventregis/passport/passport.component';
import { FastagComponent } from './eventregis/fastag/fastag.component';
import { MobilerechargeComponent } from './eventregis/mobilerecharge/mobilerecharge.component';
import { TicketbookingComponent } from './eventregis/ticketbooking/ticketbooking.component';
import { AdminComponent } from './admin/admin.component';

import {AuthGuard } from './services/auth.guard';
import { ChatwindowComponent } from './chatwindow/chatwindow.component';
import { AdminchatComponent } from './adminchat/adminchat.component';
import { PanlistComponent } from './admin/panlist/panlist.component';
import { AadharlistComponent } from './admin/aadharlist/aadharlist.component';
import { FastaglistComponent } from './admin/fastaglist/fastaglist.component';
import { MobilerechargelistComponent } from './admin/mobilerechargelist/mobilerechargelist.component';
import { PassportlistComponent } from './admin/passportlist/passportlist.component';
import { TicketbookinglistComponent } from './admin/ticketbookinglist/ticketbookinglist.component';
const routes: Routes = [  
{path:'login',component:LoginComponent},
{path:'register',component:RegistrationComponent },
{path:'about',component:AboutComponent},
{path:'admin',component:AdminComponent},
{path: 'admin/panlist',component:PanlistComponent},
{path: 'admin/aadharlist',component:AadharlistComponent},
{path: 'admin/fastaglist',component:FastaglistComponent},
{path: 'admin/passportlist',component:PassportlistComponent},
{path: 'admin/ticketbookinglist',component:TicketbookinglistComponent},
{path: 'admin/mobilerechargelist',component:MobilerechargelistComponent},
{path:'chat',component:ChatwindowComponent},
{path:'adminchat',component:AdminchatComponent},
{path:'eregis',
canActivate: [AuthGuard],
children:[
  {path: '',pathMatch:'full',component: EventregisComponent},
  {path: 'aadhar',component: AadharComponent},
  {path: 'pan',component: PanComponent},
  {path: 'passport',component: PassportComponent},
  {path: 'fastag',component: FastagComponent},
  {path: 'mobilerecharge',component: MobilerechargeComponent},
  {path: 'ticketbooking',component: TicketbookingComponent},
]},
{path:'events',component:EventComponent},
{path:'**',component:HomeComponent},
{path:'home',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }