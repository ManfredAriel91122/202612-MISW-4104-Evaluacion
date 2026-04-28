import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ListarRepositorios } from './listar-repositorios/listar-repositorios';

@NgModule({
  declarations: [ListarRepositorios],
  imports: [CommonModule, RouterModule],
  exports: [ListarRepositorios],
})
export class RepositoriosModule {}
