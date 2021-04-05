import React, { Fragment, useEffect, useState } from 'react';
import { Container } from 'lib/elements/Grid';
import Navigator from './components/Navigator';
import ProviderTable from './components/ProviderTable';
import ServiceTable from './components/ServiceTable';
import TableFooter from './components/TableFooter';

const AdminDashboard = () => {
  const [showTable, setShowTable] = useState('partners');
  const [partnerCount, setPartnerCount] = useState(0);
  const [serviceCount, setServiceCount] = useState(0);
  const [data, setData] = useState(0);

  const switchTable = state => {
    setShowTable(state);
    localStorage.setItem('@viettonkin:tableType', state);
  }

  useEffect(() => {
    const setTable = localStorage.getItem('@viettonkin:tableType');
    setShowTable(setTable || 'partners');
  }, [])

  useEffect(() => {
    if (showTable === 'partners') {
      setData({count: partnerCount.count, page: partnerCount.pages});
    } else {
      setData({count: serviceCount.count, page: serviceCount.pages});
    }
  }, [showTable, partnerCount, serviceCount]);

  return (
    <Fragment>
      <Container className="mb-8 pt-16">
        <h1 className="text-darkdrop text-lg font-bold mb-6">Dashboard</h1>

        <Navigator
          count={ data.count }
          switchTable={ e => switchTable(e) }
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

export default AdminDashboard;
