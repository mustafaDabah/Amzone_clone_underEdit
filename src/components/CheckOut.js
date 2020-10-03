import React from 'react';
import checkOutAds from '../img/checkOutAds.jpg';
import './CheckOut.css';
import Subtotal from './Subtotal';
function CheckOut (){
    return (
      <div className='CheckOut'>
        <div className="checkout-left">
          <img className="checkOut-ad" src={checkOutAds} alt="" />
          <div>
            <h2 className='checkOut-title'>Your Shopping Basket</h2>
          </div>
        </div>
        <div className="checkout-right">
         <Subtotal />
        </div>
      </div>
    )
}

export default CheckOut;
