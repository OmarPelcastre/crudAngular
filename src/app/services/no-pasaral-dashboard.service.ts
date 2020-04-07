import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { DataApiService } from './data-api.service';

@Injectable({
  providedIn: 'root'
})

export class NoPasaralDashboardService implements CanActivate{

	constructor(private router: Router, private dataApiService: DataApiService){

	}
  canActivate(){
    
    
    let usuario = this.dataApiService.getToken();

		if (usuario == null) 
			return true;
		

		else{
			this.router.navigate(['dashboard']);
			return false;
		}
	}

}