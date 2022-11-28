import React, { Component } from 'react'
import './App.css'
import pizza from './pizza.jpg';
import burger from './burger.jpg';
import { Outlet,Link } from 'react-router-dom';
const Layout = () => {
  return (
    <div>
         <div>
            <Link to='pizza'>
              <button><img src={pizza}/><p>pizza</p></button>
              </Link>
              <Link to='burger'> 
              <button><img src={burger}/><p>burger</p></button>
              </Link>
              </div>
                  
                  


                  
        <Outlet />
    </div>
  )
}

export default Layout;












// import { Outlet,Link } from 'react-router-dom';
// import React, { Component } from 'react'
// import './App.css'
// import pizza from './pizza.jpg';
// import burger from './burger.jpg';

// export default class Layout extends Component {
//   render() {
//     return (

//         <div>
       
      
       
//     <div>
//    <Link to='pizza'>
//     <button><img src={pizza}/><p>pizza</p></button>
//     </Link>
//     <Link to='burger'> 
//     <button><img src={burger}/><p>burger</p></button>
//     </Link>
//     </div>
        
        


        
//         <Outlet />
//    </div>

//     )
//   }
// }
