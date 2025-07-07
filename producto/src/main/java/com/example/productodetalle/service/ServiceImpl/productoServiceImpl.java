package com.example.productodetalle.service.ServiceImpl;


import com.example.productodetalle.entity.Producto;
import com.example.productodetalle.repository.ProductoRespository;
import com.example.productodetalle.service.productoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class productoServiceImpl implements productoService {

    @Autowired
    private ProductoRespository productoRespository;

    @Override
    public List<Producto> listar() {
        return productoRespository.findAll();
    }

    @Override
    public Producto buscar(Integer id) {
        return productoRespository.findById(id)
                .orElseThrow(() -> new RuntimeException("Producto no encontrado con id " + id));
    }

    @Override
    public Producto guardar(Producto producto) {
        producto.setId(null);  // ✅ Asegura que cree uno nuevo (Spring genera el ID automáticamente)
        return productoRespository.save(producto);
    }

    @Override
    public Producto actualizar(Producto producto) {
        if (producto.getId() == null || !productoRespository.existsById(producto.getId())) {
            throw new RuntimeException("No se puede actualizar. Producto no encontrado con id " + producto.getId());
        }
        return productoRespository.save(producto);
    }

    @Override
    public void eliminar(Integer id) {
        if (!productoRespository.existsById(id)) {
            throw new RuntimeException("No se puede eliminar. Producto no encontrado con id " + id);
        }
        productoRespository.deleteById(id);
    }
}
