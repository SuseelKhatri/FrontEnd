import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  // showHeaderFooter =true;

  // constructor(private router: Router){
  //   this.router.events.subscribe(event=>
  //     {
  //       if (event instanceof NavigationEnd) {
  //         // Check the current route and decide whether to show header/footer
  //         this.showHeaderFooter = !['/login'].includes(event.url); //this makes the showheaderFooter boolen to false
  //       }
  //     }  
  //   );
  // }
}
