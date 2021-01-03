import React from 'react';

const Modal = ({ children }) => {
  return (
    <div className="h-screen w-full fixed left-0 top-0 flex z-50 justify-center items-center bg-black bg-opacity-50">
      <div className="bg-white rounded-md w-full m-2 md:w-6/12 lg:w-4/12">
        { children }
      </div>
    </div>
  );
}

export default Modal;
