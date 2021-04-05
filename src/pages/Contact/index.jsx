import React, { Fragment } from 'react';
import { Container, Row, Col } from 'lib/elements/Grid';
import Breadcrumb from 'lib/components/Breadcrumb';
import Icon from 'icon';

const Contact = () => {
  return (
    <Fragment>
      <Breadcrumb base={[ 'Home' ]} current="Contact" />

      <Container className="py-20">
        <Row>
          <Col md={4}>
            <h1 className="text-2xl font-bold">Contact us</h1>

            <p className="text-xs md:text-sm mt-3">
              We are here to help you find the best solution and answer any question you might have. We look forward to hearing from you.
            </p>

            <h2 className="mt-8 font-bold mb-5">
              VIETNAM HQ
            </h2>

            <div className="flex items-center">
              <div className="mr-3">
                <Icon name="phone" color="text-orange" size={18} />
              </div>

              <p>+84 918 866 858</p>
            </div>

            <div className="flex items-center mt-4">
              <div className="mr-3">
                <Icon name="email" color="text-orange" size={18} />
              </div>

              <p>info@viettonkin.com</p>
            </div>

            <div className="flex items-start mt-4">
              <div className="mr-3">
                <Icon name="map-marker" color="text-orange" size={21} />
              </div>

              <p className="text-sm md:text-base">
                Level 6A, Dien Bien Office Building, No. 9A Lane 9 Hoang Cau Street, O Cho Dua Ward, Dong Da District, Hanoi.
              </p>
            </div>
          </Col>

          <Col md={8}>
            <form className="flex flex-row flex-wrap mt-12 md:mt-0 ">
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
          </Col>
        </Row>
      </Container>

    </Fragment>
  );
}

export default Contact;
