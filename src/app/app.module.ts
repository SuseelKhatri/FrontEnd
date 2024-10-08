import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

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
    ProductsServicesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
