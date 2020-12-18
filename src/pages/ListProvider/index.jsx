import React, { Fragment } from 'react';
import Container from 'components/Container';
import Breadcrumb from 'components/Breadcrumb';
import Icon from 'icon';

const ListProvider = () => {
  return (
    <Fragment>
      <Breadcrumb base="Home" current="Search" />

      <Container fluid className="md:px-6 lg:px-8 relative py-20">
        <div className="shadow">

        </div>
      </Container>

    </Fragment>
  );
}

export default ListProvider;
