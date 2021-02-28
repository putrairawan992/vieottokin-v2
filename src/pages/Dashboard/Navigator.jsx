import React from 'react';
import { connect } from 'react-redux';
import { Container } from 'lib/elements/Grid';
import Icon from 'icon';

const Navigator = ({ count, tableType, switchTable, role }) => (
  <Container className="border-gray-300 border rounded shadow flex justify-between p-3 md:py-4 md:px-6">
    <p className="text-sm">
      Total No. of <span className="capitalize">{ tableType }</span>: <b>{ count }</b>
    </p>

    { role === 'Admin' && <div className="flex items-center">
      <button
        className="flex items-center md:mr-8 mr-4"
        onClick={ () => switchTable('partners') }
      >
        <Icon name="user" color={ tableType === 'partners' ? '#0c4596' : '#333' } />
        <span className={ `md:ml-3 ml-1 text-sm font-medium ${ tableType === 'partners' ? 'text-darkdrop' : '#999' }` }>Partners</span>
      </button>

      <button
        className="flex items-center"
        onClick={ () => switchTable('services') }
      >
        <Icon name="suitcase" color={ tableType === 'services' ? '#0c4596' : '#333' } />
        <span className={ `md:ml-3 ml-1 text-sm font-medium ${ tableType === 'services' ? 'text-darkdrop' : '#999' }` }>Services</span>
      </button>
    </div> }
  </Container>
);

const mapStateToProps = state => ({
  role: state.auth.user.role
})

export default connect(mapStateToProps)(Navigator);
