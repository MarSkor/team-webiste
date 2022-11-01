import React from 'react';

const Hero = () => {
  return (
    <div className='section section-hero hero-img'>
      <div className="hero-content wrapper">
        <div className="content-wrap">
          <h1>Instant collaboration for remote teams</h1>
          <p className='p-md'>All-in-one place for your remote team to chat, collaborate and track project progress.</p>
          <div className="input-group">
            <input type="text" placeholder='Email'/>
            <button className='btn btn-primary' type='button'>Get early access</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero