import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  apiUrl:any;

  constructor(private http:HttpClient){ }

  login(data:any){
    return this.http.post(environment.apiUrl+'/api/login',data);
  }

}
