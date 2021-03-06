import React from 'react';
// import { Link } from 'react-router-dom';

const Button = ({ type, children, className = '', onClick }) => {
  return (
    <button
      onClick={ onClick }
      className={`${type === 'solid' ? 'bg-orange' : 'border-orange border'} inline-block rounded-sm ${className}`}
    >
      { children }
    </button>
  )
}

export default Button;
