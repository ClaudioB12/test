package com.example.productodetalle.repository;

import com.example.productodetalle.entity.Producto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductoRespository extends JpaRepository<Producto, Integer> {}