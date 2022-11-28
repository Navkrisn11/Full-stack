import React,{useState} from 'react'
import burger2 from './burger2.jpg';
import burger3 from './burger3.jpg';
import burger1 from './burger1.jpg';
import './Burgerlist.css'

const Burgerlist = (addToCart) => {
  
  const [blist,setBlist] = useState([
    {
      id: 1,
      img: burger1,
      name: 'Indori Burger',
      des: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been industrys.',
      price: 450
     
    },
    {
      id: 2,
      img:burger2 ,
      name: ' Chize burger',
      des: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been industrys.',
      price: 480
     
    },
  
    {
      id: 3,
      img:burger3,
      name: 'burger',
      des: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been industrys.',
      price: 550     
    },
  
  ])

 
  return (
    <div>
  <p>Tasty Burger</p>
   <div className='container'>

   {
    blist.map((blistItem,plistIndex)=>{

      return (


                            <div className='burger'>
                          <p className='d1'>
                          <strong>{blistItem.name}</strong><br/>
                          ₹{blistItem.price}<br/>
                          {blistItem.des}
                          <br/><button className='bbutton' onClick={() => addToCart()}>order</button>
                          
                          </p>
                    

                        <div >
                       
                        <img  className='burgerimg' src={blistItem.img}/>
                        </div>
                        </div>


      )

    })
   }
      
     </div>
     </div>
  )
}

export default Burgerlist;
