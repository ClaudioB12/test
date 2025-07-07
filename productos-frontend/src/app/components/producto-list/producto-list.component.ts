import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductoService } from '../../services/producto';
import { Producto } from '../../models/producto';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

import { MatCardModule } from '@angular/material/card';


@Component({
  selector: 'app-producto-list',
  standalone: true,
  imports: [CommonModule, RouterModule,MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatCardModule],
  templateUrl: './producto-list.html'
})
export class ProductoListComponent implements OnInit {

  productos: Producto[] = [];

  constructor(private productoService: ProductoService) {}

  ngOnInit(): void {
    this.listarProductos();
  }

  listarProductos(): void {
    this.productoService.listar().subscribe(data => {
      this.productos = data;
    });
  }

  eliminar(id: number): void {
    this.productoService.eliminar(id).subscribe(() => {
      this.listarProductos();
    });
  }
  displayedColumns: string[] = ['id', 'nombre', 'descripcion', 'cantidad', 'precio', 'acciones'];

}
