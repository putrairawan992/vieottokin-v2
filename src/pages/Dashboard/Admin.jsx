import React, { Fragment, useEffect, useState } from 'react';
import { Container } from 'lib/elements/Grid';
import Navigator from './Navigator';
import ProviderTable from './ProviderTable';
import ServiceTable from './ServiceTable';
import { connect } from 'react-redux';
import TableFooter from './TableFooter';

const AdminDashboard = () => {
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
    </Fragment>
  );
}

export default connect()(AdminDashboard);
