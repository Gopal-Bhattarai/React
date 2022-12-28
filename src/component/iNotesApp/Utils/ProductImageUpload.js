import React from 'react'

const ProductImageUpload = (productid) => {
    const urlHost = process.env.REACT_APP_HOST;
    const fetchurl = `${urlHost}/api/products/images/${productid.productid}`;
const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    const input = document.querySelector('#imageList');
    for (const file of input.files) {
        formData.append("imageList", file, file.name)
    }

    const response = await fetch(fetchurl, {
        method: 'POST',
        headers: {
            "auth-token" : localStorage.getItem('token')
        },
        body: formData
    })
    const json = await response.json();
    console.log(json);
}
    
  return (
    <div>
        <form onSubmit={handleSubmit} encType="multipart/form-data" method="POST">
            <div className="form-group">
                <input type="file" className="form-control-file" id="imageList" name="imageList" multiple accept="image/*" />
                <input type="submit" value="Upload Files" className="btn btn-primary" />
            </div>
        </form>
    </div>
  )
}

export default ProductImageUpload
