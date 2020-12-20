import React, { Fragment } from 'react';
import { Container, Row } from 'components/Grid';
import Breadcrumb from 'components/Breadcrumb';
import Icon from 'icon';

const Contact = () => {
  return (
    <Fragment>
      <Breadcrumb base={[ 'Home' ]} current="Contact" />

      <Container className="py-20">
        <Row className="-mx-3">
          <div className="w-4/12 px-8">
            <h1 className="text-2xl font-bold">Contact us</h1>

            <p className="text-sm mt-3">
              We are here to help you find the best solution and answer any question you might have. We look forward to hearing from you.
            </p>

            <h2 className="mt-8 font-bold mb-5">
              VIETNAM HQ
            </h2>

            <div className="flex items-center">
              <div className="w-10">
                <Icon name="phone" color="#f58120" size={18} />
              </div>

              <span>+84 918 866 858</span>
            </div>

            <div className="flex items-center mt-4">
              <div className="w-10">
                <Icon name="email" color="#f58120" size={18} />
              </div>

              <span>info@viettonkin.com</span>
            </div>

            <div className="flex items-start mt-4">
              <div className="w-24">
                <Icon name="map-marker" color="#f58120" size={20} />
              </div>

              <span>Level 6A, Dien Bien Office Building, No. 9A Lane 9 Hoang Cau Street, O Cho Dua Ward, Dong Da District, Hanoi.</span>
            </div>
          </div>

          <div className="w-8/12 px-8">
            <Row className="w-full">
              <form className="flex flex-row flex-wrap">
                <label className="w-6/12 px-2 flex flex-col mb-5 rounded-lg">
                  <span className="mr-5 mb-2 text-sm font-bold">First name</span>

                  <input
                    required
                    className="border p-2"
                  />
                </label>

                <label className="w-6/12 px-2 flex flex-col mb-5 rounded-lg">
                  <span className="mr-5 mb-2 text-sm font-bold">Last name</span>

                  <input
                    required
                    className="border p-2"
                  />
                </label>

                <label className="w-full px-2 flex flex-col mb-5 rounded-lg">
                  <span className="mr-5 mb-2 text-sm font-bold">Email Address</span>

                  <input
                    required
                    className="border p-2"
                  />
                </label>

                <label className="w-full px-2 flex flex-col mb-5 rounded-lg">
                  <span className="mr-5 mb-2 text-sm font-bold">Phone</span>

                  <input
                    required
                    className="border p-2"
                  />
                </label>

                <label className="w-full px-2 flex flex-col mb-5 rounded-lg">
                  <span className="mr-5 mb-2 text-sm font-bold">How can we help you?</span>

                  <textarea
                    required
                    className="border p-2"
                  ></textarea>
                </label>

                <button className="bg-orange text-white px-16 mt-5 py-3 ml-auto mx-2">
                  SUBMIT
                </button>
              </form>
            </Row>
          </div>
        </Row>
      </Container>

    </Fragment>
  );
}

export default Contact;
