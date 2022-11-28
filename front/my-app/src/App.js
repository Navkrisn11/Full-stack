import React,{useState}  from 'react';
import { BrowserRouter,Routes, Route, createMemoryRouter} from "react-router-dom";
import Layout from './Layout';import './App.css';
import Head from './Head.js';

import  Pizzalist from './Pizzalist.js';
import Burgerlist from './Burgerlist';
import Cartlist from './Cartlist';

function App() {

  const [cart, setCart] = useState([])


  const addToCart = (data) => {
    setCart([...cart, { ...data, quantity: 1 }])
  }

    return (
    <div className='App'>
     
     <BrowserRouter>
            
          
          <Head  count={cart.lenght}/> 
            <Routes> 
                    
                <Route   path="/" element={ <Layout />} />
        
                <Route path="/Pizza"   element={<Pizzalist />} />
                <Route  path="/Burger"  element={<Burgerlist />} />
               <Route path="/Cart" element ={<Cartlist />} />
            </Routes>

          </BrowserRouter>
  
                     
    </div>
  );
}


export default App;
