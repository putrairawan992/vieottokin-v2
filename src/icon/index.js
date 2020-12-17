import React, { useState } from 'react';

const Icon = ({ name, className = '' }) => {
  const [icon, setIcon] = useState('');

  import(`./${name}.svg`).then(svg => setIcon(svg.default));

  return (
    <img src={ icon } alt={ name } className={ className } />
  );
};

export default Icon;
