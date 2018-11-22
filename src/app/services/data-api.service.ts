import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';

import {AuthService} from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class DataApiService {

  constructor(private http: HttpClient, private authService: AuthService) { }
  Tests: Observable<any>;
  Test: Observable<any>;

  headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Token 2a2b44a1efc726b0151cb0010f5be84fbc709f28'
  })

  getAllTest (){
    const url_api = 'http://localhost:8000/api/v1/test1/'
    return this.http.get(url_api, {headers: this.headers})
    .pipe(map(data => data))
  }
}
