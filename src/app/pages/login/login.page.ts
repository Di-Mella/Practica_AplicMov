import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  apellido: string = "Rodriguez";
  edad: number = 29;
  usuario: string = "";

  Persona: any = {
    nombre: 'José',
    apellido: 'Suarez',
    edad: 34
  }

  listaP: any = [
    {
      id: 24,
      comuna: 'Lo espejo'
    },
    {
      id: 2,
      comuna: 'Conchalí'
    },
    {
      id: 4,
      comuna: 'Independencia'
    },
    {
      id: 42,
      comuna: 'Huechuraba'
    }

  ]

  constructor(private router: Router) { }

  ngOnInit() {
  }

  irPagina(){
    // creamos una variable de contexto
    let navigationextras: NavigationExtras ={ // variable / libreria
      state:{
        ape: this.apellido,
        ed: this.edad,
        user: this.usuario
      }
    }
    //Puedo crear cualquier logica de programación
    this.router.navigate(['/agregar'],navigationextras);

  }

}
