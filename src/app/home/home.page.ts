import { Component } from '@angular/core';
import { UsuariosService } from '../services/usuarios.service';
import { Usuario } from '../models/usuario.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  usuarios : Usuario[] = [];
  textoBuscar = '';
  constructor(private usuariosServices : UsuariosService) {
    this.usuariosServices.getUsuarios()
    .subscribe( resp => this.usuarios = resp );
  }

  buscarUsuario(event){
    const text = event.target.value;
    this.textoBuscar = text;
    // console.log(text);
  }
}
