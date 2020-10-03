import React from 'react';
import product1 from '../img/product1.png';
import './product.css';
import {useStateValue} from './stateProvider';



function Product ({id ,title , image , price , rating}) {
  const [{basket} , dispatch] = useStateValue() ;  
  const addToBasket = () => {
      // dispatch the item into data layer
      console.log("dispathing...")
     dispatch({
         type:'ADD_TO_BASKET',
         item:{
             id:id,
             title:title,
             image:image,
             price:price,
             rating:rating
         }
     })
  }    
    return (
     <div className='product' >
      <div className='product-info'>
        <p>{title}</p>
        <p className="product-price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className='product-rating'>
          {Array(rating).fill()
          .map( (_,i) => {
            return <p>☆</p>
        })}
        </div>
      </div>
      <img src={image} alt="" />
      <button onClick={addToBasket}>Add to Basket</button>      
     </div>
    )
}
export default Product