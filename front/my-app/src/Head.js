import React from 'react';
import'./Head.css';
import { Link } from 'react-router-dom';

const Head = (props) => {
  return (
    <div className='head'>
          <div className='p1'>
          <Link to='/'>
          <span  ><b>Food Ordering Portal </b></span>
       </Link>

          </div>
              <div className='p2' >
                <Link to='/Cart'>
                    <span  >Cart{props.length}</span>
                </Link>
            
               </div>

    </div>

  )
}

export default Head ;


