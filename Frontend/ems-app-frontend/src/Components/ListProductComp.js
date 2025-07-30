import { useState ,useEffect} from "react";
import { listProducts } from "../Services/ProductService";
import { useNavigate } from "react-router-dom";

export default function ListProductComp(){
    const [products,setProducts]=useState([
    {
        "productId":1,"productName":"aaa","productPrice":123,"productQty":677,"productCategory":"Electrical"
    }
    ]);
        useEffect(()=>{
            getAllProducts();
        },[]);
        const getAllProducts=()=>{
            listProducts()
            .then((Response)=>{
                console.log(Response.data);
                setProducts(Response.data);
            })
            .catch(error=>{
                console.log(error)
            });
        };

        const nav=useNavigate();

        const addnewProduct=()=>
            nav('/add product')

        return(
            <div className="container">
                <h2>List Of All Product</h2>
                <button className="btn btn-primary mb=2" onClick={addnewProduct}>Add Product</button>
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Cost</th>
                            <th>Quantity</th>
                            <th>Category</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map(p=>
                                <tr key={p.id}>
                                    <td>{p.productId}</td>
                                    <td>{p.productName}</td>
                                    <td>{p.productPrice}</td>
                                    <td>{p.productQty}</td>
                                    <td>{p.productCategory}</td>
                                    <td>
                                        <button className="btn btn-info">update</button>
                                        <button className="btn btn-danger">delete</button>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>

            </div>
        )
}