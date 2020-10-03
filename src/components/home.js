import React   from 'react';
import home    from '../img/home.jpg';
import product1    from '../img/product1.png';
import product2    from '../img/product2.png';
import product3    from '../img/product3.png';
import product4    from '../img/product4.png';
import product5    from '../img/product5.png';
import product6    from '../img/product6.png';
import Product from './product'
import './home.css';


function Home () {
    return (
        <div className="home">
          <div className='home-container'>
            <img className='home-img' src={home} alt='' />
            <div className='home-row'>
             {/*------product-----*/}
                <Product
                  title="the lean startup" 
                  price={29.99} 
                  image={product2}
                  rating={5}
                  id="458678534"/>
             {/*------product-----*/}
                <Product
                 title="the lean startup" 
                  price={59.99} 
                  image={product1}
                  rating={3}
                  id='45546418'
                 />
            </div>
            <div className='home-row'>
             {/*------product-----*/}
                <Product
                  title="the lean startup" 
                  price={59.99} 
                  image={product3}
                  rating={3}
                  id='458486441' />
              
             {/*------product-----*/}
                <Product  
                  title="the lean startup" 
                  price={59.99} 
                  image={product4}
                  rating={3}
                  id='456486442'/>

             {/*------product-----*/}
                <Product  
                  title="the lean startup" 
                  price={59.99} 
                  image={product5}
                  rating={3}
                  id='45864443'/>

            </div>
            <div className='home-row'>
             {/*------product-----*/}
                <Product 
                  title="the lean startup" 
                  price={59.99} 
                  image={product6}
                  rating={3}
                  id='45446684'  />
            </div>
          </div>
        </div>
    )
}

export default Home