import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';

import { UserInterface } from '../models/user-interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json'
  })

  loginUser(username: string, password: string): Observable<any> {
    const url_api = 'http://localhost:8000/api/v1/login/'
    return this.http
      .post<UserInterface>(url_api, { username: username, password: password, headers: this.headers })
      .pipe(map(data => data))
  }

  registerUser(username: string, password: string, email: string): Observable<any> {
    const url_api = 'http://localhost:8000/api/v1/registration/'
    return this.http
      .post<UserInterface>(url_api, 
        { username: username, email: email, password1: password, password2: password, headers: this.headers })
      .pipe(map(data => data))

  }
}
