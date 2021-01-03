import React, { Fragment } from 'react';
import { Container } from 'lib/elements/Grid';
import Icon from 'icon';

import JapanFlag from 'icon/japan-flag.svg';

const ListProvider = ({ base, current }) => {
  return (
    <Fragment>
      <Container fluid className="md:px-6 lg:px-8 relative shadow py-4">
        <Container className="flex md:flex-row flex-col justify-between">
          <div className="text-xs flex items-center">
            { base.map((item, i) => (
              <Fragment key={ i }>
                <span>{ item }</span>
                <Icon name="arrow-right" color="#000" size={ 6 } className="mx-3" />
              </Fragment>
            )) }

            <span className="font-bold text-orange">{ current }</span>
          </div>

          <div className="text-xs flex items-center mt-3 md:mt-0">
            <div className="flex items-center">
              <img src={ JapanFlag } alt="japan flag" />
              <p className="mx-3">Japan</p>
              <Icon name="triangle" color="#000" size={ 6 } />
            </div>

            <div className="flex items-center mx-5">
              <Icon name="bookmark" color="#000" size={ 12 } />
              <p className="ml-2">Saved</p>
            </div>

            <div className="flex items-center">
              <Icon name="cart" color="#000" size={ 12 } />
              <p className="ml-2">Cart (0)</p>
            </div>
          </div>
        </Container>
      </Container>

    </Fragment>
  );
}

export default ListProvider;
