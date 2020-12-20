import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { openOffer } from 'store/actions/ModalControl';
import { connect } from 'react-redux';
import { Container, Row } from 'components/Grid';
import SearchInput from 'components/SearchInput';
import Icon from 'icon';

const listMenu = [
  {
    label: 'Home',
    link: '/landing-page'
  }, {
    label: 'Service',
    link: '/service-providers'
  }, {
    label: 'How it works',
    link: '/#'
  }, {
    label: 'Help',
    link: '/#'
  }
]

const Navbar = ({ dispatch, location }) => {
  return (
    <Container fluid className="py-3 bg-softdrop text-white">
      <Container>
        <Row className ="md:items-center md:justify-between md:flex-row">
          <img src="images/logo.svg" className="w-2/12" alt="logo" />

          <SearchInput />

          <nav className="flex-col w-5/12 flex-grow pb-4 md:pb-0 hidden md:flex md:justify-end md:flex-row items-center">
            { listMenu.map((item, i) => (
              <Link
                className="mt-2 text-sm md:mt-0 mx-4"
                to={ item.link } key={ i }
              >
                { item.label }
              </Link>
            )) }

            { !location.pathname.includes('dashboard') ? <button
              className="flex items-center text-blue ml-10"
              onClick={ () => dispatch(openOffer(true)) }
            >
              <Icon name="user" size={ 12 } color="#20BFEF" className="mr-2" />
              Login
            </button>
            :
            <button
              className="flex items-center ml-10"
            >
              <img src="/images/demo-user.png" alt="user" className="w-12" />
              <Icon name="triangle" size={ 12 } className="ml-10" />
            </button>}
          </nav>
        </Row>
      </Container>
    </Container>
  );
}

export default withRouter(connect()(Navbar));
