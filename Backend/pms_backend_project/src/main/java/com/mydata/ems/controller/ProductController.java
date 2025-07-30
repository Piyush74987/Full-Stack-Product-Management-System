package com.mydata.ems.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import com.mydata.ems.service.ProductService;
import com.mydata.ems.dto.ProductDto;
import com.mydata.ems.exception.ResourceNotFoundException;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin("*")
@RestController
@RequestMapping("/pms")
public class ProductController {
	
	@Autowired
	ProductService ps;
	public void setPs(ProductService ps) {
		this.ps = ps;
	}
	
	@PostMapping
	public ResponseEntity<ProductDto>save(@RequestBody ProductDto pdto){
		ProductDto saved=ps.saveProduct(pdto);
		return ResponseEntity.ok(saved);
	}
	@GetMapping
	public ResponseEntity<List<ProductDto>>getAllProduct(){
		List<ProductDto> allPro=ps.getAllProduct();
		return ResponseEntity.ok(allPro);
	}
	@GetMapping("{id}")
	public ResponseEntity<ProductDto> getProductById(@PathVariable long id) throws ResourceNotFoundException{
		ProductDto pro=ps.getProductById(id);
		return ResponseEntity.ok(pro);
	}
	@DeleteMapping("{id}")
	public ResponseEntity<String>delProduct(@PathVariable long id) throws ResourceNotFoundException{
		ps.delProduct(id);
		return ResponseEntity.ok("Product Deleted Succesfully");
	}
	@PutMapping("{id}")
	public ResponseEntity<ProductDto> updateProduct(@PathVariable long id,@RequestBody ProductDto pdto) throws ResourceNotFoundException{
		ProductDto empdto=ps.UpdateProduct(id, pdto);
		return  ResponseEntity.ok(empdto);	
	}
	
	

}
