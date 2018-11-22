import { Component, OnInit } from '@angular/core';
import { DataApiService } from 'src/app/services/data-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private dataApiService: DataApiService, private router: Router) { }

  ngOnInit() {
    return this.dataApiService.getAllTest()
    .subscribe(data => {
      console.log(data);
      //this.router.navigate(['dashboard']);
    },
      error => {
        console.log(error.error.detail);
      }
    )
  }

}
