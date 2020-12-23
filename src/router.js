import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import SignupPopup from 'components/Popup/Signup';
import SigninPopup from 'components/Popup/Signin';
import OfferPopup from 'components/Popup/Offer';
import Navbar from 'components/Navbar';
import Footer from 'components/Footer';
import AboutUs from 'pages/AboutUs';
import LandingPage from 'pages/LandingPage';
import ServiceProvider from 'pages/ServiceProvider';
import ProfileProvider from 'pages/ProfileProvider';
import Cart from 'pages/Cart';
import CartForm from 'pages/Cart/Form';
import SuccessCheckout from 'pages/Cart/SuccessCheckout';
import FAQ from 'pages/FAQ';
import Contact from 'pages/Contact';
import Dashboard from 'pages/Dashboard';

const RouterManager = props => (
  <Fragment>
    <Navbar />

    <Switch>
      <Route exact path='/' component={ AboutUs } />
      <Route path='/landing-page' component={ LandingPage } />
      <Route path='/service-providers' component={ ServiceProvider } />
      <Route path='/profile-provider' component={ ProfileProvider } />
      <Route path='/cart' component={ Cart } />
      <Route path='/submit-requirements' component={ CartForm } />
      <Route path='/success-checkout' component={ SuccessCheckout } />
      <Route path='/faq' component={ FAQ } />
      <Route path='/contact' component={ Contact } />
      <Route path='/dashboard' component={ Dashboard } />
    </Switch>

    <Footer />

    { props.showModalSignup && <SignupPopup /> }
    { props.showModalSignin && <SigninPopup /> }
    { props.showModalOffer && <OfferPopup /> }
  </Fragment>
);

function mapStateToProps(state) {
  return state.modalControl;
}

export default connect(mapStateToProps)(RouterManager);
