import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  private readonly usuariosUrl =
    'https://gist.githubusercontent.com/caev03/628509e0b3fe41dd44f6a2ab09d81ef9/raw/f847eafbecca47287ff0faec4de1329b874f5711/users.json';

  constructor(private readonly http: HttpClient) {}

  obtenerUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.usuariosUrl);
  }
}
