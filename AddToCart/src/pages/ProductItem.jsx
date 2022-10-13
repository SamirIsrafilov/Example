import React from 'react'
import { useCart } from 'react-use-cart';
import alertify from 'alertifyjs';

const ProductItem = ({ photo, brandp, modelp, yearp, colorp, pricep, statusp, cars }) => {
  const { addItem } = useCart();
  return (
    <div className="card col-12 col-sm-6 col-md-3 mx-3 mt-4 p-0 rounded-0 border-0 position-relative" style={{ width: "380px" }}>
      <img src={photo} className="card-img-top rounded-0" alt={photo} style={{ width: "380px", height: "260px" }} />
      <div className='bg-info position-absolute top-0 end-0 text-white d-flex justify-content-center align-items-center' style={{ width: "46px", height: "25px", fontSize: "11px" }}>{statusp}</div>
      <div className="card-body bg-dark p-0">
        <h5 className="card-title border-bottom py-3 ps-4 text-white">{`${yearp} ${brandp} ${modelp}`}</h5>
        <p className="card-text ms-4 text-info pt-3 fs-5">${pricep} <span className='text-muted ms-3 fw-semibold'>{colorp}</span></p>
        <button onClick={() => (addItem(cars), alertify.success(modelp + brandp))} className="btn btn-primary ms-4 my-4 rounded-0 fw-semibold" style={{ width: "330px", height: "42px" }}>ADD TO CART</button>
      </div>
    </div>
  )
}

export default ProductItem