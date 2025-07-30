import axios from "axios";

const React_BASE_URI='http://localhost:8080/pms';

export const listProducts=()=>{
    return axios.get(React_BASE_URI);
}

export const createProduct=(product)=>{
    return axios.post(React_BASE_URI,product);
}

export const getProductById=(proId)=>{
    return axios.get(React_BASE_URI+'/'+proId);
}

export const delProduct=(proId)=>{
    return axios.delete(React_BASE_URI+'/'+proId);
}

export const updateProduct=(proId,product)=>{
    return axios.put(React_BASE_URI+'/'+proId,product);
}