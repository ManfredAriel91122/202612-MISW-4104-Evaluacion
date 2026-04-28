import { Routes } from '@angular/router';

import { DetalleRepositorio } from './repositorios/detalle-repositorio/detalle-repositorio';
import { RepositoriosPage } from './repositorios/repositorios-page';
import { UsuariosPage } from './usuarios/usuarios-page';

export const routes: Routes = [
  { path: '', redirectTo: 'usuarios', pathMatch: 'full' },
  { path: 'usuarios', component: UsuariosPage },
  {
    path: 'repositorios',
    component: RepositoriosPage,
    children: [{ path: ':id', component: DetalleRepositorio }],
  },
  { path: '**', redirectTo: 'usuarios' },
];
