import { Routes } from '@angular/router';
import { ProductoListComponent } from './components/producto-list/producto-list.component';
import { ProductoFormComponent } from './components/producto-form/producto-form.component';

export const routes: Routes = [
  { path: '', component: ProductoListComponent },
  { path: 'nuevo', component: ProductoFormComponent },
  { path: 'editar/:id', component: ProductoFormComponent }
];
