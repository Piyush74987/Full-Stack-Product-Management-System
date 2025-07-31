import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import { createProduct } from "../Services/ProductService";

export default  function CreateProductComp(){
    const[productName,setProductName]=useState('');
    const[productPrice,setProductPrice]=useState('');
    const[productQty,setProductQty]=useState('');
    const[productCategory,setProductCategory]=useState('');
    const nav=useNavigate();
    const saveProduct=(event)=>{
        event.preventDefault();
            const product={productName,productPrice,productQty,productCategory};
        console.log(product);


        createProduct(product).then((Response)=>{
            console.log(Response.data);
            nav('/');
        })
    }
    return(
        <div className="container">
            <br></br>
            <div className="row">
                <div className="card col-md-6 offset-md-3 offset-md-3">
                    <h2 className="text-Center">Add Product</h2>
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

                        <button className="btn btn-success" onClick={saveProduct}>Save Product</button>
                        </form>

                    </div>

                </div>

            </div>
        </div>
    )
}