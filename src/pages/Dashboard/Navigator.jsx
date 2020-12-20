import React from 'react';
import Icon from 'icon';

const Navigator = ({ count }) => {

  return (
    <div className="border-gray-300 border rounded shadow flex justify-between py-4 px-6">
      <p>Total No. of Partners: <b>{ count }</b></p>

      <div className="flex items-center">
        <button className="flex items-center mr-8">
          <Icon name="user" color="#0c4596" />
          <span className="ml-3 text-sm font-medium text-darkdrop">Partners</span>
        </button>

        <button className="flex items-center">
          <Icon name="suitcase" color="#0c4596" />
          <span className="ml-3 text-sm font-medium text-darkdrop">Services</span>
        </button>
      </div>
    </div>
  );
}

export default Navigator;
