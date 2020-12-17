import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ style, children, to, className = '' }) => {
  return (
    <Link
      to={ to }
      className={`${style === 'solid' ? 'bg-orange' : 'border-orange border'} inline-block rounded-sm ${className}`}
    >
      { children }
    </Link>
  )
}

export default Button;
