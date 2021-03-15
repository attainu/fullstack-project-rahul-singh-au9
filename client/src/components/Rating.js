import React, { useState } from 'react'

import { FaStar } from 'react-icons/fa'

const Rating = () => {
    const [rating, setrating] = useState(null)
    const [hover, sethover ] = useState(null)
    return (
        <div>

      
              
            {[...Array(5)].map((star,i) =>{ 
                const ratingValue =i+1;
            
            return( <label key={i} >
                  <input 
                  type="radio" 
                  name="rating" 
                  value={ ratingValue } 
                  style={{display:"none"}}
                  onClick={() => setrating(ratingValue)}
                 
                  />
            <FaStar className="star"
            color={ratingValue <= ( hover || rating ) ? '#ffc107 ' : '#e4e5e9'} 
            size={30}  
            onMouseEnter={() => sethover(ratingValue)}
            onMouseLeave={ () => sethover(null) }
            />
       
            </label>)
             })}

             <p>Your Rating is { rating }.</p>
        </div>
    )
}

export default Rating
