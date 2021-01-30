import React, { Fragment, useEffect, useState } from 'react';
import { Container } from 'lib/elements/Grid';
import Navigator from './Navigator';
import ServiceTable from './ServiceTable';
import { connect } from 'react-redux';
import TableFooter from './TableFooter';

const PartnerDashboard = () => {
  const [serviceCount, setServiceCount] = useState(0);
  const [data, setData] = useState(0);

  useEffect(() => {
    setData({count: serviceCount.count, page: serviceCount.pages});
  }, [serviceCount])

  return (
    <Fragment>
      <Container className="mb-8 pt-16">
        <h1 className="text-darkdrop text-lg font-bold mb-6">Dashboard</h1>

        <Navigator count={ data.count } tableType="partners" />
      </Container>

      <Container className="pb-20">
        <div className="border border-gray-300 shadow">
          <ServiceTable setCount={ e => setServiceCount(e) } />

          <TableFooter data={ data } />
        </div>
      </Container>
    </Fragment>
  );
}

const mapStateToProps = state => ({
  ...state.modalControl,
  currentPage: state.serviceFilter.page
})

export default connect(mapStateToProps)(PartnerDashboard);
