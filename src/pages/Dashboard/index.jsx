import React, { Fragment, useEffect, useState } from 'react';
import { Container } from 'lib/elements/Grid';
import { AddNewPartner, AddNewService, EditPartner, DeleteConfirm, EditService } from 'lib/components/Popup';
import Navigator from './Navigator';
import ProviderTable from './ProviderTable';
import ServiceTable from './ServiceTable';
import { connect } from 'react-redux';
import TableFooter from './TableFooter';

const Dashboard = ({ currentPage, dispatch, ...props }) => {
  const [showTable, setShowTable] = useState('partners');
  const [partnerCount, setPartnerCount] = useState(0);
  const [serviceCount, setServiceCount] = useState(0);
  const [data, setData] = useState(0);

  useEffect(() => {
    if (showTable === 'partners') {
      setData({count: partnerCount.count, page: partnerCount.pages});
    } else {
      setData({count: serviceCount.count, page: serviceCount.pages});
    }
  }, [showTable, partnerCount, serviceCount])

  return (
    <Fragment>
      <Container className="mb-8 pt-16">
        <h1 className="text-darkdrop text-lg font-bold mb-6">Dashboard</h1>

        <Navigator
          count={ data.count }
          switchTable={ e => setShowTable(e) }
          tableType={ showTable }
        />
      </Container>

      <Container className="pb-20">
        <div className="border border-gray-300 shadow">
          { showTable === 'partners' && <ProviderTable setCount={ e => setPartnerCount(e) } /> }
          { showTable === 'services' && <ServiceTable setCount={ e => setServiceCount(e) } /> }

          <TableFooter data={ data } />
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
  currentPage: state.serviceFilter.page
})

export default connect(mapStateToProps)(Dashboard);
