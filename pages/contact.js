import React from 'react';
import { Contact } from '../components';

const contact = () => {
  return (
    <div className='main-wrapper pd-top mt contact-container'>
        <h2>Have any questions?</h2>
        <h4>fill out the form or contact us directly</h4>
        <div className="form-wrap">
          <Contact/>
        </div>
    </div>
  )
}

export default contact