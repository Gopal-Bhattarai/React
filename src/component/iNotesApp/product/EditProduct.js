import { useContext, useState } from "react"
import ProductContext from "../context/Product/ProductContext";
import ProductImageUpload from "../Utils/ProductImageUpload";

const EditProduct = ({productModify, cancelEdit}) => {

    const urlHost = process.env.REACT_APP_HOST;
    const {products, setProducts} = useContext(ProductContext)

    const [product, setProduct] = useState(productModify)
    const onChange = (e) =>{
        setProduct({...product,[e.target.name]: e.target.value})
    }

    const handleClick = async (e) =>{
        e.preventDefault();
        //update in database
        const response = await fetch(`${urlHost}/api/products/updateproduct/${product._id}`,{
            method: 'PUT',
            headers: {
                "Content-Type" : "application/json",
                "auth-token" : localStorage.getItem('token')
            },
            body: JSON.stringify({...product})
        })
        await response.json();
        setProducts(products.map(p=>p._id===product._id ? ({...p, ...product}) : p))
        cancelEdit();
    }

  return (
    
    <div>
        {product.productName &&
        <>
        <h1>Modify {product.productName}</h1>
        <form className='my-3' onSubmit={handleClick}>
            <div className="mb-3">
                <label htmlFor="productName" className="form-label">Product Name</label>
                <input type="text" className="form-control" id="productName" name="productName" aria-describedby="emailHelp" value={product.productName} onChange={onChange} minLength={5} required/>
            </div>
            <div className="mb-3">
                <label htmlFor="description" className="form-label">Description</label>
                <input type="text" className="form-control" id="description" name="description" value={product.description} onChange={onChange} minLength={10} required />
            </div>
            <div className="mb-3">
                <label htmlFor="brand" className="form-label">Brand</label>
                <input type="text" className="form-control" id="brand" name="brand" value={product.brand} onChange={onChange} />
            </div>
            <div className="mb-3">
                <label htmlFor="category" className="form-label">Category</label>
                <input type="text" className="form-control" id="category" name="category" value={product.category} onChange={onChange} />
            </div>
            <div className="mb-3">
                <label htmlFor="price" className="form-label">Price MRP</label>
                <input type="text" className="form-control" id="price" name="price" value={product.price} onChange={onChange} />
            </div>
            <div className="mb-3">
                <label htmlFor="discount" className="form-label">Discount (if any)</label>
                <input type="text" className="form-control" id="discount" name="discount" value={product.discount} onChange={onChange} />
            </div>
            <div className="mb-3">
                <label htmlFor="quantityInStock" className="form-label">Stock</label>
                <input type="text" className="form-control" id="quantityInStock" name="quantityInStock" value={product.quantityInStock} onChange={onChange} />
            </div>
            <div className="mb-3">
                <label htmlFor="sku" className="form-label">SKU</label>
                <input type="text" className="form-control" id="sku" name="sku" value={product.sku} onChange={onChange} />
            </div>
            <div className="mb-3">
                <label htmlFor="active" className="form-label">Active</label>
                <input type="text" className="form-control" id="active" name="active" value={product.active} onChange={onChange} />
            </div>
            <button type="submit" className="btn btn-primary">Update Product</button>
            <button type="submit" className="btn btn-primary" onClick={cancelEdit}>Cancel</button>
        </form>
        <div className="card shadow rounded">
            <h2 className="mb-2">Upload Product Images</h2>
            <ProductImageUpload productid={product._id} />

        </div>
        </>
    }
    </div>
  )
}

export default EditProduct
