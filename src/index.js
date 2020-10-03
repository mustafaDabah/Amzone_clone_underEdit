import React from 'react';
import ReactDOM , {render} from 'react-dom';
import App from './App' ;
import {StateProvider} from "./components/stateProvider";
import {initialState } from './components/reducer';
import reducer from './components/reducer';

ReactDOM.render( 
   <React.StrictMode>    
    <StateProvider initialState={initialState} render={reducer}>
      <App/> 
    </StateProvider>
   </React.StrictMode>    
    , document.getElementById("root"));