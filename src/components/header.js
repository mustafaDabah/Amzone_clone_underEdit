import React from 'react' ; 
import './header.css';
import logo from '../img/amazon_PNG25.png'
import {Link }from 'react-router-dom'; 
import {useStateValue} from './stateProvider';

function Header () {
 const [{basket} , dispatch] = useStateValue();    
    
    return (
      <div className="header">
        <Link to="/">
          <img src={logo} className="logo" />
        </Link>
        <div className="search-box">
          <input className="heading-searchIn" type='text' />
           <svg className='search-icon' fill="#000000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="64px" height="64px"><path d="M56.6,104c10.3,0,19.7-3.9,26.9-10.3l2.3,2.3l-2.1,2.2c-1.2,1.2-1.2,3.1,0,4.3l18,18.2c0.6,0.6,1.3,0.9,2.1,0.9s1.6-0.3,2.1-0.9l8-8.1c1.1-1.2,1.1-3.1-0.1-4.2l-18-18.2c-0.6-0.6-1.3-0.9-2.1-0.9s-1.6,0.3-2.1,0.9l-2.1,2.2L87.2,90c6.3-7.3,10.2-16.8,10.2-27.2c0-22.7-18.3-41.2-40.8-41.2c-22.5,0-40.8,18.5-40.8,41.2C15.8,85.6,34.1,104,56.6,104z M93.8,96.6l13.8,14l-3.8,3.8l-13.8-14L93.8,96.6z M56.6,27.7c19.2,0,34.8,15.8,34.8,35.2S75.8,98,56.6,98S21.8,82.3,21.8,62.9S37.4,27.7,56.6,27.7z"/><path d="M37.1 58.6c.3.1.6.2.9.2 1.1 0 2.1-.7 2.5-1.8 2.4-6.9 9-11.6 16.2-11.6 1.4 0 2.6-1.2 2.6-2.6s-1.2-2.6-2.6-2.6c-9.5 0-18 6.1-21.2 15.1C35 56.6 35.7 58.2 37.1 58.6zM37.8 70.5c1.4 0 2.6-1.2 2.6-2.6l0-.3c0-1.5-1.1-2.7-2.6-2.7 0 0 0 0-.1 0-1.4 0-2.6 1.1-2.6 2.6l0 .4C35.2 69.3 36.3 70.5 37.8 70.5z"/></svg>
        </div> 
        <div className="header-nav">
          <div className="header-option">
            <span className='header-optionOne'>Hello Mustafa</span>
            <span className='header-optionTwo'>Sign In</span>
          </div>
          <div className="header-option">
            <span className='header-optionOne'>Returns</span>
            <span className='header-optionTwo'>& Orders</span>
          </div>
          <div className="header-option">
            <span className='header-optionOne'>Your</span>
            <span className='header-optionTwo'>Prime</span>
          </div>
          <div className="header-optionBasket">
            <Link to='/checkOut'>
                <svg className="iconBasket"  id="Capa_1" fill='#fff'  height="20" viewBox="0 0 509.275 509.275" width="20" xmlns="http://www.w3.org/2000/svg"><g><path d="m479.637 314.485v-182.744l-360-65v-22.466c0-24.413-19.861-44.275-44.274-44.275h-45.726v30h45.725c7.871 0 14.275 6.404 14.275 14.275v277.005c0 31.979 26.016 57.995 57.995 57.995h12.005v34.187c-6.129-2.686-12.891-4.187-20-4.187-27.57 0-50 22.43-50 50s22.43 50 50 50c25.883 0 47.233-19.769 49.749-45h.251v-85h260v34.187c-6.129-2.686-12.891-4.187-20-4.187-27.57 0-50 22.43-50 50s22.43 50 50 50c25.883 0 47.233-19.769 49.749-45h.251v-115h-332.005c-15.437 0-27.995-12.558-27.995-27.995v-11.796zm-340 164.79c-11.028 0-20-8.972-20-20s8.972-20 20-20 20 8.972 20 20-8.972 20-20 20zm290 0c-11.028 0-20-8.972-20-20s8.972-20 20-20 20 8.972 20 20-8.972 20-20 20zm-160-197.71-60-.833v-167.256l60 10.833zm30-151.839 55 9.931v143.089l-55-.764zm-120 150.589-60-.833v-182.256l60 10.833zm270 3.75-65-.903v-138.089l65 11.736z"/></g>
            </svg>  
            </Link>   
            <span className='header-optionTwo header-basketCount'>{basket?.length}</span>
          </div>
        </div>
      </div>
    )
}

export default Header ;