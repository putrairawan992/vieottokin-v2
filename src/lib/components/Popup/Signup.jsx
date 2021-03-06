import React, { useState } from 'react';
import { Container, Row, Col } from 'lib/elements/Grid';
import { openSignup } from 'store/actions/ModalControl';
import axios from 'axios';
import { connect } from 'react-redux';
import Icon from 'icon';
import Modal from 'lib/elements/Modal';

const SigninPopup = ({countryList, dispatch}) => {
  const [companyName, setCompanyName] = useState('');
  const [companyWeb, setCompanyWeb] = useState('');
  const [country, setCountry] = useState({currency: '', name: ''});
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [position, setPosition] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [industry, setIndustry] = useState('');

  const submit = () => {
    const data = {
      Email: email,
      $currency_symbol: country.currency,
      Industry: industry,
      Country: country.name,
      Phone: phone,
      Company_Name: companyName,
      Website: companyWeb,
      First_Name: firstName,
      Full_Name: firstName + lastName,
      Position: position
  };

    axios.post('https://www.zohoapis.com/crm/v2/Lead', data, {
      headers: { 'Authorization': `Zoho-oauthtoken ${process.env.REACT_APP_ZOHO_TOKEN}`}
    })
      .then(res => console.log(res))
      .catch(err => alert(err));
  }

  return (
    <Modal>
      <div className="text-center p-6 pb-0">
        <button className="ml-auto block" onClick={ () => dispatch(openSignup(false)) }>
          <Icon name="close" color="#333" />
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
                <span className="mb-2 text-sm font-bold">Company Name</span>

                <input
                  required
                  className="border py-1 px-2"
                  onChange={e => setCompanyName(e.target.value)}
                />
              </Col>

              <Col md={6}>
                <span className="mb-2 text-sm font-bold">Company Website</span>

                <input
                  required
                  className="border py-1 px-2"
                  onChange={e => setCompanyWeb(e.target.value)}
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
                  className="border py-1 px-2"
                  onChange={e => setFirstName(e.target.value)}
                />
              </Col>

              <Col md={6}>
                <span className="mr-5 mb-2 text-sm font-bold">Last Name</span>

                <input
                  required
                  className="border py-1 px-2"
                  onChange={e => setLastName(e.target.value)}
                />
              </Col>
            </Row>

            <Row className="mb-5">
              <Col md={6}>
                <span className="mr-5 mb-2 text-sm font-bold">Position</span>

                <input
                  required
                  className="border py-1 px-2"
                  onChange={e => setPosition(e.target.value)}
                />
              </Col>

              <Col md={6}>
                <span className="mr-5 mb-2 text-sm font-bold">Email</span>

                <input
                  required
                  type="email"
                  className="border py-1 px-2"
                  onChange={e => setEmail(e.target.value)}
                />
              </Col>
            </Row>

            <Row className="mb-5">
              <Col md={6}>
                <span className="mr-5 mb-2 text-sm font-bold">Phone</span>

                <input
                  required
                  className="border py-1 px-2"
                  onChange={e => setPhone(e.target.value)}
                />
              </Col>

              <Col md={6}>
                <span className="mr-5 mb-2 text-sm font-bold">Industry</span>

                <input
                  required
                  className="border py-1 px-2"
                  onChange={e => setIndustry(e.target.value)}
                />
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
