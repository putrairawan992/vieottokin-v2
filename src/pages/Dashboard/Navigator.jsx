import React from 'react';
import { Container } from 'lib/elements/Grid';
import Icon from 'icon';

const Navigator = ({ count, service, switchTable }) => {

  return (
    <Container className="border-gray-300 border rounded shadow flex justify-between p-3 md:py-4 md:px-6">
      <p className="text-sm">
        Total No. of <span className="capitalize">{ service }</span>: <b>{ count }</b>
      </p>

      <div className="flex items-center">
        <button
          className="flex items-center md:mr-8 mr-4"
          onClick={ () => switchTable('partner') }
        >
          <Icon name="user" color={ service === 'partner' ? '#0c4596' : '#333' } />
          <span className={ `md:ml-3 ml-1 text-sm font-medium ${ service === 'partner' ? 'text-darkdrop' : '#999' }` }>Partners</span>
        </button>

        <button
          className="flex items-center"
          onClick={ () => switchTable('service') }
        >
          <Icon name="suitcase" color={ service === 'service' ? '#0c4596' : '#333' } />
          <span className={ `md:ml-3 ml-1 text-sm font-medium ${ service === 'service' ? 'text-darkdrop' : '#999' }` }>Services</span>
        </button>
      </div>
    </Container>
  );
}

export default Navigator;
