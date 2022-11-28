import React ,{useState} from 'react'
import tomato from './tomato.jpg';
import './Pizzalist.css';
import silican from './silican.jpg';
import bombey from './bombey.jpg';
import Cartlist from './Cartlist';
const Pizzalist = (add)=> {

 
  
 

  const [plist,setPlist] = useState([
    {
      id: 1,
      img: tomato ,
      name: 'Tomato basile italiyan pizza',
      des: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been industrys.',
      price: 450
     
    },
    {
      id: 2,
      img:bombey ,
      name: 'Super Bombey pizza',
      des: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been industrys.',
           
      price: 470
     
    },
  
    {
      id: 3,
      img:silican,
      name: 'Itali pizza',
      des: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been industrys.',
      price: 550
     
    },
  
  ])
 
  
 
  return (
    <div className='pizzalist'>
  <p>Tasty Pizza</p>
   <div className='container'>

   {
    plist.map((plistItem,plistIndex)=>{

      return (


                    <div className='pizza'>
                         
                       <p className='d1'>
                          
                             <strong>{plistItem.name}</strong><br/>
                              ₹{plistItem.price}<br/>
                                  {plistItem.des}<br/>
                                
                                  <button className='bbutton' onClick={add}>order</button>
                                  </p>
                                        
                        <div >
                        <img    className='pizzaimg'  src={plistItem.img}/></div>
                        
                       </div>
                        


      )

    })
   }
 
     </div>
     </div>
  )
}

export default Pizzalist;
