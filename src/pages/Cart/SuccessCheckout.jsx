import React, { Fragment } from 'react';
import { Container } from 'components/Grid';
import Icon from 'icon';
import StepIndicator from './StepIndicator';

const SuccessCheckout = () => {

  return (
    <Fragment>
      <StepIndicator step={3} />

      <Container className="px-6 md:px-20 lg:px-32 py-24">
        <div className="sm:w-6/12 mx-auto text-center shadow-md rounded-md pt-6">
          <span className="w-14 h-14 bg-orange mx-auto flex justify-center items-center rounded-full">
            <Icon name="checklist" />
          </span>

          <h1 className="text-2xl py-5 font-bold">Success!</h1>

          <article className="text-gray-500 mb-8">
            <p>Thank you, <b>Pepx!</b></p>
            <p>Your service request has been submitted.</p>
            <p>Our team will get back to you within 24 - 42 hours.</p>
          </article>

          <button className="w-full bg-orange p-4 rounded-b-md text-white text-center">
            BACK TO SERVICES
          </button>
        </div>
      </Container>
    </Fragment>
  );
}

export default SuccessCheckout;
