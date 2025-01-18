import {Injectable} from '@angular/core';
import { CanActivate, Router } from '@angular/router';


@Injectable({
    providedIn:'root'
})

export class AuthGuard implements CanActivate{

    token:any;
    

    constructor(private router:Router){

    }

    canActivate(){
        console.log("Here");
        this.token = localStorage.getItem('token');

        if(this.token){
            
            return true;
        }
        else{
            console.log("get here");
            this.router.navigate(['login']);
            return false;
        }
    }

}