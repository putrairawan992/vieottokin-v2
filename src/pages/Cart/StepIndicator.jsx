import React from 'react';
import { Container } from 'components/Grid';
import { withRouter } from 'react-router-dom';
import Icon from 'icon';
import { Row } from 'components/Grid';

const badgeStyle = 'text-white justify-center items-center w-8 h-8 font-bold rounded-full inline-flex';

const StepIndicator = ({ step, backButton, history }) => (
  <Container fluid className="py-6 shadow">
    <Container>
      <Row className="items-center justify-between">
        <div className="flex">
          <div className="w-44 flex items-center justify-between mr-6">
            <span className={ `bg-softdrop ${badgeStyle}` }>
              1
            </span>

            <p className="text-softdrop text-sm">
              Order Details
            </p>

            <Icon name="chevron-right" color="#999" size={ 10 } />
          </div>

          <div className="w-60 flex items-center justify-between mr-6">
            <span className={ `${step === 2 || step === 3 ? 'bg-softdrop' : 'bg-gray-400'} ${badgeStyle}` }>
              2
            </span>

            <p className={ `${step === 2 || step === 3 ? 'text-softdrop' : 'text-gray-400'} text-sm` }>
              Submit Requirements
            </p>

            <Icon name="chevron-right" color="#999" size={ 10 } />
          </div>

          <div className="w-28 flex items-center justify-between">
            <span className={ `${step === 3 ? 'bg-softdrop' : 'bg-gray-400'} ${badgeStyle}` }>
              3
            </span>

            <p className={ `${step === 3 ? 'text-softdrop' : 'text-gray-400'} text-sm` }>
              Complete
            </p>
          </div>
        </div>

        { backButton && <button className="flex items-center text-orange text-sm" onClick={ () => history.goBack() }>
          <Icon name="arrow-left" color="#F58120" size={ 10 } />
          <span className="ml-3 font-bold">GO BACK</span>
        </button> }
      </Row>
    </Container>
  </Container>
);

export default withRouter(StepIndicator);
