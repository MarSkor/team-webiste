import React, { useState } from 'react';

const Contact = () => {
  const [isActive, setisActive] = useState(false);
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
    if(e.target.value !== ''){
      setisActive(true);
    }else{
      setisActive(false);
    }
  }

  return (
    <>
        <form>
          <div className="floating-label-input-group">
            <input type="text" name='name' className='input' onChange={handleChange}/>
            <label htmlFor="name" className={`${isActive ? 'label active' : 'label'}`}>Name</label>
          </div>
          <div className="floating-label-input-group">
            <input type="text" name='name' className='input' onChange={handleChange}/>
            <label htmlFor="name" className={`${isActive ? 'label active' : 'label'}`}>Name</label>
          </div>
          <div className="floating-label-input-group">
            <input type="text" name='name' className='input' onChange={handleChange}/>
            <label htmlFor="name" className={`${isActive ? 'label active' : 'label'}`}>Name</label>
          </div>  
        </form>
    </>
  )
}

export default Contact