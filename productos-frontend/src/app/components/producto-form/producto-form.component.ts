import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductoService } from '../../services/producto';
import { Producto } from '../../models/producto';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatError } from '@angular/material/form-field';


@Component({
  
  selector: 'app-producto-form',
  standalone: true,
imports: [CommonModule, ReactiveFormsModule, RouterModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatCardModule],

  templateUrl: './producto-form.html'
})
export class ProductoFormComponent implements OnInit {

  productoForm!: FormGroup;
  productoId?: number;
  esEdicion = false;

  constructor(
    private fb: FormBuilder,
    private productoService: ProductoService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.productoForm = this.fb.group({
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
      cantidad: [0, [Validators.required, Validators.min(0)]],
      precio: [0, [Validators.required, Validators.min(0)]]
    });

    this.route.params.subscribe(params => {
      if (params['id']) {
        this.esEdicion = true;
        this.productoId = +params['id'];
        this.productoService.buscar(this.productoId).subscribe(prod => {
          this.productoForm.patchValue(prod);
        });
      }
    });
  }

guardar(): void {
  if (this.productoForm.invalid) {
    this.productoForm.markAllAsTouched();
    return;
  }

  const producto: Producto = {
    id: this.productoId ?? 0,
    ...this.productoForm.value
  };

  if (this.esEdicion) {
    this.productoService.actualizar(producto).subscribe(() => {
      this.router.navigate(['/']);
    });
  } else {
    this.productoService.guardar(producto).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}

  cancelar(): void {
  this.router.navigate(['/']);
}
}
