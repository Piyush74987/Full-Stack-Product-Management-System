package com.mydata.ems.mapper;

import com.mydata.ems.dto.ProductDto;
import com.mydata.ems.entity.Product;

public class ProductMapper {

    public static Product mapToProduct(ProductDto pdto) {
        Product p = new Product(pdto.getProductId(), pdto.getProductName(), 
                                pdto.getProductQty(),  pdto.getProductPrice(),pdto.getProductCategory());
        return p;
    }

    public static ProductDto mapToProductDto(Product p) {
        ProductDto pdto = new ProductDto(p.getProductId(), p.getProductName(), 
                                         p.getProductQty(),p.getProductPrice(), p.getProductCategory());
        return pdto;
    }
}

