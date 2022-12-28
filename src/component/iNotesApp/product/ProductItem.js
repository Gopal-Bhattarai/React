// import { Link } from "react-router-dom"
import { useContext } from 'react';
import ProductContext from '../context/Product/ProductContext';
import noImage from '../img/noImage.png'

const ProductItem = ({product, handleEdit}) => {
    const imageUrl =''
    const urlHost = process.env.REACT_APP_HOST;

    const {products, setProducts} = useContext(ProductContext)

    const handleDelete = async (id) => {
      try {
        const response = await fetch(`${urlHost}/api/products/deleteproduct/${id}`,{
          method: 'DELETE',
          headers: {
            "auth-token" : localStorage.getItem('token')
          }
        })
        const result = await response.json();
        setProducts(products.filter(p=>p._id!==id))
        console.log(result);
      } catch (error) {
        
      }
    }
  return (
      <div className="card">
        <div style={{float:'right'}}>
          <span className="badge rounded-pill bg-danger">{product.price}</span>
        </div>
        <img src={imageUrl?imageUrl:noImage} height="170px" className="card-img-top" alt="..." />
        <div className="card-body">
            <h5 className="card-title">{product.productName}</h5>
            <p className="card-text">{product.description}</p>
        </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Qty: {product.quantityInStock} </li>
              <li className="list-group-item">SKU: {product.sku}</li>
            </ul>
            <div className="card-body">
              <button className="btn btn-primary" onClick={()=>handleEdit(product)}>Edit</button>
              <button className="btn btn-danger" onClick={()=>handleDelete(product._id)}>Delete</button>
            </div>
        </div>
  )
}

export default ProductItem
