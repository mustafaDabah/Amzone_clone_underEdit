import React  from 'react';
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom';
import Header from './components/header'  
import CheckOut from './components/CheckOut'  
import Home from './components/home'  
import './index.css'

  class App extends React.Component {
      render() {
          return(   
             <Router>
               <div className="App">
                 {/*-----header------*/}
                  <Header />
                 <Switch>
                   <Route path='/checkOut'>
                      {/*-----CheckOut------*/}
                      <CheckOut/>
                    </Route>
                    <Route path='/'>
                      {/*-----home--------*/}
                      <Home />
                    </Route>
                  </Switch>
                </div>
              </Router>
          )
      }
      
  };



export default App;
