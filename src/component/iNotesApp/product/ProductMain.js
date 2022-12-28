import { useContext, useEffect, useState } from "react"
import ProductContext from "../context/Product/ProductContext"
import EditProduct from "./EditProduct";
import ProductItem from "./ProductItem";

const ProductMain = () => {
    const {getProducts, products} = useContext(ProductContext)
    const [isEdit, setIsEdit] = useState(false);
    const [editProduct, setEditProduct] = useState({});

    const setEditTrue = (state) => {
      setIsEdit(true)
      setEditProduct(state)
    }
    const setEditFalse = () => {
      setIsEdit(false);
    }

    useEffect(()=>{
        getProducts()
    },[]);

  return (
    <div className="row">
      {isEdit && <EditProduct cancelEdit={setEditFalse} productModify={editProduct}/> }
      {!isEdit &&
      products.map(product=> {
        return (
            <div className="col-md-4" key={product._id}>
                 <ProductItem product={product} handleEdit={setEditTrue} /> 
            </div>
        )
        }
      ) } 
    </div>
  )
}

export default ProductMain
