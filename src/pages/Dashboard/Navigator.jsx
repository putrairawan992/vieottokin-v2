import React from 'react';
import Icon from 'icon';

const Navigator = ({ count, service, switchTable }) => {

  return (
    <div className="border-gray-300 border rounded shadow flex justify-between py-4 px-6">
      <p>Total No. of <span className="capitalize">{ service }</span>: <b>{ count }</b></p>

      <div className="flex items-center">
        <button
          className="flex items-center mr-8"
          onClick={ () => switchTable('partner') }
        >
          <Icon name="user" color={ service === 'partner' ? '#0c4596' : '#333' } />
          <span className={ `ml-3 text-sm font-medium ${ service === 'partner' ? 'text-darkdrop' : '#999' }` }>Partners</span>
        </button>

        <button
          className="flex items-center mr-8"
          onClick={ () => switchTable('service') }
        >
          <Icon name="suitcase" color={ service === 'service' ? '#0c4596' : '#333' } />
          <span className={ `ml-3 text-sm font-medium ${ service === 'service' ? 'text-darkdrop' : '#999' }` }>Services</span>
        </button>
      </div>
    </div>
  );
}

export default Navigator;
