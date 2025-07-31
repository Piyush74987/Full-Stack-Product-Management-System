import React,{useEffect, useState} from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getProductById,updateProduct } from "../Services/ProductService";

export default function UpdateProductComp(){
    const[productName,setProductName]=useState('');
    const[productPrice,setProductPrice]=useState('');
    const[productQty,setProductQty]=useState('');
    const[productCategory,setProductCategory]=useState('');
    const {id}=useParams();

    useEffect(()=>{
        if(id){
            getProductById(id)
            .then((Response)=>{
                const p=Response.data;
                console.log(p);
                setProductName(p.productName)
                setProductPrice(p.productPrice)
                setProductQty(p.productQty)
                setProductCategory(p.productCategory)   
            }).catch((Error)=>{
                console.log(Error);
            })
        }
    },{id});

    const nav=useNavigate();
    const editProduct=(event)=>{
        event.preventDefault();
          const product={productName,productPrice,productQty,productCategory};
          console.log(product);

          updateProduct(id,product)
          .then((response)=>{
            console.log(response.data);
            nav('/');
          })
        }
    
    return (
        <div className="container">
            <br></br>
            <div className="row">
                <div className="card col-md-6 offset-md-3 offset-md-3">
                    <h2 className="text-Center">Update Product</h2>
                    <div class="card-body">
                        <form>
                            <div className="form-group mb2">
                                <label className="form-label">Product Name</label>
                                <input type="text" placeholder="Enter the Name" name="product" value={productName} className="form-contol"
                                onChange={(event)=>{setProductName(event.target.value)}}></input>
                            </div>
                            <div className="form-group mb2">
                                <label className="form-label">Product Cost</label>
                                <input type="text" placeholder="Enter the Cost" name="product" value={productPrice} className="form-contol"
                                onChange={(event)=>{setProductPrice(event.target.value)}}></input>
                            </div>
                            <div className="form-group mb2">
                                <label className="form-label">Product Quantity</label>
                                <input type="text" placeholder="Enter the Quantity" name="product" value={productQty} className="form-contol"
                                onChange={(event)=>{setProductQty(event.target.value)}}></input>
                            </div>
                            <div className="form-group mb2">
                                <label className="form-label">Product Category</label>
                                <input type="text" placeholder="Enter the Category" name="product" value={productCategory} className="form-contol"
                                onChange={(event)=>{setProductCategory(event.target.value)}}></input>
                            </div>

                        <button className="btn btn-success" onClick={editProduct}>Save Product</button>
                        </form>

                    </div>

                </div>

            </div>
        </div>
    )


}