import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  currentData: string = '';
  private intervalId: any;
 isNavbarOpen= false;
 toggleNavbar(){
  this.isNavbarOpen=!this.isNavbarOpen;
 }

 ngOnInit() {
  this.updateDate();
  // this.intervalId = setInterval(() => this.updateDate(), 1000);
}

ngOnDestroy() {
  if (this.intervalId) {
    clearInterval(this.intervalId);
  }
}

updateDate() {
  const now = new Date();
  this.currentData = now.toLocaleDateString() + ' ' + now.toLocaleTimeString();
}
}
