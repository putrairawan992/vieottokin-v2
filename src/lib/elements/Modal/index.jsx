import React from 'react';

const Modal = ({ children }) => (
  <div className="h-screen w-full fixed left-0 top-0 flex z-50 justify-center items-center bg-black bg-opacity-50">
    <div className="bg-white rounded-md w-full m-2 md:w-7/12 lg:w-5/12">
      { children }
    </div>
  </div>
);

export default Modal;
