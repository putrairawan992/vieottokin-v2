import React, { Fragment, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'lib/elements/Grid';
import StepIndicator from './StepIndicator';
import { create } from 'utils/api';

const CartForm = ({ countryList, wistlist }) => {
  const history = useHistory();
  const [companyName, setCompanyName] = useState('');
  const [country, setCountry] = useState({currency: '', name: ''});
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [position, setPosition] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [industry, setIndustry] = useState('');

  const submit = e => {
    e.preventDefault();

    const data = {
      companyName: companyName,
      country: country,
      firstName: firstName,
      lastName: lastName,
      position: position,
      email: email,
      phone: phone,
      industry: industry,
      services_ordered: wistlist
    };

    create('zoho/checkout', data)
      .then(() => history.push('/success-checkout'));
  }

  return (
    <Fragment>
      <StepIndicator step={2} backButton />

      <div className="px-6 md:px-20 lg:px-32 py-24">
        <form onSubmit={ submit } className="sm:w-6/12 mx-auto shadow-md rounded-md">
          <h1 className="text-xl font-bold border-b p-5">
            Information
          </h1>

          <Container className="mt-6">
            <Row className="mb-5">
              <Col md={6}>
                <span className="mb-2 text-sm font-semibold">Company Name</span>

                <input
                  required
                  className="border w-full py-1 px-2"
                  onChange={e => setCompanyName(e.target.value)}
                />
              </Col>

              <Col md={6}>
                <span className="mb-2 text-sm font-semibold">Company Website</span>

                <input
                  required
                  className="border w-full py-1 px-2"
                />
              </Col>
            </Row>

            <Row className="mb-5">
              <Col md={12} className="flex-col">
                <span className="mb-2 text-sm font-bold">Country</span>

                <select
                  onChange={e => setCountry({
                    currency: e.target.value,
                    name: e.target[e.target.selectedIndex].getAttribute('name')
                  })}
                  className="border p-2 text-xs text-gray-500 w-full"
                >
                  <option>Select country</option>
                  { countryList?.map(({id, name, currencySymbol}) => (
                    <option key={ id } value={ currencySymbol } name={ name }>{ name }</option>
                  )) }
                </select>
              </Col>
            </Row>

            <Row className="mb-5">
              <Col md={6}>
                <span className="mr-5 mb-2 text-sm font-bold">First Name</span>

                <input
                  required
                  className="border w-full py-1 px-2"
                  onChange={e => setFirstName(e.target.value)}
                />
              </Col>

              <Col md={6}>
                <span className="mr-5 mb-2 text-sm font-bold">Last Name</span>

                <input
                  required
                  className="border w-full py-1 px-2"
                  onChange={e => setLastName(e.target.value)}
                />
              </Col>
            </Row>

            <Row className="mb-5">
              <Col md={6}>
                <span className="mr-5 mb-2 text-sm font-bold">Position</span>

                <input
                  required
                  className="border w-full py-1 px-2"
                  onChange={e => setPosition(e.target.value)}
                />
              </Col>

              <Col md={6}>
                <span className="mr-5 mb-2 text-sm font-bold">Email</span>

                <input
                  required
                  type="email"
                  className="border w-full py-1 px-2"
                  onChange={e => setEmail(e.target.value)}
                />
              </Col>
            </Row>

            <Row className="mb-5">
              <Col md={6}>
                <span className="mr-5 mb-2 text-sm font-bold">Phone</span>

                <input
                  required
                  className="border w-full py-1 px-2"
                  onChange={e => setPhone(e.target.value)}
                />
              </Col>

              <Col md={6}>
                <span className="mr-5 mb-2 text-sm font-bold">Industry</span>

                <input
                  required
                  className="border w-full py-1 px-2"
                  onChange={e => setIndustry(e.target.value)}
                />
              </Col>
            </Row>
          </Container>

          <button className="w-full block bg-orange p-4 rounded-b-md text-white text-center">
            SUBMIT
          </button>
        </form>
      </div>
    </Fragment>
  );
}

const mapStateToProps = state => ({
  countryList: state.globalState.countryList,
  wistlist: state.wistlist.wistlist
});

export default connect(mapStateToProps)(CartForm);
