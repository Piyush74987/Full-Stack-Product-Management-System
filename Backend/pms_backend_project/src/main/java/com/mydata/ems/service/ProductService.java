package com.mydata.ems.service;


import java.util.List;
import com.mydata.ems.dto.ProductDto;
import com.mydata.ems.exception.ResourceNotFoundException;


public interface ProductService {
	
	public ProductDto saveProduct(ProductDto pdto);
	public List<ProductDto>getAllProduct();
	public ProductDto getProductById(long id)throws ResourceNotFoundException;
	public void delProduct(long id)throws ResourceNotFoundException;
	public ProductDto UpdateProduct(long id,ProductDto pdto)throws ResourceNotFoundException;

}
