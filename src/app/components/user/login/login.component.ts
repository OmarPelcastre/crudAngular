import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { UserInterface } from 'src/app/models/user-interface';
import { DataApiService } from 'src/app/services/data-api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user: UserInterface = {
    username: '',
    password: ''
  }
  // python manage.py createsuperuser

  constructor(private authService: AuthService, private router: Router, private dataApiService: DataApiService) { }

  ngOnInit() {
  }

  onLogin() {
    this.authService.loginUser(this.user.username, this.user.password)
      .subscribe(async data => {
        await localStorage.setItem('token',data.token);
        this.router.navigate(['dashboard']);
        this.dataApiService.getToken();
      },
        error => {
          console.log(error.error.non_field_errors);
        }
      )
  }


}
