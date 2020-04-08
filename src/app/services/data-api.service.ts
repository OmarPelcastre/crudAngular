import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';

import {AuthService} from './auth.service';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class DataApiService {

  constructor(private http: HttpClient, private authService: AuthService) { 
  }
  Tests: Observable<any>;
  Test: Observable<any>;
  // url: string = 'http://3.12.196.116';
  url: string = "http://apidjango.ddns.net";

  public token;

  headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Token '+this.getToken()  
  })

  

  getAllTest (){
    const url_api = this.url + '/api/v1/test1/'
    return this.http.get(url_api, {headers: this.headers})
    .pipe(map(data => data))
  }



  newUser(user): Observable<any>{
    let data = JSON.stringify(user);
    const url_api = this.url + '/api/v1/test1/'
		return this.http.post(url_api, data, {headers: this.headers});
  }
  

  getToken(){
    // let tokenStorage = localStorage.getItem('token');
    // this.token = tokenStorage;
    // return this.token;
    let token = localStorage.getItem('token');
    if (token != "undefined") {
      this.token = token;
    }else
      this.token = null;

      return this.token;
  }

  editUser(user: User): Observable<any>{
    const url_api = this.url + '/api/v1/test1/'+user.id
    let data = JSON.stringify(user);
		return this.http.put(url_api ,data, {headers: this.headers});
	}

  getUser(id){
    const url_api = this.url + '/api/v1/test1/'+id
		return this.http.get(url_api, {headers: this.headers});
  }
}
