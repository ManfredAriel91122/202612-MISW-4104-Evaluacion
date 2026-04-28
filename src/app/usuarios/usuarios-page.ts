import { Component } from '@angular/core';

import { UsuariosModule } from './usuarios.module';

@Component({
  selector: 'app-usuarios-page',
  imports: [UsuariosModule],
  template: '<app-listar-usuarios />',
})
export class UsuariosPage {}
