import React from 'react';
import PropTypes from 'prop-types';

const Row = ({ children, className }) => {
  return (
    <div className={`flex flex-row flex-wrap -mx-2 ${className}`}>
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
