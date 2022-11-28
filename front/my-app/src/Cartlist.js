import React,{useState,useEffect} from 'react'

const Cartlist = ({cart}) => {
  const [CART, setCART] = useState([])

    useEffect(() => {
        setCART(cart)
    }, [cart])


  
  return (
    <div>
    <h1>your order :</h1>
    
    <div className='container'>

    {
     CART?.map((cartItem,carttIndex)=>{
 
       return (
 
 
                     <div className='pizza'>
                          
                        <p className='d1'>
                           
                              <strong>{cartItem.name}</strong><br/>
                               ₹{cartItem.price}<br/>
                                   {cartItem.des}<br/>
                                 
                                  
                                   </p>
                                         
                         <div >
                         <img    className='pizzaimg'  src={cartItem.img}/></div>
                         
                        </div>
                         
 
 
       )
 
     })
    }
  
      </div>
      
    </div>
  )
}

export default Cartlist ;
