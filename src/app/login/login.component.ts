import { Component,HostListener,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Form, FormBuilder,FormGroup,Validators} from '@angular/forms';
import { DataService } from '../service/data.service';
import { ToastrService } from 'ngx-toastr';
// import { console } from 'inspector';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  form!:FormGroup;
  submitted=false;
  data:any;
  token:any;

  @HostListener('document:mousemove', ['$event'])
    onMouseMove(event: MouseEvent) {
        const background = document.getElementById('gradientBackground');
        if (background) {
            const xPercent = (event.clientX / window.innerWidth - 0.5) * 100;
            const yPercent = (event.clientY / window.innerHeight - 0.5) * 100;
            background.style.backgroundPosition = `${50 + xPercent}% ${50 + yPercent}%`;
        }
    }

    constructor(
      private formBuilder:FormBuilder,
      private router:Router,
      private toastr: ToastrService,
      private dataservice:DataService,
    ){
    }

    loginForm(){
      this.form=this.formBuilder.group({
        email:['',[Validators.required,Validators.email]],
        password:['',[Validators.required]]
      });
    }

    ngOnInit(): void {
      this.loginForm();
    }

    get f(){
      return this.form.controls;
    }

    submit(){

      console.log("Token value:", this.token);

      console.log("Iam here");
      this.submitted=true;

      if(this.form.invalid){
        return;
      }

      this.dataservice.login(this.form.value).subscribe(res=>{
        this.data=res;
        console.log('res',res);

        if(this.data.status ===1){
          this.token=this.data.data.token;
          console.log(this.token);
          localStorage.setItem('token',this.token);
          this.router.navigate(['/admin']);

          this.toastr.success(JSON.stringify(this.data.message),JSON.stringify(this.data.code),{
            timeOut:2000,
            progressBar:true
          });
        }
        else{
          this.toastr.error(JSON.stringify(this.data.message),JSON.stringify(this.data.code),{
            timeOut:2000,
            progressBar:true
          });
        }


      });
    }

}
