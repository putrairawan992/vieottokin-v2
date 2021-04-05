import React, { useState } from 'react';
import PropTypes from 'prop-types';
import iconPath from './library';

const Icon = ({ size, color, name, className }) => (
  <svg
    viewBox={iconPath[name].box}
    width={size}
    height={size}
    className={`${color} ${className} fill-current`}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    { iconPath[name].path.map((item, i) => (
      <path key={ i } fillRule="evenodd" d={item} />
    )) }
  </svg>
);

export const IconImage = ({ name, className }) => {
  const [svgFile, setSvgFile] = useState('');

  import(`./${name}.svg`)
    .then(file => setSvgFile(file.default))
    .catch(err => console.log(err));

  return (
    <img src={svgFile} alt={name} className={className} />
  )
};

Icon.defaultProps = {
  size: 16,
  color: "text-white",
  className: ''
};

Icon.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

export default Icon;
