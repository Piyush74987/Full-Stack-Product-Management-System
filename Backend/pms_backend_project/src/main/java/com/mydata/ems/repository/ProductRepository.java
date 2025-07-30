package com.mydata.ems.repository;

import org.springframework.data.jpa.repository.JpaRepository; 
import com.mydata.ems.entity.Product;


public interface ProductRepository extends JpaRepository<Product, Long> {
	
}