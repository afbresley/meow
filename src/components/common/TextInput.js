import React from 'react';
import { string, func } from 'prop-types'

const TextInput = ({name, label, onChange, placeholder, value, error, type="text"}) => {
  let wrapperClass = 'form-group';
  
  if (error && error.length > 0) {
    wrapperClass += ' has-error';
  }

  return (
    <div className={ wrapperClass }>
      <label htmlFor={ name }>{ label }</label>
      <div className="field">
        <input
          type={ type }
          name={ name }
          className="form-control"
          placeholder={ placeholder }
          value={ value }
          onChange={ onChange } />
        {error && <div>{error}</div>}
      </div>
    </div>
  );
};

TextInput.propTypes = {
  name: string.isRequired,
  label: string.isRequired,
  onChange: func.isRequired,
  placeholder: string,
  value: string,
  error: string
};

export default TextInput;