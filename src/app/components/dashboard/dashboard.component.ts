import { Component, OnInit } from '@angular/core';
import { DataApiService } from 'src/app/services/data-api.service';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  public users: User[];
  public form;

  public id;

  public user: User = {
    nombre: '',
    apellido_paterno: '',
    apellido_materno: '',
    edad: '',
    active: false
  }

  constructor(private dataApiService: DataApiService, private router: Router) {

    this.form = "null";
  }

  ngOnInit() {

    this.dataApiService.getAllTest()
      .subscribe(data => {
        this.users = <any>data;
      },
        error => {
          console.log(error);
        }
      )
  }


  nuevoUsuario(id) {
    this.form = "editar";
    this.getUsuario(id);

  }

  agregarUsuario() {
    this.dataApiService.newUser(this.user).subscribe(
      response => {
        this.form = "null";
        this.setNull();
        this.ngOnInit();

      },
      error => {
        console.log(<any>error);
      }
    );
  }


  getUsuario(id) {
    console.log("id: " + id);
    this.dataApiService.getUser(id).subscribe(
      data => {
        this.user = data;
        console.log(data);
        //this.user.isdelete = true;
        //console.log(this.user);

      },
      error => {

      }
    )
  }






  editarUsuario() {
    console.log(this.user.nombre);
    this.dataApiService.editUser(this.user).subscribe(
      response => {
        this.form = "null";
        this.setNull();
        this.ngOnInit();
      },
      error => {
        console.log("error: " + <any>error);
      }
    )
  }

  formUser() {
    this.form = "agregar";
  }

  eliminarUsuario(id) {
    this.dataApiService.getUser(id).subscribe(
      data => {
        this.user = data;
        this.user.active = true;
        this.dataApiService.editUser(this.user).subscribe(
          response => {
            this.setNull();
            this.ngOnInit();
          },
          error => {
            console.log(error);
          }
        )
      }),
      error => {
        console.log(error);
      }
  }


  logOut() {
    localStorage.clear();
    this.router.navigate(['']);
  }

  setNull() {
    this.user.nombre = "";
    this.user.apellido_paterno = "";
    this.user.apellido_materno = "";
    this.user.edad = "";
    this.form = "null";
  }
}
