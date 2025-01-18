import { NgModule } from '@angular/core';
import { AuthGuard } from '../guard/auth.guard';
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
import { FrontendLayoutComponent } from './layouts/frontend-layout/frontend-layout.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';



const routes: Routes = [
  // {path:'',component:LoginComponent},
  // { path: '', redirectTo: '/', pathMatch: 'full' },
  {path: 'login', component: LoginComponent },

  // frontend webpage
  {
    path: '',
    component: FrontendLayoutComponent,
    children:[

        {path: '', component: HomeComponent },
        {path:'introduction',component:IntroductionComponent},
        {path:'vision',component:VisionComponent},
        {path:'bod',component:BoardDirectorsComponent},
        {path:'management_team',component:ManagementTeamComponent},
        {path:'products_services',component:ProductsServicesComponent},
        {path:'faqs',component:FaqComponent},
        {path:'contactus',component:ContactusComponent},
        {path:'reports',component:ReportComponent}

    ]

  },
  //
  //admin dashboard layout
  {
    path:'admin',
    component: AdminLayoutComponent,
    children:[
      {path:'dashboard',component:DashboardComponent}


    ],
    canActivate:[AuthGuard]
  },
  //
  {path: '**', redirectTo: '' } //
];

// for routing display
export { routes };
// for routing
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
