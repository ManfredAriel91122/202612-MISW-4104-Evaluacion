import { Component } from '@angular/core';
import { catchError, map, Observable, of, startWith } from 'rxjs';

import { Usuario } from '../usuario';
import { UsuarioService } from '../usuario.service';

interface UsuariosViewModel {
  usuarios: Usuario[];
  cargando: boolean;
  error: boolean;
}

@Component({
  selector: 'app-listar-usuarios',
  templateUrl: './listar-usuarios.html',
  styleUrl: './listar-usuarios.css',
  standalone: false,
})
export class ListarUsuarios {
  readonly usuariosVm$: Observable<UsuariosViewModel>;
  readonly usuariosPorPagina = 8;
  paginaActual = 1;
  usuarioSeleccionado: Usuario | null = null;

  constructor(private readonly usuarioService: UsuarioService) {
    this.usuariosVm$ = this.usuarioService.obtenerUsuarios().pipe(
      map((usuarios) => {
        this.usuarioSeleccionado ??= usuarios[0] ?? null;
        return { usuarios, cargando: false, error: false };
      }),
      startWith({ usuarios: [], cargando: true, error: false }),
      catchError(() => of({ usuarios: [], cargando: false, error: true })),
    );
  }

  contarRepositorios(usuario: Usuario): number {
    return usuario.repoIds.length;
  }

  obtenerUsuariosPaginados(usuarios: Usuario[]): Usuario[] {
    const inicio = (this.paginaActual - 1) * this.usuariosPorPagina;
    return usuarios.slice(inicio, inicio + this.usuariosPorPagina);
  }

  obtenerTotalPaginas(usuarios: Usuario[]): number {
    return Math.ceil(usuarios.length / this.usuariosPorPagina);
  }

  obtenerPaginas(usuarios: Usuario[]): number[] {
    const totalPaginas = this.obtenerTotalPaginas(usuarios);
    return Array.from({ length: totalPaginas }, (_valor, index) => index + 1);
  }

  cambiarPagina(pagina: number, usuarios: Usuario[]): void {
    const totalPaginas = Math.max(this.obtenerTotalPaginas(usuarios), 1);
    this.paginaActual = Math.min(Math.max(pagina, 1), totalPaginas);
  }

  irPaginaAnterior(usuarios: Usuario[]): void {
    this.cambiarPagina(this.paginaActual - 1, usuarios);
  }

  irPaginaSiguiente(usuarios: Usuario[]): void {
    this.cambiarPagina(this.paginaActual + 1, usuarios);
  }

  seleccionarUsuario(usuario: Usuario): void {
    this.usuarioSeleccionado = usuario;
  }

  cerrarDetalle(): void {
    this.usuarioSeleccionado = null;
  }

  esUsuarioSeleccionado(usuario: Usuario): boolean {
    return this.usuarioSeleccionado?.id === usuario.id;
  }

  obtenerRangoActual(usuarios: Usuario[]): string {
    if (usuarios.length === 0) {
      return '0 de 0';
    }

    const inicio = (this.paginaActual - 1) * this.usuariosPorPagina + 1;
    const fin = Math.min(this.paginaActual * this.usuariosPorPagina, usuarios.length);
    return `${inicio}-${fin} de ${usuarios.length}`;
  }

  obtenerClaseRol(rol: string): string {
    return `role-${rol.toLowerCase().replaceAll(' ', '-')}`;
  }

  obtenerIniciales(usuario: Usuario): string {
    return usuario.name
      .split(' ')
      .map((parte) => parte.charAt(0))
      .join('')
      .slice(0, 2)
      .toUpperCase();
  }

  identificarUsuario(_index: number, usuario: Usuario): number {
    return usuario.id;
  }
}
