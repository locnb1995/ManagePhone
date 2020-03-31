package com.baoloc.hus.manage.repository;

import java.util.Collection;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.baoloc.hus.manage.entity.Product;

public interface ProductRepository extends JpaRepository<Product, Long>
{
	@Query(value = "SELECT * FROM product WHERE name = ?1", nativeQuery = true)
	Collection<Product> getProductByName(String name);
}
