import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { VisionComponent } from './vision/vision.component';
import { BoardDirectorsComponent } from './board-directors/board-directors.component';
import { ManagementTeamComponent } from './management-team/management-team.component';
import { ProductsServicesComponent } from './products-services/products-services.component';
import { FaqComponent } from './faq/faq.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ReportComponent } from './report/report.component';

const routes: Routes = [
  // {path:'',component:LoginComponent},
  // { path: '', redirectTo: '/', pathMatch: 'full' }, 
  { path: 'login', component: LoginComponent },
  { path: '', component: HomeComponent },
  {path:'introduction',component:IntroductionComponent},
  {path:'vision',component:VisionComponent},
  {path:'bod',component:BoardDirectorsComponent},
  {path:'management_team',component:ManagementTeamComponent},
  {path:'products_services',component:ProductsServicesComponent},
  {path:'faqs',component:FaqComponent},
  {path:'contactus',component:ContactusComponent},
  {path:'reports',component:ReportComponent},
  // { path: 'login', redirectTo: 'login', pathMatch: 'full' }, // Optional: Redirect root to login
  { path: '**', redirectTo: '' } // 
];

// for routing
export { routes };
// for routing
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
