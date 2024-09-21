import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  // {path:'',component:LoginComponent},
  // { path: '', redirectTo: '/', pathMatch: 'full' }, 
  { path: 'login', component: LoginComponent },
  { path: '', component: HomeComponent },
  // { path: 'login', redirectTo: 'login', pathMatch: 'full' }, // Optional: Redirect root to login
  // { path: '**', redirectTo: '' } // 
];

// for routing
export { routes };
// for routing
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
