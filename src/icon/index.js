import React from 'react';
import PropTypes from 'prop-types';
import iconPath from './library';

const Icon = ({ size, color, name, className = '' }) => (
  <svg
    viewBox={iconPath[name].box}
    width={size}
    height={size}
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    { iconPath[name].path.map((item, i) => (
      <path key={ i } fillRule="evenodd" fill={color} d={item} />
    )) }
  </svg>
);

Icon.defaultProps = {
  size: 16,
  color: "#fff"
};

Icon.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

export default Icon;
