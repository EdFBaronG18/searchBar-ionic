import { Pipe, PipeTransform } from '@angular/core';
import { Usuario } from '../models/usuario.model';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(usuarios: Usuario[], texto: string): Usuario[] {
    if (texto.length === 0){
      return usuarios;
    }

    texto = texto.toLowerCase();

    return usuarios.filter( usuario => {
        return usuario.name.toLowerCase().includes(texto) || usuario.email.toLowerCase().includes(texto);
    });
  }
}
