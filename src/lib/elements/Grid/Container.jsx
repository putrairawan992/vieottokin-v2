import React from 'react';
import PropTypes from 'prop-types';

const Container = ({ children, fluid, className }) => {
  const screen = `${fluid ? 'w-full' : 'max-w-screen-xl pl-4 pr-4'}`;

  return (
    <section className={ `${screen} ${className} mx-auto` }>
      { children }
    </section>
  );
}

Container.defaultProps = {
  className: '',
  fluid: false
};

Container.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  fluid: PropTypes.bool
};

export default Container;
