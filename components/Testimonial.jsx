import React from 'react';
import { urlFor } from '../lib/client';

const Testimonial = ({testimonial: {reviewtext, job, ratingimage, user, userimage}}) => { 

  return (
  <div className="card">
    <div className="card-content">
      <span className="stars">
        <img src={urlFor(ratingimage)} alt="stars" className='testimonial-img rating-img'/>
      </span>
      <div className="review-text">
        <p>{reviewtext}</p>
      </div>
    </div>
    <div className="user">
      <img src={urlFor(userimage)} alt="user-img" className='testimonial-img user-img' />
      <span className='user-info'>
        <h4>{user}</h4>
        <p>{job}</p>
      </span>
    </div>
  </div>
  ) 

}

export default Testimonial