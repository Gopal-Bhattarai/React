import { useState } from "react";
import ProductContext from "./ProductContext";

const ProductState = (props) => {
    const urlHost = process.env.REACT_APP_HOST;
    const [products, setProducts] = useState([]);

    const getProducts = async () =>{
        const response = await fetch(`${urlHost}/api/products/getproducts`,{
            method: 'GET',
            headers: {
                "auth-token": localStorage.getItem('token')
            }
        })
        const json = await response.json();
        setProducts(json)
    };

    return (
        <div>
            <ProductContext.Provider value={{products, setProducts, getProducts}}>
                {props.children}
            </ProductContext.Provider>
        </div>
    ) 
}

export default ProductState