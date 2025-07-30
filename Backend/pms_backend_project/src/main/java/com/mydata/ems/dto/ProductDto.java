package com.mydata.ems.dto;

public class ProductDto {
	private Long productId;
    private String productName;
    private int productQty;
    private float productPrice;   
    private String productCategory;
	public Long getProductId() {
		return productId;
	}
	public void setProductId(Long productId) {
		this.productId = productId;
	}
	public String getProductName() {
		return productName;
	}
	public void setProductName(String productName) {
		this.productName = productName;
	}
	public int getProductQty() {
		return productQty;
	}
	public void setProductQty(int productQty) {
		this.productQty = productQty;
	}
	public float getProductPrice() {
		return productPrice;
	}
	public void setProductPrice(float productPrice) {
		this.productPrice = productPrice;
	}
	public String getProductCategory() {
		return productCategory;
	}
	public void setProductCategory(String productCategory) {
		this.productCategory = productCategory;
	}
	public ProductDto(Long productId, String productName, int productQty, float productPrice, String productCategory) {
		super();
		this.productId = productId;
		this.productName = productName;
		this.productQty = productQty;
		this.productPrice = productPrice;
		this.productCategory = productCategory;
	}
	public ProductDto() {
		super();
	}
}
