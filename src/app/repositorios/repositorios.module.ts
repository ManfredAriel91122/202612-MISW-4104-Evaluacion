import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ListarRepositorios } from './listar-repositorios/listar-repositorios';

@NgModule({
  declarations: [ListarRepositorios],
  imports: [CommonModule],
  exports: [ListarRepositorios],
})
export class RepositoriosModule {}
