import React from 'react';

const Modal = ({ show, handleClose, children }) => {
  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 ${show ? 'block' : 'hidden'}`} onClick={handleClose}>
      <div className="bg-white w-11/12 md:w-2/3 lg:w-1/2 p-6 rounded shadow-lg relative" onClick={(e) => e.stopPropagation()}>
        <button className="absolute top-2 right-2 text-gray-500 hover:text-gray-800" onClick={handleClose}>
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
