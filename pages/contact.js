import React from 'react';
import { Contact } from '../components';

const contact = () => {
  return (
    <div className='main-wrapper pd-top mt contact-container'>
        <h2>Have any questions?</h2>
        <p>Fill out the form or contact us directly at <a className='link email-link' href="#">info@teamapp.com</a></p>
        <div className="form-container">
          <Contact/>
        </div>
    </div>
  )
}

export default contact