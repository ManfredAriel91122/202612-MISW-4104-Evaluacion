import { Component } from '@angular/core';

import { RepositoriosModule } from './repositorios.module';

@Component({
  selector: 'app-repositorios-page',
  imports: [RepositoriosModule],
  template: '<app-listar-repositorios />',
})
export class RepositoriosPage {}
