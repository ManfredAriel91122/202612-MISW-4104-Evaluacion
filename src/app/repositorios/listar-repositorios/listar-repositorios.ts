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
