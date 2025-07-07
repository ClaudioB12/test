package com.example.productodetalle.controller;

import com.example.productodetalle.entity.Producto;
import com.example.productodetalle.service.productoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/productos")
@CrossOrigin(origins = "http://localhost:4200") // permite conexión desde Angular
public class ProductoController {

    @Autowired
    private productoService productoService;  // ✅ Nombre corregido

    @GetMapping
    public List<Producto> listar() {
        return productoService.listar();
    }

    @GetMapping("/{id}")
    public Producto buscar(@PathVariable Integer id) {
        return productoService.buscar(id);
    }

    @PostMapping
    public Producto guardar(@RequestBody Producto producto) {
        return productoService.guardar(producto);
    }

    @PutMapping("/{id}")
    public Producto actualizar(@RequestBody Producto producto, @PathVariable Integer id) {
        producto.setId(id);  // ✅ Asignar el ID correctamente
        return productoService.actualizar(producto);
    }

    @DeleteMapping("/{id}")
    public void eliminar(@PathVariable Integer id) {
        productoService.eliminar(id);
    }
}
