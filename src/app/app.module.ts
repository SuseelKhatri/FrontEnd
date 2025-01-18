import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule,Routes } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuard } from '../guard/auth.guard';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { RegisteredComponent } from './registered/registered.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { VisionComponent } from './vision/vision.component';
import { BoardDirectorsComponent } from './board-directors/board-directors.component';
import { ManagementTeamComponent } from './management-team/management-team.component';
import { ProductsServicesComponent } from './products-services/products-services.component';
import { SidebuttonsComponent } from './sidebuttons/sidebuttons.component';
import { FaqComponent } from './faq/faq.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ReportComponent } from './report/report.component';
import { FrontendLayoutComponent } from './layouts/frontend-layout/frontend-layout.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    RegisteredComponent,
    IntroductionComponent,
    VisionComponent,
    BoardDirectorsComponent,
    ManagementTeamComponent,
    ProductsServicesComponent,
    SidebuttonsComponent,
    FaqComponent,
    ContactusComponent,
    ReportComponent,
    FrontendLayoutComponent,
    AdminLayoutComponent,
    DashboardComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule,
    ToastrModule.forRoot(), 
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
