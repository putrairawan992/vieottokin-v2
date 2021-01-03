import React from 'react';
import PropTypes from 'prop-types';

const Col = ({ children, xs, md, className}) => {
  const small = xs === 12 ? 'w-full' : `w-${xs}/12`;
  const medium = md === 12 ? 'md:w-full' : `md:w-${md || xs}/12`;

  return (
    <div className={`${small} ${medium} px-2 ${className}`}>
      { children }
    </div>
  );
}

Col.defaultProps = {
  className: '',
  xs: 12
};

Col.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  sm: PropTypes.number,
  md: PropTypes.number
};

export default Col;
