import React from 'react';
import PropTypes from 'prop-types';

const Row = ({ children, className }) => {
  const marginX = className.includes('mx') ? '' : '-mx-2';

  return (
    <div className={`flex flex-row flex-wrap ${marginX} ${className}`}>
      { children }
    </div>
  );
}

Row.defaultProps = {
  className: '',
};

Row.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

export default Row;
