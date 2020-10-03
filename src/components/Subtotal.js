import React from 'react';
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';
function Subtotal () {
    return (
      <div className="Subtotal">
        <CurrencyFormat
         renderText={(value)=>{
          return(
           <>
             <p>  Subtotal (0 items): <strong>0</strong></p>  
             <small className='subtotal-gift'> 
               <input type='checkbox' /> this order contains a gift     
             </small>   
           </>
          )
         }}
            decimalScale={2}
            value={0}
            displayType={'text'}
            thousandSeparator={true}
            prefix={'$'}
        />
         <button>Process to CheckOut</button>        
      </div>
    )
}
export default Subtotal;