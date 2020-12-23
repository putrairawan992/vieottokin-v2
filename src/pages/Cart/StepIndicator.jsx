import React from 'react';
import { Container } from 'components/Grid';
import { withRouter } from 'react-router-dom';
import Icon from 'icon';
import { Row } from 'components/Grid';

const badgeStyle = 'text-white justify-center items-center w-8 h-8 font-bold rounded-full inline-flex';

const StepIndicator = ({ step, backButton, history }) => (
  <Container fluid className="md:py-6 py-3 shadow">
    <Container>
      <Row className="items-center justify-between">
        <div className="flex md:flex-row flex-col">
          <div className="md:w-44 flex items-center md:justify-between md:mr-6 ">
            <span className={ `bg-softdrop ${badgeStyle}` }>
              1
            </span>

            <p className="text-softdrop text-sm mx-3 md:m-0">
              Order Details
            </p>

            <Icon name="chevron-right" color="#999" size={ 10 } />
          </div>

          <div className="md:w-60 flex items-center md:justify-between md:mr-6 mt-2 md:mt-0">
            <span className={ `${step === 2 || step === 3 ? 'bg-softdrop' : 'bg-gray-400'} ${badgeStyle}` }>
              2
            </span>

            <p className={ `${step === 2 || step === 3 ? 'text-softdrop' : 'text-gray-400'} text-sm mx-3 md:m-0` }>
              Submit Requirements
            </p>

            <Icon name="chevron-right" color="#999" size={ 10 } />
          </div>

          <div className="md:w-28 flex items-center md:justify-between mt-2 md:mt-0">
            <span className={ `${step === 3 ? 'bg-softdrop' : 'bg-gray-400'} ${badgeStyle}` }>
              3
            </span>

            <p className={ `${step === 3 ? 'text-softdrop' : 'text-gray-400'} text-sm mx-3 md:m-0` }>
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
