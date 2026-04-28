import { Component } from '@angular/core';

import { RepositoriosModule } from './repositorios/repositorios.module';
import { UsuariosModule } from './usuarios/usuarios.module';

@Component({
  selector: 'app-root',
  imports: [UsuariosModule, RepositoriosModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
