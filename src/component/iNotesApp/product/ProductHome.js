import ProductLeftBar from './ProductLeftBar'
import ProductMain from './ProductMain'
import ProductRightBar from './ProductRightBar'

const ProductHome = () => {
  return (
    <div className="container-fluid">

     {/* header row  */}
    <div className="row"> 
      <div className="col-md-8">Advertisement Premium Rs. 5000</div>
      <div className="col-6 col-md-4">Advertisement Premium Rs. 4000</div>
    </div>

     {/* body row  */}
    <div className="row">
      <div className="col-6 col-md-2"><ProductLeftBar /></div>
      <div className="col-6 col-md-8"><ProductMain /> </div>
      <div className="col-6 col-md-2"><ProductRightBar /></div>
    </div>

     {/* footer row  */}
    <div className="row">
      <div className="col-6">.col-6</div>
      <div className="col-6">.col-6</div>
    </div>
  </div>
  )
}

export default ProductHome
