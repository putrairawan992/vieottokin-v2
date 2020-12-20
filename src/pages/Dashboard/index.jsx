import React, { Fragment, useState } from 'react';
import { Container } from 'components/Grid';
import Navigator from './Navigator';
import ProviderTable from './ProviderTable';
import ServiceTable from './ServiceTable';
import { connect } from 'react-redux';
import AddNewPartner from 'components/Popup/AddNewPartner';
import AddNewService from 'components/Popup/AddNewService';
import DeleteConfirm from 'components/Popup/DeleteConfirm';
import Icon from 'icon';

const listProvider = [
  {
    logo: '/images/provider/hnt-law.png',
    name: 'H & T Law',
    country: 'vietnam',
    city: 'Ha Noi',
    service: 'Litigaion'
  }, {
    logo: '/images/provider/trust.png',
    name: 'Trust',
    country: 'japan',
    city: 'tokyo',
    service: 'Intellectual Propery'
  }, {
    logo: '/images/provider/lopez-law.png',
    name: 'Lopez Law',
    country: 'vietnam',
    city: 'Da Nang',
    service: 'Intellectual Propery'
  }, {
    logo: '/images/provider/spirit.png',
    name: 'Spirit of Justice',
    country: 'philippines',
    city: 'Quezon City',
    service: 'Litigaion'
  }, {
    logo: '/images/provider/risid.png',
    name: 'Risid',
    country: 'indonesia',
    city: 'Bandung',
    service: 'Safety Advisory'
  }, {
    logo: '/images/provider/paypal.png',
    name: 'PayPal',
    country: 'singapore',
    city: 'Singapore',
    service: 'Payroll'
  },
];

const Dashboard = ({ showModalNewPartner, showModalDeleteConfirm, showModalNewService }) => {
  const [showTable, setShowTable] = useState('partner');

  return (
    <Fragment>
      <Container className="mb-8 pt-16">
        <h1 className="text-darkdrop text-lg font-bold mb-6">Dashboard</h1>

        <Navigator
          count={ listProvider.length }
          switchTable={ e => setShowTable(e) }
          service={ showTable }
        />
      </Container>

      <Container className="pb-20">
        <div className="border border-gray-300 shadow">
          { showTable === 'partner' && <ProviderTable list={ listProvider } /> }
          { showTable === 'service' && <ServiceTable list={ listProvider } /> }

          <div className="flex justify-between p-5">
            <div className="flex items-center text-xs">
              <p>Show</p>

              <select className="border p-1 ml-2 font-bold">
                <option>10</option>
                <option>20</option>
                <option>30</option>
                <option>40</option>
              </select>
            </div>

            <nav className="flex text-xs text-gray-500">
              <button className="px-3 py-2 flex items-center">
                <Icon name="chevron-left" size={12} color="#7e8692" />
                <i className="ml-2">prev</i>
              </button>

              <button className="px-3 py-2 border-b border-orange text-orange">1</button>
              <button className="px-3 py-2">2</button>
              <button className="px-3 py-2">3</button>
              <button className="px-3 py-2">4</button>

              <button className="px-3 py-2 flex items-center">
                <i className="mr-2">next</i>
                <Icon name="chevron-right" size={12} color="#7e8692" />
              </button>
            </nav>
          </div>
        </div>
      </Container>

      { showModalNewPartner && <AddNewPartner /> }
      { showModalDeleteConfirm && <DeleteConfirm /> }
      { showModalNewService && <AddNewService /> }
    </Fragment>
  );
}

function mapStateToProps(state) {
  return state.modalControl
}

export default connect(mapStateToProps)(Dashboard);
