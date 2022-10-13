import React from 'react';
import { useCart } from 'react-use-cart';
import img from '../img/image_processing20201106-11709-18misc6.gif';

const Cart = () => {
  const {
    totalItems,
    totalUniqueItems,
    cartTotal,
    emptyCart,
    isEmpty,
    removeItem,
    updateItemQuantity,
    items
  } = useCart();
  if(isEmpty) return <div className='d-flex align-items-center justify-content-center'>
    <img src={img} alt="" />
  </div>
  return (
    <div className='container'>
      <table className='table '>
        <thead>
          <tr>
            <th scope='col'>#</th>
            <th scope='col'>Img</th>
            <th scope='col'>Title</th>
            <th scope='col'>Price</th>
            <th scope='col'>Quantitiy</th>
            <th scope='col'>Del</th>
          </tr>
        </thead>
        <tbody>
          {items.map((fditem, i) => {
            return (
              <tr key={fditem.id}>
                <th scope='row'>{i + 1}</th>
                <td><img src={fditem.img} width="100" alt="" /></td>
                <td>{`${fditem.brand}:${fditem.model}`}</td>
                <td>{fditem.price * fditem.quantity}$</td>
                <td>
                  <button className='btn btn-danger btn-xs' onClick={() => updateItemQuantity(fditem.id, fditem.quantity - 1)}>-</button>
                  <span className='mx-2'>{fditem.quantity}</span>
                  <button className='btn btn-success btn-xs' onClick={() => updateItemQuantity(fditem.id, fditem.quantity + 1)}>+</button>
                </td>
                <td><button onClick={() => removeItem(fditem.id)} className='btn btn-danger btn-xs'>X</button></td>
              </tr>
            )
          })}
        </tbody>
      </table>
      <button className='btn btn-warning' onClick={()=>{emptyCart()}}>Cart Clear</button>
      <p className='mt-3'>Total price:{cartTotal}$</p>
      <p className='mt-3'>Total cart:{totalUniqueItems}</p>
      <p className='mt-3'>Total items:{totalItems}</p>

    </div>
  )
}
export default Cart;