import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { openSignin } from 'store/actions/ModalControl';
import { connect } from 'react-redux';
import { Container, Row } from 'lib/elements/Grid';
import SearchInput from 'lib/components/SearchInput';
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
    link: '/faq'
  }
]

const navStyle = {
  mobile: 'flex-col w-full flex-grow text-right items-center top-12 z-20 bg-softdrop absolute',
  desktop: 'md:static md:flex md:mt-0 md:w-6/12 md:flex-row md:justify-end'
};

const Navbar = ({ dispatch, location }) => {
  const [mobile, setMenu] = useState(false);

  return (
    <Container fluid className="py-3 bg-softdrop text-white">
      <Container>
        <Row className="md:text-sm text-md relative items-center justify-between">
          <img src="images/logo.svg" className="md:w-2/12 w-4/12" alt="logo" />

          <div className="relative md:block hidden w-4/12 md:pl-10">
            <SearchInput />
          </div>

          <button className="md:hidden" onClick={ () => setMenu(!mobile) }>
            <Icon name="menu" size={32} />
          </button>

          <nav className={ `${mobile ? 'flex' : 'hidden'} ${navStyle.desktop} ${navStyle.mobile}` }>
            { listMenu.map((item, i) => (
              <Link
                onClick={ () => setMenu(!mobile) }
                className="md:mx-4 pr-4 md:pr-0 whitespace-nowrap my-1 w-full md:my-0 md:w-auto"
                to={ item.link } key={ i }
              >
                { item.label }
              </Link>
            )) }

            <div className="text-blue flex justify-between py-2 px-4 w-full md:ml-10 md:w-auto md:mt-0 mt-3">
              <div className="block relative w-full mr-6 md:pl-10 md:hidden md:mr-0">
                <SearchInput />
              </div>

              { !location.pathname.includes('dashboard') ? <button
                className="flex items-center"
                onClick={ () => dispatch(openSignin(true)) }
              >
                <Icon name="user" size={ 12 } color="#20BFEF" className="mr-2" />
                Login
              </button> :
              <button className="flex items-center">
                <img src="/images/demo-user.png" alt="user" className="w-10 md:w-12" />
                <Icon name="triangle" size={ 12 } className="ml-10" />
              </button> }
            </div>
          </nav>
        </Row>
      </Container>
    </Container>
  );
}

export default withRouter(connect()(Navbar));
