package com.example.productodetalle.service;

import com.example.productodetalle.entity.Producto;
import java.util.List;

public interface productoService {

    List<Producto> listar();

    Producto buscar(Integer id);

    Producto guardar(Producto producto);

    Producto actualizar(Producto producto);

    void eliminar(Integer id);
}
