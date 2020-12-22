import React, { Fragment } from 'react';
import { Container } from 'components/Grid';
import { connect } from 'react-redux';
import Button from 'components/Button';
import Offer from 'components/Popup/Offer';
import Signup from 'components/Popup/Signup';
import { openOffer, openSignup } from 'store/actions/ModalControl';

const HeroCTA = ({ showModalOffer, showModalSignup, dispatch }) => {
  return (
    <Fragment>
      <Container fluid className="md:px-6 lg:px-8 relative text-center py-28">
        <Container>
          <div className="relative max-w-screen-md text-white z-10 mx-auto">
            <h2 className="mb-4 text-4xl font-bold">
              Let’s get you up to speed!
            </h2>

            <p>
              We’re ready to help your company grow. Talk with us and find the best service provider, or if you want to offer your service globally with Ventoorhub.
            </p>

            <div className="mt-7">
              <Button
                type="solid"
                onClick={ () => dispatch(openOffer(true)) }
                className="px-12 py-4 mx-4"
              >
                Find Service Providers
              </Button>

              <Button
                type="outline"
                onClick={ () => dispatch(openSignup(true)) }
                className="px-12 py-4 mx-3 text-orange"
              >
                Join Our Network of Partners
              </Button>
            </div>
          </div>

          <div className="absolute inset-0 overflow-hidden z-0">
            <img src="/images/about-cta.jpg" alt="contact" className="w-full h-full object-cover" />
          </div>
        </Container>
      </Container>

      { showModalOffer && <Offer /> }
      { showModalSignup && <Signup /> }
    </Fragment>
  );
}

function mapStateToProps(state) {
  return state.modalControl
}

export default connect(mapStateToProps)(HeroCTA);