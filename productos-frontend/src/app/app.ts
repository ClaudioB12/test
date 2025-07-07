import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';  // 👈 Importa RouterOutlet

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],  // 👈 Declara RouterOutlet como import
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent { }
