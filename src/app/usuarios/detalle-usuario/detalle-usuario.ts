import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Usuario } from '../usuario';

@Component({
  selector: 'app-detalle-usuario',
  templateUrl: './detalle-usuario.html',
  styleUrl: './detalle-usuario.css',
  standalone: false,
})
export class DetalleUsuario {
  @Input() usuario: Usuario | null = null;
  @Output() cerrar = new EventEmitter<void>();

  contarRepositorios(usuario: Usuario): number {
    return usuario.repoIds.length;
  }
}
