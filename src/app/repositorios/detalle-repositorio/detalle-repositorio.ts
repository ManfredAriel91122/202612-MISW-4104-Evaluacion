import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { catchError, map, Observable, of, startWith, switchMap } from 'rxjs';

import { Repositorio } from '../repositorio';
import { RepositorioService } from '../repositorio.service';

interface DetalleRepositorioViewModel {
  repositorio: Repositorio | null;
  cargando: boolean;
  error: boolean;
}

@Component({
  selector: 'app-detalle-repositorio',
  imports: [CommonModule, RouterLink],
  templateUrl: './detalle-repositorio.html',
  styleUrl: './detalle-repositorio.css',
})
export class DetalleRepositorio {
  readonly detalleVm$: Observable<DetalleRepositorioViewModel>;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly repositorioService: RepositorioService,
  ) {
    this.detalleVm$ = this.route.paramMap.pipe(
      switchMap((params) => {
        const repositorioId = Number(params.get('id'));

        if (!Number.isInteger(repositorioId)) {
          return of({ repositorio: null, cargando: false, error: true });
        }

        return this.repositorioService.obtenerRepositorioPorId(repositorioId).pipe(
          map((repositorio) => ({
            repositorio: repositorio ?? null,
            cargando: false,
            error: !repositorio,
          })),
          startWith({ repositorio: null, cargando: true, error: false }),
          catchError(() => of({ repositorio: null, cargando: false, error: true })),
        );
      }),
    );
  }

  obtenerClaseLenguaje(lenguaje: string): string {
    return `language-${lenguaje.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;
  }
}
