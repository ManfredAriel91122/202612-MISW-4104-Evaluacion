import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DetalleUsuario } from './detalle-usuario/detalle-usuario';
import { ListarUsuarios } from './listar-usuarios/listar-usuarios';

@NgModule({
  declarations: [ListarUsuarios, DetalleUsuario],
  imports: [CommonModule],
  exports: [ListarUsuarios],
})
export class UsuariosModule {}
