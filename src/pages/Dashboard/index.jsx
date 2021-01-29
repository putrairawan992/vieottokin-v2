import React, { Fragment, useState } from 'react';
import { Container } from 'lib/elements/Grid';
import { AddNewPartner, AddNewService, EditPartner, DeleteConfirm, EditService } from 'lib/components/Popup';
import { setFilter } from 'store/actions/ServiceFilter';
import Navigator from './Navigator';
import ProviderTable from './ProviderTable';
import ServiceTable from './ServiceTable';
import { connect } from 'react-redux';
import Icon from 'icon';

const Dashboard = ({ serviceFilter, dispatch, ...props }) => {
  const [showTable, setShowTable] = useState('partners');
  const [partnerCount, setPartnerCount] = useState(0);
  const [serviceCount, setServiceCount] = useState(0);

  return (
    <Fragment>
      <Container className="mb-8 pt-16">
        <h1 className="text-darkdrop text-lg font-bold mb-6">Dashboard</h1>

        <Navigator
          count={ showTable === 'partners' ? partnerCount : serviceCount }
          switchTable={ e => setShowTable(e) }
          tableType={ showTable }
        />
      </Container>

      <Container className="pb-20">
        <div className="border border-gray-300 shadow">
          { showTable === 'partners' && <ProviderTable setCount={ e => setPartnerCount(e) } /> }
          { showTable === 'services' && <ServiceTable setCount={ e => setServiceCount(e) } /> }

          <div className="flex justify-between p-5">
            <div className="flex items-center text-xs">
              <p>Show</p>

              <select
                className="border p-1 ml-2 font-bold"
                onClick={ e => dispatch(setFilter({limit: e.target.value})) }
              >
                <option value="10">10</option>
                <option value="25">25</option>
                <option value="50">40</option>
                <option value="90">90</option>
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

      { props.showModalNewPartner && <AddNewPartner /> }
      { props.showModalEditPartner && <EditPartner /> }
      { props.showModalDeleteConfirm && <DeleteConfirm /> }
      { props.showModalNewService && <AddNewService /> }
      { props.showModalEditService && <EditService /> }
    </Fragment>
  );
}

const mapStateToProps = state => ({
  ...state.modalControl,
  serviceFilter: state.serviceFilter
})

export default connect(mapStateToProps)(Dashboard);
