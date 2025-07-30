package com.mydata.ems.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.mydata.ems.dto.ProductDto;
import com.mydata.ems.repository.ProductRepository;
import com.mydata.ems.mapper.ProductMapper;
import com.mydata.ems.entity.Product;
import com.mydata.ems.exception.ResourceNotFoundException;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ProductServiceImpl implements ProductService{
	
	@Autowired
	ProductRepository proRepo;
	

	public void setProRepo(ProductRepository proRepo) {
		this.proRepo = proRepo;
	}


	@Override
		public ProductDto saveProduct(ProductDto pdto){	
		Product p=ProductMapper.mapToProduct(pdto);
		Product SavedProduct=proRepo.save(p);
		ProductDto savedDto=ProductMapper.mapToProductDto(SavedProduct);
		return savedDto;
	}
	
	@Override
	public List<ProductDto>getAllProduct(){
		List<Product>allPro=proRepo.findAll();
		return allPro.stream().map((product)->ProductMapper.mapToProductDto(product)).collect(Collectors.toList());
	}


	@Override
	public ProductDto getProductById(long id) throws ResourceNotFoundException{
		Product p=proRepo.findById(id).orElseThrow(() -> new ResourceNotFoundException("Product doesn't exists"+id));
		return ProductMapper.mapToProductDto(p);
	}


	@Override
	public void delProduct(long id) throws ResourceNotFoundException {
		Product p=proRepo.findById(id).orElseThrow(()-> new ResourceNotFoundException("Product doesn't exists in the database"+id));
		proRepo.deleteById(id);		
	}


	@Override
	public ProductDto UpdateProduct(long id, ProductDto pdto) throws ResourceNotFoundException {
		Product p=proRepo.findById(id).orElseThrow(() -> new ResourceNotFoundException("Product doesn't exists"+id));
		p.setProductName(pdto.getProductName());
		p.setProductQty(pdto.getProductQty());
		p.setProductPrice(pdto.getProductPrice());
		p.setProductCategory(pdto.getProductCategory());
		Product updateProduct=proRepo.save(p);
		return ProductMapper.mapToProductDto(updateProduct);
	}

}
