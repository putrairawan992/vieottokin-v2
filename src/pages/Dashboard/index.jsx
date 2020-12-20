import React, { Fragment } from 'react';
import { openModalNewPartner } from 'store/actions/ModalControl';
import { Container } from 'components/Grid';
import Navigator from './Navigator';
import ProviderTable from './ProviderTable';
import { connect } from 'react-redux';
import AddNewPartner from 'components/Popup/AddNewPartner';
import Icon from 'icon';

const listProvider = [
  {
    logo: '/images/provider/hnt-law.png',
    name: 'H & T Law',
    country: 'vietnam',
    city: 'Ha Noi',
  }, {
    logo: '/images/provider/trust.png',
    name: 'Trust',
    country: 'japan',
    city: 'tokyo',
  }, {
    logo: '/images/provider/lopez-law.png',
    name: 'Lopez Law',
    country: 'vietnam',
    city: 'Da Nang',
  }, {
    logo: '/images/provider/spirit.png',
    name: 'Spirit of Justice',
    country: 'philippines',
    city: 'Quezon City',
  }, {
    logo: '/images/provider/risid.png',
    name: 'Risid',
    country: 'indonesia',
    city: 'Bandung',
  }, {
    logo: '/images/provider/paypal.png',
    name: 'PayPal',
    country: 'singapore',
    city: 'Singapore',
  },
]

const Dashboard = ({ showModalNewPartner, dispatch }) => {
  return (
    <Fragment>
      <Container className="mb-8 pt-16">
        <h1 className="text-darkdrop text-lg font-bold mb-6">Dashboard</h1>

        <Navigator count={ listProvider.length } />
      </Container>

      <Container className="pb-20">
        <div className="border border-gray-300 shadow">
          <div className="px-5 py-4 flex justify-between items-center">
            <h2 className="text-darkdrop font-medium text-lg">Partners</h2>

            <div className="flex">
              <div className="flex border-gray-300 border rounded items-center justify-between">
                <div className="bg-white h-10 w-12 flex justify-center items-center rounded-l-sm">
                  <Icon name="search" size={ 12 } color="#333" />
                </div>

                <input
                  className="h-10 w-full text-gray-500"
                  placeholder="Search"
                />
              </div>

              <button
                className="px-5 text-xs h-10 text-white ml-5 font-medium bg-orange rounded"
                onClick={ () => dispatch(openModalNewPartner(true)) }
              >
                Add New Partner
              </button>
            </div>
          </div>

          <ProviderTable list={ listProvider } />

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
    </Fragment>
  );
}

function mapStateToProps(state) {
  return state.modalControl
}

export default connect(mapStateToProps)(Dashboard);
