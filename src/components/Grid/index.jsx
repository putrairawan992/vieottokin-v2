import React from 'react';

export const Container = ({ children, className = '', fluid }) => {
  return (
    <section
      className={`${fluid ? 'w-full' : 'max-w-screen-xl pl-4 pr-4'} ${className} mx-auto`}
    >
      { children }
    </section>
  );
}

export const Row = ({ children, className = ''}) => {
  return (
    <section
      className={`flex flex-row ${className}`}
    >
      { children }
    </section>
  );
}