import React, { Fragment, useEffect } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import PrivateRoute from 'utils/privateRoute';
import Loading from 'lib/elements/Loading';
import { resetFilter } from 'store/actions/ServiceFilter';

import { Signup, Signin, Offer } from 'lib/components/Popup';
import Navbar from 'lib/components/Navbar';
import Footer from 'lib/components/Footer';
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

const RouterManager = ({ progress, location, dispatch, ...props }) => {
  useEffect(() => {
    if (location.pathname !== '/service-providers') dispatch(resetFilter());
  }, [location.pathname]);

  return (
    <Fragment>
      <Navbar />

      <Route render={({location}) => (
        <TransitionGroup>
          <CSSTransition
            key={location.key}
            classNames="fade"
            timeout={300}
          >
            <Switch location={location}>
              <Route exact path='/' component={ AboutUs } />
              <Route path='/landing-page' component={ LandingPage } />
              <Route path='/service-providers' component={ ServiceProvider } />
              <Route path='/profile-provider/:id' component={ ProfileProvider } />
              <Route path='/submit-requirements' component={ CartForm } />
              <Route path='/success-checkout' component={ SuccessCheckout } />
              <Route path='/faq' component={ FAQ } />
              <Route path='/contact' component={ Contact } />
              <PrivateRoute path='/cart' component={ Cart } />
              <PrivateRoute path='/dashboard' component={ Dashboard } />
            </Switch>

          </CSSTransition>
        </TransitionGroup>
      )} />

      <Footer />

      { props.showModalSignup && <Signup /> }
      { props.showModalSignin && <Signin /> }
      { props.showModalOffer && <Offer /> }

      <Loading shown={progress} />
    </Fragment>
  );
}

function mapStateToProps(state) {
  return {
    ...state.modalControl,
    progress: state.isLoading.isLoading
  };
}

export default withRouter(connect(mapStateToProps)(RouterManager));
