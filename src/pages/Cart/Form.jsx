import React, { Fragment } from 'react';
import { Container, Row } from 'components/Grid';
import StepIndicator from './StepIndicator';

const CartForm = () => {

  return (
    <Fragment>
      <StepIndicator step={2} backButton />

      <Container className="px-6 md:px-20 lg:px-32 py-24">
        <form className="sm:w-6/12 mx-auto shadow-md rounded-md">
          <h1 className="text-xl font-bold border-b p-5">
            Information
          </h1>

          <Row className="mt-6 -mx-2 p-5">
            <div className="w-6/12 px-2">
              <label className="w-full flex flex-col mb-5">
                <span className="mr-5 mb-2 text-sm font-semibold">Company Name</span>

                <input
                  required
                  className="border py-1 px-2"
                />
              </label>
            </div>

            <div className="w-6/12 px-2">
              <label className="w-full flex flex-col mb-5">
                <span className="mr-5 mb-2 text-sm font-semibold">Company Website</span>

                <input
                  required
                  className="border py-1 px-2"
                />
              </label>
            </div>

            <div className="w-full px-2">
              <label className="w-full flex flex-col mb-5">
                <span className="mr-5 mb-2 text-sm font-bold">Country</span>

                <select className="border p-2 text-xs text-gray-500">
                  <option>Select country</option>
                </select>
              </label>
            </div>

            <div className="w-6/12 px-2">
              <label className="w-full flex flex-col mb-5">
                <span className="mr-5 mb-2 text-sm font-semibold">First Name</span>

                <input
                  required
                  className="border py-1 px-2"
                />
              </label>
            </div>

            <div className="w-6/12 px-2">
              <label className="w-full flex flex-col mb-5">
                <span className="mr-5 mb-2 text-sm font-semibold">Last Name</span>

                <input
                  required
                  className="border py-1 px-2"
                />
              </label>
            </div>

            <div className="w-6/12 px-2">
              <label className="w-full flex flex-col mb-5">
                <span className="mr-5 mb-2 text-sm font-semibold">Position</span>

                <input
                  required
                  className="border py-1 px-2"
                />
              </label>
            </div>

            <div className="w-6/12 px-2">
              <label className="w-full flex flex-col mb-5">
                <span className="mr-5 mb-2 text-sm font-semibold">Email</span>

                <input
                  required
                  className="border py-1 px-2"
                />
              </label>
            </div>

            <div className="w-6/12 px-2">
              <label className="w-full flex flex-col mb-5">
                <span className="mr-5 mb-2 text-sm font-semibold">Phone</span>

                <input
                  required
                  className="border py-1 px-2"
                />
              </label>
            </div>

            <div className="w-6/12 px-2">
              <label className="w-full flex flex-col mb-5">
                <span className="mr-5 mb-2 text-sm font-semibold">Industry</span>

                <input
                  required
                  className="border py-1 px-2"
                />
              </label>
            </div>

          </Row>

          <button className="w-full bg-orange p-4 rounded-b-md text-white text-center">
            SUBMIT
          </button>
        </form>
      </Container>
    </Fragment>
  );
}

export default CartForm;
