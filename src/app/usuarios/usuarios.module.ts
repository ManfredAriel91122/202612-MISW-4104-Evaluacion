import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ListarUsuarios } from './listar-usuarios/listar-usuarios';

@NgModule({
  declarations: [ListarUsuarios],
  imports: [CommonModule],
  exports: [ListarUsuarios],
})
export class UsuariosModule {}
