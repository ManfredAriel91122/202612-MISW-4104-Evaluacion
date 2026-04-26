import { Component } from '@angular/core';

import { UsuariosModule } from './usuarios/usuarios.module';

@Component({
  selector: 'app-root',
  imports: [UsuariosModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
