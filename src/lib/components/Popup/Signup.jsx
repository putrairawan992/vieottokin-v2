import React, { useState } from 'react';
import { Container, Row, Col } from 'lib/elements/Grid';
import { openOffer, openSignup } from 'store/actions/ModalControl';
import { connect } from 'react-redux';
import Icon from 'icon';
import Modal from 'lib/elements/Modal';

const SigninPopup = ({countryList, dispatch}) => {
  const [companyName, setCompanyName] = useState('');
  const [companyWeb, setCompanyWeb] = useState('');
  const [country, setCountry] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [position, setPosition] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [industry, setIndustry] = useState('');

  const submit = e => {
    e.preventDefault();

    dispatch(openSignup(false));
    dispatch(openOffer({
      companyName: companyName,
      companyWebsite: companyWeb,
      country: country,
      firstName: firstName,
      lastName: lastName,
      position: position,
      email: email,
      phone: phone,
      industry: industry
    }));
  };

  return (
    <Modal>
      <div className="text-center p-6 pb-0">
        <button className="ml-auto block" onClick={ () => dispatch(openSignup(false)) }>
          <Icon name="close" color="text-grey-icon" />
        </button>
      </div>

      <div className="flex flex-col">
        <div className="text-center border-b mb-6">
          <h3 className="font-medium text-2xl px-6">Welcome!</h3>

          <p className="text-sm mt-4 px-3 md:px-8 mb-6">
            Thank you for your interest in becoming a part of the Ventoorhub network. Please let us know a little about the magic your company offers. We will get back to you right away!
          </p>
        </div>

        <form onSubmit={ submit }>
          <Container>
            <Row className="mb-5">
              <Col md={6}>
                <label>
                  <span className="mb-2 text-sm font-bold">Company Name</span>

                  <input
                    required
                    className="border py-1 px-2 w-full"
                    onChange={e => setCompanyName(e.target.value)}
                  />
                </label>
              </Col>

              <Col md={6}>
                <label>
                  <span className="mb-2 text-sm font-bold">Company Website</span>

                  <input
                    required
                    pattern="[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9](?:\.[a-zA-Z]{2,})+"
                    placeholder="Enter valid domain without http/s"
                    className="border py-1 px-2 w-full"
                    onChange={e => setCompanyWeb(e.target.value)}
                  />
                </label>
              </Col>
            </Row>

            <Row className="mb-5">
              <Col md={12} className="flex-col">
                <label>
                  <span className="mb-2 text-sm font-bold">Country</span>

                  <select
                    onChange={e => setCountry(e.target.value)}
                    className="border p-2 text-xs text-gray-500 w-full"
                  >
                    <option>Select country</option>
                    { countryList?.map(({id, name}) => (
                      <option key={ id } value={ name }>{ name }</option>
                    )) }
                  </select>
                </label>
              </Col>
            </Row>

            <Row className="mb-5">
              <Col md={6}>
                <label>
                  <span className="mr-5 mb-2 text-sm font-bold">First Name</span>

                  <input
                    required
                    className="border py-1 px-2 w-full"
                    onChange={e => setFirstName(e.target.value)}
                  />
                </label>
              </Col>

              <Col md={6}>
                <label>
                  <span className="mr-5 mb-2 text-sm font-bold">Last Name</span>

                  <input
                    required
                    className="border py-1 px-2 w-full"
                    onChange={e => setLastName(e.target.value)}
                  />
                </label>
              </Col>
            </Row>

            <Row className="mb-5">
              <Col md={6}>
                <label>
                  <span className="mr-5 mb-2 text-sm font-bold">Position</span>

                  <input
                    required
                    className="border py-1 px-2 w-full"
                    onChange={e => setPosition(e.target.value)}
                  />
                </label>
              </Col>

              <Col md={6}>
                <label>
                  <span className="mr-5 mb-2 text-sm font-bold">Email</span>

                  <input
                    required
                    type="email"
                    className="border py-1 px-2 w-full"
                    onChange={e => setEmail(e.target.value)}
                  />
                </label>
              </Col>
            </Row>

            <Row className="mb-5">
              <Col md={6}>
                <label>
                  <span className="mr-5 mb-2 text-sm font-bold">Phone</span>

                  <input
                    required
                    className="border py-1 px-2 w-full"
                    onChange={e => setPhone(e.target.value)}
                  />
                </label>
              </Col>

              <Col md={6}>
                <label>
                  <span className="mr-5 mb-2 text-sm font-bold">Industry</span>

                  <input
                    required
                    className="border py-1 px-2 w-full"
                    onChange={e => setIndustry(e.target.value)}
                  />
                </label>
              </Col>
            </Row>
          </Container>

          <button className="bg-orange w-full py-3 mt-4 text-white rounded-b-md">
            NEXT
          </button>
        </form>
      </div>
    </Modal>
  );
}

const mapStateToProps = state => ({
  countryList: state.globalState.countryList
});

export default connect(mapStateToProps)(SigninPopup);
