import { Component ,OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { jwtDecode } from "jwt-decode";

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css']
})
export class AdminLayoutComponent implements OnInit {
  token:any;
  userData:any;
  email:any;
  name:any;

  ngOnInit(): void {
    this.token=localStorage.getItem('token');
    this.userData=jwtDecode(this.token);

    this.email =this.userData.email;
    this.name=this.userData.name;
    console.log(this.token);
    console.log(this.userData);
    
  }

  constructor(private router:Router){}
  toggleSidebar(): void {

    console.log("Hello");
    const sidebar = document.getElementById('sidebar');
    const content = document.getElementById('content');
    if (sidebar && content) {
      sidebar.classList.toggle('active');
      content.classList.toggle('active');
    }
  }

  logout(): void {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
    // Implement logout logic here
  }
  
}
