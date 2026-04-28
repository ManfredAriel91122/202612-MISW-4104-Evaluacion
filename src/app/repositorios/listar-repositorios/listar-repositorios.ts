import { Component } from '@angular/core';
import { catchError, map, Observable, of, startWith } from 'rxjs';

import { Repositorio } from '../repositorio';
import { RepositorioService } from '../repositorio.service';

interface RepositoriosViewModel {
  repositorios: Repositorio[];
  cargando: boolean;
  error: boolean;
}

@Component({
  selector: 'app-listar-repositorios',
  templateUrl: './listar-repositorios.html',
  styleUrl: './listar-repositorios.css',
  standalone: false,
})
export class ListarRepositorios {
  readonly repositoriosVm$: Observable<RepositoriosViewModel>;
  readonly repositoriosPorPagina = 8;
  paginaActual = 1;

  constructor(private readonly repositorioService: RepositorioService) {
    this.repositoriosVm$ = this.repositorioService.obtenerRepositorios().pipe(
      map((repositorios) => ({ repositorios, cargando: false, error: false })),
      startWith({ repositorios: [], cargando: true, error: false }),
      catchError(() => of({ repositorios: [], cargando: false, error: true })),
    );
  }

  identificarRepositorio(_index: number, repositorio: Repositorio): number {
    return repositorio.id;
  }

  obtenerRepositoriosPaginados(repositorios: Repositorio[]): Repositorio[] {
    const inicio = (this.paginaActual - 1) * this.repositoriosPorPagina;
    return repositorios.slice(inicio, inicio + this.repositoriosPorPagina);
  }

  obtenerTotalPaginas(repositorios: Repositorio[]): number {
    return Math.ceil(repositorios.length / this.repositoriosPorPagina);
  }

  obtenerPaginas(repositorios: Repositorio[]): number[] {
    const totalPaginas = this.obtenerTotalPaginas(repositorios);
    return Array.from({ length: totalPaginas }, (_valor, index) => index + 1);
  }

  cambiarPagina(pagina: number, repositorios: Repositorio[]): void {
    const totalPaginas = Math.max(this.obtenerTotalPaginas(repositorios), 1);
    this.paginaActual = Math.min(Math.max(pagina, 1), totalPaginas);
  }

  irPaginaAnterior(repositorios: Repositorio[]): void {
    this.cambiarPagina(this.paginaActual - 1, repositorios);
  }

  irPaginaSiguiente(repositorios: Repositorio[]): void {
    this.cambiarPagina(this.paginaActual + 1, repositorios);
  }

  obtenerRangoActual(repositorios: Repositorio[]): string {
    if (repositorios.length === 0) {
      return '0 de 0';
    }

    const inicio = (this.paginaActual - 1) * this.repositoriosPorPagina + 1;
    const fin = Math.min(this.paginaActual * this.repositoriosPorPagina, repositorios.length);
    return `${inicio}-${fin} de ${repositorios.length}`;
  }

  obtenerTotalEstrellas(repositorios: Repositorio[]): number {
    return repositorios.reduce((total, repositorio) => total + repositorio.stars, 0);
  }

  obtenerLenguajes(repositorios: Repositorio[]): string[] {
    return Array.from(new Set(repositorios.map((repositorio) => repositorio.language))).sort();
  }

  obtenerClaseLenguaje(lenguaje: string): string {
    return `language-${lenguaje.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;
  }
}
