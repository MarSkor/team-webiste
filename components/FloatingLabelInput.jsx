import React, { useState } from 'react';


const FloatingLabelInput = ({ type, name, children}) => {
    const [active, setActive] = useState(false);

  function handleActivation(e) {
    setActive(!!e.target.value);
  }


  return (
    <div className="input-group-contact">
      <input
        className={[
          "input-group-contact-input",
          active ? "pt-6" : ""
        ].join(" ")}
        id={name}
        name={name}
        type={type}
        onChange={handleActivation}
        required
        autoComplete='off'
        spellCheck='true'
      />
      <label
        className={[
          "input-group-contact-label",
          active ? "text-xs" : "text-sm"
        ].join(" ")}
        htmlFor={name}
      >
        {children}
      </label>
    </div>
  )
}

export default FloatingLabelInput