import React from 'react';

const Container = ({ children, className = '', fluid }) => {
  return (
    <section
      className={`${fluid ? 'w-full' : 'max-w-screen-xl pl-4 pr-4'} ${className} mx-auto`}
    >
      { children }
    </section>
  );
}

export default Container;
